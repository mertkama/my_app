import React, { useState } from "react"
import './App.css'

function App() {

  const [number,setNumber] =useState(20)

  const changeNumber=() => {
    const n = number + 10
    setNumber(n)
    console.log("n",n)
  }

  return (
    <div>
      <h1>Kişinin Yaşı {number}</h1>
      <button onClick={changeNumber}>Buton</button>
    </div>
  );
}

export default App;
