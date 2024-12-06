import { useState } from 'react'
import './App.css'

function App() {
  let [cnt, setCount] = useState(0)

  function addV() {
    if(cnt<20){
      setCount(cnt+1)
    }
    console.log(cnt)
  }

  function remV() {
    if(cnt>0){
      setCount(cnt-1)
    }
    console.log(cnt);
  }

  return (
    <>
      <h1>Heyy, its a counter!!</h1>
      <br />
      <h2>counter : {cnt}</h2>
      <br />
      <br />
      <button onClick={addV}>
        INC
      </button> 
      &nbsp; &nbsp;
      <button onClick={remV}>
        DEC
      </button>
    </>
  )
}

export default App
