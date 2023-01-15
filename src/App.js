
import './App.css';
import {useState} from "react"

function App() {
  const [counter,setCount]=  useState(0)
  return (
    <div className="App">
      <div>
      <a href="http://google.com"><button className="logo"></button></a>
      </div>
      <header className="App-header">
    <h1 className="content">{counter}</h1>
     <div className="button">
    <button onClick={()=>setCount(counter+1)} className="increment"></button>
    </div><div>
        <button onClick={()=>setCount(0)} className="refresh"></button>
        </div>
      </header>
    
        
    </div>
  );
}

export default App;
