 
import { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link } from "react-router-dom";
const SignupForm=()=>{

    const [formData,setFormData]= useState(
        { email:"", password:"",firstName:"",lastName:"",confirmPassword:""}
 
     )
     const[showPassword,setShowPassword]=useState(true);
     const[showConfirmPassword,setShowConfirmPassword]=useState(true);
 
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
     First Name<sup>*</sup>
     </p>
       <input
       required
       type="text"
       placeholder="Entre ypur First Name"
       name="firstName"
       value={formData.firstName}
       onChange={changeHandler}

       
       >
       </input>
    </label>
      


    <label>
     <p>
     Last Name<sup>*</sup>
     </p>
       <input
       required
       type="text"
       placeholder="Entre ypur Last Name"
       name="lastName"
       value={formData.lastName}
       onChange={changeHandler}

       
       >
       </input>
    </label>



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
       Create Password<sup>*</sup>
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
    
      
    
  </label>
  <label>
       <p>
       Confirm Password<sup>*</sup>
       </p>
       <input
       required
       type={showConfirmPassword?("password"):("text")}
       placeholder="Re-enter Password"
       name="confirmPassword"
       value={formData.confirmPassword}
       onChange={changeHandler}
       
       >
       </input>
       <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
           {!showPassword? (<AiOutlineEye/>): (<AiOutlineEyeInvisible/>)}
       </span>
    
      
    
  </label>
 
  <button>
    Create Account
  </button>
</form>
  );
}
export default SignupForm