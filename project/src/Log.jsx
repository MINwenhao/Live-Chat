import React from 'react';
import {fetchLogin} from './services';
import {logout} from './services';

function Log({log,setLog,name,setName,setError,error}){
    const onType=(e)=>{
        setName(e.target.value)
    }
   

    if(log==='login'){
        return(
            <div >
                <label>username:<input onChange={onType} value={name} ></input></label>
                <br/>
                <button className='log'
                    onClick ={()=>{
                        setError('');
                        setLog('logout');
                        fetchLogin(name)
                        .catch(()=>{
                            setError('invaild name')
                            setLog('login')
                        })
                    }
                    }
                >{log}</button>
            </div>
        )
    }if(log==='logout'){
        return(
            <div >
                <button className='log'
                    onClick ={()=>{
                        logout(name)
                        .catch((e)=>{

                            setError('missing name')
                            throw e;
                        })
                        setLog('login')
                    }
                    }
                >{log}</button>
            </div>
        )
    }else{
        return(
            <div>
                
            </div>
        )
    }
}

export default Log;
