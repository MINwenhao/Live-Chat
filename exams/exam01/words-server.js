
function load(words,selectWord){
        
    

        return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title> guess words</title>
            </head>

            <body>
            <h1>guess words</h1>
            <p> select a word from the list </p>
            ${wordServer.getWords(words,selectWord)};
            
            <div class="form"> 
            ${wordServer.getMessages(selectWord)};
            </div>

            <div class="resultParas">
                
            
                
            </div>
            </body>
        </html>  
        `;
    };
    function getWords (words,selectWord){    
        const current=selectWord;
        messages.selectWord= current;
        messages.words=words.wordsList;
        
        return`<span class="username"> ${words.wordsList} </span>
        `; 
    };

  function getMessages (){
    return `<ol class="messages">
      <li>
        <div class="message">
          <div class="meta-info">
            <div class="sender-info">
            <p> how many times you have tried </p>
              <span class="messageCount">${wordServer.messages.count}</span>
            </div>
            <div class="message-info">
            <p> You just guessed</p>
              <span class="messageGuess">${wordServer.messages.guess}</span>
            </div>
          </div>
          <p> List of valid letters You just guessed</p>
          <p class="messageGuess">${wordServer.messages.listOfValid}</p>
          <p> number of valid letters You just guessed</p>
          <p class="messageGuessnum">${wordServer.messages.countLetters}</p>
          <p class="alert">${wordServer.messages.alert}</p>
         
        </div>
      </li>
    
    </ol>
    <div class="outgoing">
    <form action="/text" method="POST">
        <input class="to-send" name="text" value="" placeholder="Enter message to send"/>
        <button type="submit">Send</button>
     </form>
   </div>
    `;
        
    };

        
  

  function getResults(text,selectWord){
    
        
        let guessField=String(text).toUpperCase();
        let selectWord1=selectWord.toUpperCase();
        
        if(!messages.words.includes(guessField)){
            messages.alert='Your word is Invalid ';
            
        }

        if(guessField===selectWord1){
            messages.alert='Your Guessed Correctly!';
        }
        messages.count++;
        messages.guess+=guessField+", ";
        messages.listOfValid="";
        messages.countLetters=0;
        
        const guessLetters=guessField.split('');
        const selectLetters=selectWord1.split('');
        for(let i=0;i<guessLetters.length;i++){
            let j=0;
            while(j<selectLetters.length){
              if(selectLetters[j]===guessLetters[i]){
                messages.countLetters++;
                messages.listOfValid+=selectLetters[j]+", ";
                
                break;
              }
              j++;
            }
            
        }
        

  };
  let messages={
      text:"",
      selectWord:"",
      count:0,
      guess:" ",
      listOfValid:"",
        countLetters:0,
        words:[],
        alert:"",
  }
  

const wordServer={
    load,
    getMessages,
    getResults,
    getWords, 
    messages,
    
    
};
module.exports=wordServer;
