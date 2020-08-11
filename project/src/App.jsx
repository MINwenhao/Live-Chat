import React, { useState } from 'react';
import Log from './Log';
import './App.css';
import Error from './Error';
import Messages from './Messages';

function App() {
  const[log,setLog]=useState('login');
  const[name,setName]=useState('');
  const[error,setError]=useState('');

  return (
    <div className="App">

      <div>
          <Error
          error={error}
          />
      </div>
      <Messages
      setName={setName}
      setLog={setLog}
      setError={setError}
      log={log}
      name={name}
      />
      
      <div>
        <Log
        log={log}
        setLog={setLog}
        name={name}
        setName={setName}
        setError={setError}
        error={error}
        />
      </div>
      
    </div>
  );
}

export default App;
