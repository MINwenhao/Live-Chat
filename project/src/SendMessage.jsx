import React from 'react';
import { useState, useEffect } from 'react';
import {fetchMessages } from './services'
import {sendMessages } from './services'

function SendMessage ({name,setName,setLog,setError}){
    const[messageList,setMessage]=useState([]);
    const[text,setText]=useState('');
    const onType=(e)=>{
        setText(e.target.value)
    }

    


    useEffect(()=>{
        setInterval(()=>{
            fetchMessages(name)
        .catch((e)=>{
            setError('you are not allowed to get message')
            throw e;
        })
        .then((messages)=>{
            messages = messages.filter(function(e){return e}); 
            messages.sort((a, b) => a.timestamp.localeCompare(b.timestamp))
            const messageLists=messages.map(message=>(
                <div key={message.timestamp}>
                    <div className ="username">
                    <span className ="username">{message.name}</span>
                    </div>
                    <span className="timestamp">{message.timestamp}</span>
                    <br/>
                    <p className="message-text">{message.text}</p>
                    <br/>
                </div> 
            ))
            setMessage(messageLists)
        })

        },1500)

    },[text])
    
    return(
        <div>
            <span className='title'>you are chatting with {name}</span>
            <br/>
            {messageList}
            <br/>
            <div>
                <input
                onChange={onType} value={text}
                ></input>
                <button
                onClick={()=>{
                    sendMessages(name,text)
                    .catch((e)=>{
                        setError('you are not allowed to send message')
                        throw e;
                    })
                    .then(()=>{
                        setError('you just send a message')
                        setText('')
                    })
                }}
                >send</button>
                <br/>
                <button
                onClick={()=>{
                    setLog('logout')
                    setError('')
                }
                }
                >back to Contacts</button>
            </div>
        </div>
    )
}
export default SendMessage;