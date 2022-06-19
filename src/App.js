import './App.css'
var benimAdim = "Mert"
let benimYasim = 20
const benimSoyadim = "Kamalı"
function App() {
  return (
    <div>
      <a href="https://unsplash.com/">Merhaba Dünya </a>

      <img alt="Kedi"
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80"></img>

      <button>Buton</button>
      <p className="yellow">Merhaba P etiketi</p>
      <h1 style={
        {
          color: "red",
          backgroundColor: "purple"
        }
      }>{benimAdim.toUpperCase()}</h1>
      <h2>{benimYasim > 20 ? "Yaş 20 den Büyük" : "Yaş 20 den Küçük "}</h2>
      <h3>{benimSoyadim.toLocaleLowerCase()}</h3>
      <h4>{100 + 50 + 33 + 545 + 78} </h4>
      <h5>{Math.random()}</h5>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  );
}

export default App;
