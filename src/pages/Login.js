
import Template from "../components/Template";
import image from "../assets/frame.png"
import image2 from "../assets/login.png"
const Login =()=>{
     let type = "login";
     let para1="Welcome Back";
     let para2="Build skills for today, tomorrow, and beyond.Education to future-proof your career."
    return (
        <div>
             <Template image={image} image2={image2} para1={para1} para2={para2} type={type}/>
        </div>
    );
}
export default Login