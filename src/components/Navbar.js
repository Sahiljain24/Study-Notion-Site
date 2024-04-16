import { lazy } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast";


const Navbar =(props)=>{

    let isloggedin =props.isloggedin;
    let setLoggedin =props.setLoggedin;
    return (
        <div className="flex  gap-3">
             
         <NavLink to="/">
            <img src={logo} alt={"Logo"} width={150} height ={150} loading="lazy"></img>       
        </NavLink>
          
          <nav >
              <ul className="flex gap-3">
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about"  >About </Link>
                </li>
                 <li>
                 <Link to="/Contact" >Contact</Link>
                </li>
              </ul>
          </nav>
           
           <div className="flex gap-3">

          {!isloggedin && <Link to="/login" >
               <button >Log In</button>
           </Link>}
            
           { !isloggedin &&
            <Link to="/signup" >
               <button>Sign up</button>
           </Link>}

          {isloggedin &&
           <Link to="/" >
               <button  onClick={()=>{
                setLoggedin(false);
                toast.success("logged Out")
               }}>Log Out</button>
           </Link>}

           {isloggedin &&
            <Link to="/dashboard" >
               <button>Dashboard</button>
           </Link>}
           </div>
        </div>
    );
}

export default Navbar