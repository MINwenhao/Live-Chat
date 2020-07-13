import React,{useState} from 'react';
import Questions from'./Questions';
import Result from './Result';
import './App.css';

function App() {
  
 
  const [count,setCount]=useState(0);
  const[result,setResult]=useState("");
  const[score,setScore]=useState(0);
  const[final,setFinal]=useState(0);
  
  //if(count===4){setFinal(score);setScore(0);setResult("");setCount(0);}
  
  return (
    <div className="App">
      <br/>
      <br/>
        
        <Questions 
        count={count} 
        changeCount={(newCount)=>setCount(newCount)}
        result={result}
        changeResult={(newAnswer)=>setResult(newAnswer)}
        />
        <Result
          result={result}
          changeResult={(newAnswer)=>setResult(newAnswer)}
          count={count}
          score={score}
          changeScore={(newScore)=>setScore(newScore)}
          final={final}
          changeFinal={(newFinal)=>{setFinal(newFinal)}}
     
          changeCount={(newCount)=>setCount(newCount)}
        />
        <br/>
        <br/>
    </div>
    
  );
}

export default App;
