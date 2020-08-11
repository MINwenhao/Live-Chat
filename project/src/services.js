export const fetchLogin=(username)=>{
    return fetch('/session',{
        method:'POST',
        headers: new Headers({
            "Content-Type": "application/json"
          }),
        body: JSON.stringify({username})
    })
    .catch(()=>{
        return Promise.reject({code:'network-error'})
    })
    .then((response)=>{
        if(!response.ok){
            return Promise.reject({code:'invalid name'})
        }
        return response.json;
    })
};

export const fetchFriends = (name) =>{
    return fetch('/user',{
        method: 'GET',
        headers:new Headers({
            'content-type':'application/json',
        }),
    })
    .catch(()=>{
        return Promise.reject({code:'network-error'})
    })
    .then((response)=>{
        if(!response.ok){
            return Promise.reject({code:'invalid login'})
        }
        return response.json();
    })
};

export const addFriend =(username,searchName)=>{
    return fetch('/user/' + username,{
        method:'POST',
        headers: new Headers({
            "Content-Type": "application/json"
          }),
        body: JSON.stringify({username,searchName})
    })
    .catch(()=>{
        return Promise.reject({code:'network-error'})
    })
    .then((response)=>{
        if(!response.ok){
            return response.json().then(result => Promise.reject(result.code));
        }
        return response.json;
    })
}
export const logout =(name) =>{ 
    return fetch('/user',{
        method:'DELETE',
        headers:new Headers({
            'content-type':'application/json',
        }),
        body: JSON.stringify({name})
    })
    .catch(()=>{
        return Promise.reject({code:'network-error'})
    })
    .then((response)=>{
        if(!response.ok){
        
            return Promise.reject({code:'missing name'})
        }
        return response.json;
    })
}

export const fetchMessages = (name) =>{
    return fetch('/messages/' + name,{
        method: 'post',
        headers:new Headers({
            'content-type':'application/json',
        }),
         body: JSON.stringify({name})
    })
    .catch((e)=>{
        return Promise.reject({code:'network-error'})
    })
    .then((response)=>{
        if(!response.ok){
            return Promise.reject({code:'you are not allowed to get message'})
        }
        return response.json();
    })
};
export const sendMessages = (name,message) =>{
    return fetch('/messages/' + name,{
        method: 'put',
        headers:new Headers({
            'content-type':'application/json',
        }),
         body: JSON.stringify({name,message})
    })
    .catch((e)=>{
        return Promise.reject({code:'network-error'})
    })
    .then((response)=>{
        if(!response.ok){
            return Promise.reject({code:'you are not allowed to update messages'})
        }
        return response.json;
    })
};
export const deleteFriend = (name,friend) =>{
    return fetch('/user/' + name,{
        method: 'delete',
        headers:new Headers({
            'content-type':'application/json',
        }),
         body: JSON.stringify({name,friend})
    })
    .catch((e)=>{
        return Promise.reject({code:'network-error'})
    })
    .then((response)=>{
        if(!response.ok){
            return Promise.reject({code:'missing-name'})
        }
        return response.json;
    })
};
export const requestInfo=(name)=>{
    return fetch('/friend',{
        method:'get',
    })
    .catch((e)=>{
        return Promise.reject({code:'network-error'})
    })
    .then((response)=>{
        if(!response.ok){
            return Promise.reject({code:"Didn't find you record"})
        }
        return response.json();
    })
}
