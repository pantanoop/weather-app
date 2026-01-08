import Navbar from "./Navbar/Navbar";
import Home from "./home/Home"
import "./App.css"
import { useState } from "react";

function App() {
const [searchTerm,setSearchTerm] = useState("");
  return (
    <div className="App" >

      <div className="navbar">
            <Navbar searchTerm={searchTerm} setSearchTerm ={setSearchTerm}/>
      </div>
 
      <div className="home">
        <Home searchTerm={searchTerm}/>
      </div>
    </div>
  );
}

export default App;



