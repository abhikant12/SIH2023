import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"


function Signup() {
  return (

    <Template title = "Signup" description1 = "We’re so happy you’re here, let’s start by signing up."  description2 = "" image = {signupImg} formType = "signup" />      
       
 )}


 
export default Signup