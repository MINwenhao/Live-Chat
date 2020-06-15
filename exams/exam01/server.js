const express = require('express');
const app = express();
const PORT =3000;


const words=require('./words');
const wordServer=require('./words-server');

const selectWord=words.wordsList[Math.floor(Math.random()*words.wordsList.length+1)];
console.log(selectWord);
app.get('/', (req, res) => {
    res.send(wordServer.load(words,selectWord));
  });

app.post('/text', express.urlencoded({ extended: false }), (req, res) => {
    
    const text = req.body.text;
    wordServer.getResults(text,selectWord);
    res.redirect('/');
});
  

app.listen(PORT,() => console.log(`Listening on http://localhost:${PORT}`));