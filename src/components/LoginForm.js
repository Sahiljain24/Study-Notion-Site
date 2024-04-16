import { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link } from "react-router-dom";

const LoginForm=()=>{

    const [formData,setFormData]= useState(
       { email:"", password:"",}

    )
    const[showPassword,setShowPassword]=useState(false);

       function changeHandler(event){
            
           setFormData((prev)=> 
        (
            {...prev,
            [event.target.name]:event.target.value 
        }
        ))
       }
  
    return(
      <form>
          
          <label>
           <p>
           Email<sup>*</sup>
           </p>
             <input
             required
             type="email"
             placeholder="example@gmail.com"
             name="email"
             value={formData.email}
             onChange={changeHandler}

             
             >
             </input>
          </label>

          <label>
             <p>
             Password<sup>*</sup>
             </p>
             <input
             required
             type={showPassword?("password"):("text")}
             placeholder="Something secrative"
             name="password"
             value={formData.password}
             onChange={changeHandler}
             
             >
             </input>
             <span onClick={()=>setShowPassword((prev)=>!prev)}>
                 {!showPassword? (<AiOutlineEye/>): (<AiOutlineEyeInvisible/>)}
             </span>
          
            
          <Link to="#">
                <p>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button>
            Sign In
        </button>
      </form>
    );
  }

  export default LoginForm