import React from 'react';



const Result = ({ count,result,score,changeScore,changeResult,final,changeFinal,changeCount}) => {

  if(result==="true"){changeScore(score+10);changeResult("True")};
  if(count===3){changeFinal(score)}

  if(count===3) return(
    <label htmlFor="final">your final score is :{final} 

            <button className="again" onClick={
              ()=>{
                changeCount(0);
                changeResult("");
                changeScore(0);
                
             
              }}>play again</button>
    </label>
    
  );
  return(
    <div className="result" >
       <label htmlFor="count">turn:
            {count}
        </label>
        <br/>
        <label htmlFor="result">your answer is : 
            {result}
        </label>
        <br/>
        <label htmlFor="score">your score is :    
            {score}
        </label>
        <br/>
        {/* <label htmlFor="final">your final score is :
            {final}
        </label> */}
    </div>
  );
};


export default Result;