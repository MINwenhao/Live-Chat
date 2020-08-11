import React  from 'react';
import {addFriend} from './services';

function AddFriend({name,searchName,setSearch,setError}){
    
    const onType=(e)=>{
        setSearch(e.target.value)
    }
    return (
        <div>
            <input
            onChange={onType} value={searchName}
            ></input>
        
            <button
            onClick={()=>{
                addFriend(name,searchName)
                .catch((err)=>{
                    setError(err)
                    throw err;
                })
                .then(()=>{
                    setError('You successfully added  '+ searchName)
                    setSearch(name)
                })

            }}
        
        >add new friend</button>
    </div>
    )
}

export default AddFriend;