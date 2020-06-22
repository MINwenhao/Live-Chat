(function IIFE(){
    const id={};
    const addButton=document.querySelector('.edit button');
    const list =document.querySelector('.items');
    const newItem=document.querySelector('.text');
    
    

    addButton.addEventListener('click', function(event){
        const text=newItem.value;
        if (id.hasOwnProperty(text)){
            alert('you have typed this item before!');
            return;
        }
        //construct list
        const toAdd= document.createElement('li');
        id[text]=0;

        const item=document.createElement('item');
        const deleteItem = document.createElement('delete');
        const subtract=document.createElement('subtract');
        const num =document.createElement('num');
        const add=document.createElement('add');
        
        toAdd.appendChild(item);
        toAdd.appendChild(deleteItem);
        toAdd.appendChild(subtract);
        toAdd.appendChild(num);
        toAdd.appendChild(add);

        item.innerHTML=`<span class="item">${text}</span>`;
        deleteItem.innerHTML=`<button class="delete">X</button>`;
        subtract.innerHTML=`<button class="subtract" disabled=true>-</button>`;
        num.innerHTML=`<label class="num" >${id[text]}</label>`;
        add.innerHTML=`<button class="add">+</button>`;

        list.appendChild(toAdd);
        newItem.value='';
        addButton.disabled=true;

        //add,modify and remove items
        deleteItem.addEventListener('click',function(event){
            toAdd.remove();
        });
        subtract.addEventListener('click',function(event){
            id[text]=parseInt(id[text])-1;
            num.innerHTML=`<label class="num" >${id[text]}</label>`;
            if(id[text]===0){
                subtract.innerHTML=`<button class="subtract" disabled=true>-</button>`;
            }
        });
        add.addEventListener('click',function(){
            subtract.innerHTML=`<button class="subtract">-</button>`
            id[text]=parseInt(id[text])+1;
            num.innerHTML=`<label class="num" >${id[text]}</label>`;
        });

    });

    



    addButton.disabled= true;

    newItem.addEventListener('keydown', function(event){
        const text=event.target.value;
        addButton.disabled=false;
    });

    
})();