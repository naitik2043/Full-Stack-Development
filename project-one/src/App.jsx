import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const[count, setCount] = useState(0);

  useEffect(() => {
    console.log("App run only first render");
  }, [count])

  function handleIncrement(){
    setCount(count + 1);
  }

  function handledecerement(){
    setCount(count - 1);
  }
  

  return (
    <div>
  
      <button onClick={handleIncrement}> Increment </button>
       <br />
       <h1>{count}</h1>
       <br /> 

       <button onClick={handledecerement}> Decerement </button>
    </div>
  )
}

export default App
