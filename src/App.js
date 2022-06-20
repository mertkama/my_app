/* eslint-disable jsx-a11y/alt-text */
import './App.css'
import HelloWorld from "./components/HelloWorld.js"
function App() {
  return (
    <div>
      Merhaba Dünya
      <HelloWorld   
      resim = "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80">
        <p>Kırmızı Alana Gelecek</p>
      </HelloWorld>
    </div>
  );
}

export default App;
