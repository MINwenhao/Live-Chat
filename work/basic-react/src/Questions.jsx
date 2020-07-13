import React from 'react';
import questions from './questionsInfo';


const title=Object.keys(questions);
title.sort(function() {
    return .5 - Math.random();
});



const Questions=({count,changeCount,result,changeResult}) =>{
    if(count===3) title.sort(function() {
        return .5 - Math.random();
    });
    if(count===3) return "";

    return (
        <div className="questions">
            <label htmlFor="question">question:
            {questions[title[count]].question}
            </label>
            <br/>
            <br/>
            <label htmlFor="options">option:
            <button className="submit"
            onClick={ 
            () => {
               changeResult((questions[title[count]].options.option1===questions[title[count]].answer).toString());
               changeCount(count+1);
                }}>A</button>
            {questions[title[count]].options.option1}
            <br/>option:
            <button className="submit"
            onClick={ 
                () => {
                    changeCount(count+1);
                    changeResult((questions[title[count]].options.option2===questions[title[count]].answer).toString());
            }}>B</button>
            {questions[title[count]].options.option2}
          </label>
          <br/>
          <br/>
          
        </div>
        
    )

  


  
}

export default Questions;
