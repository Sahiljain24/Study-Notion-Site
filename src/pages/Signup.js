
import Template from "../components/Template";
import image from "../assets/frame.png"
import image2 from "../assets/signup.png"
const Signup =()=>{
   let type = "signup";
   let para1 ="Join the millions learning to code with StudyNotion for free";
   let para2="Build skills for today, tomorrow, and beyond.Education to future-proof your career.";
    return (
        <div>
                 <Template image={image} image2={image2} para1={para1} para2={para2} type={type}/>
        </div>
    );
}
export default Signup