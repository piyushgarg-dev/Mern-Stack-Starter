import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [data,setdata] = useState();
    fetch('/api').then(res=>res.json()).then(msg=>setdata(msg))
  return (
    <div className="App">
      <h2>{data}</h2>
    </div>
  );
}

export default App;
