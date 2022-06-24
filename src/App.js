import React, { useState } from "react"
import './App.css'

function App() {

  const [number, setNumber] = useState(20)
  const [name, setName] = useState("Mert")
  const [isActive, setIsActive] = useState(false)
  const [user, setUser] = useState({ name: "", lastname: "" })
  const [numberArray, setNumberArray] = useState([1, 2, 3, 4, 5])

  const changeNumber = () => {
    const n = number + 10
    setNumber(n)
    console.log("n", n)
  }

  return (
    <div>
      <h1>Kişinin Yaşı {number}</h1>
      <button onClick={changeNumber}>Buton</button>
      <h1>İsim Değeri {name}</h1>
      <input value={name} onChange={(e) => { setName(e.target.value) }} />

      <h1>{JSON.stringify(isActive)}</h1>
      <input type="checkbox" checked={isActive} onChange={(e) => {
        setIsActive(e.target.checked)
      }} />

      <h1>{JSON.stringify(user)}</h1>
      <button onClick={() => {
        setUser({ name: "Mert", lastname: "Kamalı" })
      }}>User Bilgilerini Ata</button>
      <h1>{JSON.stringify(numberArray)}</h1>

      <button onClick={() => {
        const arr = [...numberArray]
        arr.push(10)
        setNumberArray(arr)
      }}>Eleman Ekle</button>
    </div>
  );
}

export default App;
