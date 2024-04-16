 import LoginForm from "./LoginForm";
 import SignupForm from "./SIgnupForm";


const Template =(props)=>{
    let image =props.image;
    let image2=props.image2;
    let para1=props.para1;
    let para2 =props.para2;
    let type =props.type;

    return (
        <div>
            <div>
            <div>
                <p>{para1}</p>
                <p>{para2}</p>
            </div>
             
             {
                type==="login"?(
                    <LoginForm/>
                ):(<SignupForm/>)
             }

            <div>
                <div></div>
                <div>Or</div>
                <div></div>
                <button>SIgn Up with Google</button>
            </div>
            </div>
          
            <div>
                <img src={image} alt="image" ></img>
                <img src={image2} alt ="user Image"></img>
            </div>


        </div>
    );
}
export default Template