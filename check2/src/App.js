import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import './App.css';
import GameList from "./components/GameList.jsx";

function App() {

  const name = useState("Wildingatory GAME")

  return (
    <div className="App">
      
        <Header name={name}/>
        <GameList/>
      
    </div>
  );
}

export default App;
