(function IIFE(){
    let id=100;
    
    const addButton=document.querySelector('.edit button');
    const list =document.querySelector('.items');
    const newItem=document.querySelector('.text');
    
    const quantity=document.querySelector('.quantify');

    const status=document.querySelector('.status');
    window.updateElement = updateElement;
    window.deleteElement=deleteElement;
    

    
    fetch('/items/').then( response =>{
        if(response.ok){return response.json();}
        //待修改
        return response.json().then(err => Promise.reject(err));
    }).then(items =>{
        
        const deleteItem = document.createElement('delete');
       const itemIds=items.map(
           item => `<li id=${item.itemId}>
           <span class="item">${item.name}</span>
           <button class="delete" onclick="deleteElement(${item.itemId})">X</button>
           <label class="num" >${item.quantity}</label>
           <button class="update" onclick="updateElement(${item.itemId})">Update</button>
           </li>`
       ).join('')
       
       list.innerHTML=itemIds;
    })
    
    

    //add
    addButton.addEventListener('click', function(event){
        const text=newItem.value;
        const num=quantity.value;
        
        fetch('/items/',{
            method:'POST',
            headers: new Headers({
                "Content-Type": "application/json"
              }),
            body:JSON.stringify({itemId:`${id}`,
                name:`${text}`,
                quantity:`${num}`})
        })
        const element=document.createElement('li');
        list.appendChild(element);
        element.innerHTML=`<li id=${id}>
        <span class="item">${text}</span>
        <button class="delete" onclick="deleteElement(${id})">X</button>
        <label class="num"> ${num}</label>
        <button class="update" onclick="updateElement(${id})">Update</button>
        </li>`;
            id++;
             newItem.value='';
            addButton.disabled=true; 
        });

        //update
       
    function updateElement(id){
        const num=quantity.value;
        fetch('/items/' +id,{
            method:"PATCH",
            headers: new Headers({
                "Content-Type": "application/json"
              }),
              body:JSON.stringify({
                  itemId:`${id}`,
                quantity:`${num}`
              })
        })

        fetch('/items/').then( response =>{
            if(response.ok){return response.json();}
            //待修改
            return response.json().then(err => Promise.reject(err));
        }).then(items =>{
            
            
           const itemIds=items.map(
               item => `<li id=${item.itemId}>
               <span class="item">${item.name}</span>
               <button class="delete" onclick="deleteElement(${item.itemId})">X</button>
               <label class="num" >${item.quantity}</label>
               <button class="update" onclick="updateElement(${item.itemId})">Update</button>
               </li>`
           ).join('')
           
           list.innerHTML=itemIds;
        })

    }

    //delete
    function deleteElement(id){
        
        fetch('/items/' +id,{
            method:"DELETE",
            headers: new Headers({
                "Content-Type": "application/json"
              })
        })

        fetch('/items/').then( response =>{
            if(response.ok){return response.json();}
            //待修改
            return response.json().then(err => Promise.reject(err));
        }).then(items =>{
            
            const deleteItem = document.createElement('delete');
           const itemIds=items.map(
               item => `<li id=${item.itemId}>
               <span class="item">${item.name}</span>
               <button class="delete" onclick="deleteElement(${item.itemId})">X</button>
               <label class="num" >${item.quantity}</label>
               <button class="update" onclick="updateElement(${item.itemId})">Update</button>
               </li>`
           ).join('')
           
           list.innerHTML=itemIds;
        })
    }


    addButton.disabled= true;

    newItem.addEventListener('keydown', function(event){
        const text=event.target.value;
        addButton.disabled=false;
    });

})();


