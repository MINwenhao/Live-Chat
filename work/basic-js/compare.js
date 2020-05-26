"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY

/* YOU MAY MODIFY THE LINES BELOW */
  let word1=word.toLowerCase();
  let guess1=guess.toLowerCase();
  let count=0;
  const obj=guess1.split('');
  const obj2=word1.split('');
  for(let i=0;i<obj.length;i++){
    for(let j=0;j<obj2.length;j++){
      if(obj[i]===obj2[j]){
        count++;
        obj2[j]='';
        break;
      }
    
    }
  }
 

return count;

  //return 0; // this line is wrong
}
