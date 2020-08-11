const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;

const chat=require('./chat');
const { v4: uuidv4 } = require('uuid');
const { messages } = require('./chat');

app.use(express.json());
app.use(cookieParser());
app.use(express.static('./build'));

//onload
app.get('/session',(req,res) =>{
    let uid=req.cookies.uid;
    if(!uid){
        res.status(401).json({code:'This is your first onload'});
        return;
    }
    if(!chat.users[uid]){
        res.clearCookie('uid')
        res.status(403).json({code:"Didn't find you record"});
        return;
    }
    res.json(chat.users[uid].username);
    res.sendStatus(200);
});
 //login
app.post('/session', express.json(), (req, res) => {
  const username = req.body.username;
  if(username === 'dog'||username==='') {
    res.status(403).json({ code: 'special name are not allowed'});
    return;
  }
  const clean = username.replace(/[^A-Za-z0-9_\-]/g, '');
  if(clean!==username){
      res.status(403).json({code:'only letters and numbers are allowed'});
      return;
  }
  if(chat.messages[username]){
      let uid=chat.password[username].uid;
      res.cookie('uid',uid,{ expires: new Date(Date.now() + 900000), httpOnly: true });
      res.sendStatus(200);
      return;
  }

  const uid = uuidv4();
  res.cookie('uid', uid,{ expires: new Date(Date.now() + 900000), httpOnly: true });
  chat.users[uid]={'username':username,'active':[],"uid":uid,"friends":[]}
  chat.password[username]={'uid':uid};
  chat.messages[username]={}
  res.sendStatus(200);
});
  //logout
  app.delete('/user',(req, res) => {
    let uid=req.cookies.uid;
    const name = chat.users[uid].username

    if(!chat.messages[name]) {
      res.status(400).json({ error: 'missing-name' });
      return;
    }
    res.clearCookie('sid');
    res.sendStatus(200);
  });

//get friedns
app.get('/user',(req,res) =>{
  let uid=req.cookies.uid;
  if(!uid){
      res.status(401).json({code:'This is your first onload'});
      return;
  }
  if(!chat.users[uid]){
      res.clearCookie('uid')
      res.status(403).json({code:"Didn't find you record"});
      return;
  }

  res.status(200).json(chat.users[uid].friends)
});
//add friend
app.post('/user/:username', express.json(), (req, res) => {
  const name = req.body.searchName;
  const username=req.body.username;
  if(name === 'dog'||name==='') {
    res.status(403).json({ code: 'special name are not allowed'});
    return;
  }
  const clean = name.replace(/[^A-Za-z0-9_\-]/g, '');
  if(clean!==name){
      res.status(403).json({code:'only letters and numbers are allowed'});
      return;
  }
  if(!chat.messages[name]||name===username){
    res.status(403).json({code:"didn't find this user"});
    return;
  }
  let uid=req.cookies.uid;

  if(chat.messages[username][name]){
    res.status(403).json({code:"You had add this user before"});
    return;
  }
  //delete request in list/////////
  if(!chat.users[uid].active.includes(name)){
    chat.users[chat.password[name].uid].active.push(username);
  }
  else{
    chat.users[uid].active.forEach(function(item, index, arr) {
      if(item === name) {
          arr.splice(index, 1);
      }
    })
  }


  
  
  chat.users[uid].friends.push(name);
  chat.messages[username][name]=[];
  
  res.sendStatus(200);
});


//get messages
app.post('/messages/:name', express.json(),(req, res) => {
    let uid = req.cookies.uid;
    if(!uid || !chat.users[uid] ) {
      res.status(401).json({ code: 'you are not allowed to get messages'});
      return;
    }
    const sender=chat.users[uid].username;
    const receiver=req.body.name;
    const messageSender=chat.messages[sender][receiver];
    const messageRevice=chat.messages[receiver][sender];
    const messages=messageSender.concat(messageRevice);

    res.status(200).json(messages)
  });
  

//send message
app.put('/messages/:name', express.json(),(req, res) => {
  let uid = req.cookies.uid;
  if(!uid || !chat.users[uid] ) {
    res.status(401).json({ code: 'you are not allowed to update messages'});
    return;
  }
  const name=chat.users[uid].username;
  const receiver=req.body.name;
  const text=req.body.message;
  chat.messages[name][receiver].push({uid,timestamp:new Date(),text,name})
  res.sendStatus(200);
});

//delete a friend
app.delete('/user/:name',(req, res) => {
  let uid=req.cookies.uid;
  const username=req.body.name;
  const name=req.body.friend;

  if(!chat.messages[name]||!chat.users[uid]) {
    res.status(400).json({ error: 'missing-name' });
    return;
  }

  chat.users[uid].friends.forEach(function(item, index, arr) {
    if(item === name) {
        arr.splice(index, 1);
    }
    });
  delete chat.messages[username][name]

  res.sendStatus(200);
});
//get request
app.get('/friend',(req,res) =>{
  let uid=req.cookies.uid;
 
  if(!chat.users[uid]||!uid){
      res.clearCookie('uid')
      res.status(401).json({code:"Didn't find you record"});
      return;
  }
  
  res.status(200).json(chat.users[uid].active)
});








app.listen(PORT,()=>console.log(`listening on http://localhost:${PORT}`))

