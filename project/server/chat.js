const users={
    '11':{
        username:"min",
        active: [],
        uid:'11',
        friends:['wenhao','hh']
    },
    '43':{
        username:"wenhao",
        active:[],
        uid:'43',
        friends:['min']
    },
    '99':{
        username:"hh",
        active:[],
        uid:'99',
        friends:['min']
    }

};
const password={
    "min":{
        uid:'11',
    },
    "wenhao":{
        uid:'43',
    },
    "hh":{
        uid:'99'
    },
}

const messages ={
    "min":{
        "wenhao":[{uid:'11',
            timestamp: new Date("2019-01-01 19:20:00"),
            text:"you up?",
            name:"min",
        },],
        "hh":[
            {uid:'11',
            timestamp: new Date("2019-01-01 19:22:00"),
            text:"morning",
            name:"min",
        },
        ]   
    },

    "wenhao":{
        "min":[
            {uid:'43',
            timestamp: new Date("2019-01-01 19:21:00"),
            text:"yes",
            name:"wenhao",
            },
        ]
    },
    "hh":{
        "min":[{uid:'99',
        timestamp: new Date("2019-01-01 19:25:00"),
        text:"Hi",
        name:"hh",
        },]
    }
}

const chat ={
    users,
    messages,
    password,
};

module.exports =chat;