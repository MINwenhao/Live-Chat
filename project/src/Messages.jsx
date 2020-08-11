import React, { useState, useEffect } from 'react';
import {fetchFriends,deleteFriend,requestInfo} from './services';
import AddFriend from './AddFriend';
import SendMessage from './SendMessage';


function Messages({log,name,setError,setLog,setName}){
    const [friendList,setFriend]=useState([]);
    const[searchName,setSearch]=useState('');

    

    useEffect(()=>{
        requestInfo(name)
        .catch((e)=>{
            throw e;
        })
        .then((active)=>{
            if(active.length!==0){
            
                let temp='';
                active.forEach(element => {
                    temp+=element +' and ';
                });
                console.log(temp);
                
                setError(active+' requests to be your friend.')
                
                
            }
        })



        fetchFriends(name)
        .then((friends)=>{
            
            const friendsList=friends.map(friend=>(
                <li key={friend}>
                    <button className="friendlist"
                    onClick={()=>{
                        setName(friend)
                        setLog('sendmessage')
                        
                    }}
                    >{friend}</button>
                    <button
                    onClick={()=>{
                        deleteFriend(name,friend)
                        .catch((e)=>{
                            throw e;
                        })
                        .then(()=>{
                            setError('You have deleted '+friend )
                            setSearch(friend)
                        })
                    }}
                    >X</button>
                </li>
            ))
            setFriend(friendsList)
        })

    },[searchName,log])

    if(log==='logout'){
        return (
            <div>
                <AddFriend
                setError={setError}
                searchName={searchName}
                setSearch={setSearch}
                name={name}
                />
                
                <ul>
                   {friendList}
                </ul>
                
            </div>    
        )
    }if(log==='login'){
        return (
            <div>
                Welcome
            </div>
        )
    }else{
        return (
            <div>
                <SendMessage
                name={name}
                setName={setName}
                setLog={setLog}
                setError={setError}
                />
            </div>
        )
    }
}

export default Messages;