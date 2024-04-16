import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes } from "react-router-dom";
import { useState } from "react";

function App() {

     const [isloggedin,setLoggedin] =useState(false);
  return <div> 
             
     <Navbar  isloggedin={isloggedin} setLoggedin={setLoggedin}/>

      <Routes>

           <Route path="/" element={<Home/>}></Route>  
           <Route path="/login" element={<Login/>}></Route>  
           <Route path="/signup" element={<Signup></Signup>}></Route>  
           <Route path="/dashboard" element={<Dashboard/>}></Route>  
        
      </Routes>       
      
 </div>;
}

export default App;
