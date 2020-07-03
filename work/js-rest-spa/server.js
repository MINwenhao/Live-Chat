const express=require('express');
const app=express();
const PORT=3000;
// const session=require('express-session');
// const cookieParser=require('cookie-parser');

const items=[{itemId:"0",name:"apple",quantity:"4"},
           {itemId:"1",name:"orange",quantity:"3"},
        {itemId:"2",name:"pear",quantity:"5"},
        {itemId:"3",name:"banana",quantity:"10"}];





app.use(express.static('./public'));


// app.use(session({
//     cookie:{user:"default",maxAge:24*3600*1000}
// }));





app.get('/items/',(req,res) =>{
   
    res.send(JSON.stringify(items));
    //res.json(Object.keys(items));
});




app.post('/items/',express.json(),(req,res)=>{
    const id=req.body.id;
    const name=req.body.name;
    
    if(!name){
        res.status(400).json({error:"missing-item"});
    }else if(items[name]){
        res.status(409).json({error:`duplicate:${name}`});
    }else{
        items[id]=req.body;
        res.sendStatus(200);
    }
});

app.delete('/items/:id',express.json(),(req,res)=>{
    const id=req.params.id;
    if(!id){
        res.status(400),json({error:"missing-itemId"});
    }else if(!items[id]){
        res.status(400),json({error:"wrong-itemid"});
    }else{
        //delete items[id];
        items.splice(id,1);
       console.log("test");
        res.sendStatus(200);
    }
});

app.patch('/items/:id',express.json(),(req,res)=>{
    
    const id=req.params.id;
    const num=req.body.quantity;
    if(!id){
        res.status(400).json({error:"missing-id"});
    }else{
        items[id].quantity=num;
        
        res.sendStatus(200);
    }
        
    
});

app.listen(PORT,()=> console.log(`http://localhost:${PORT}`));



