import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Login : React.FC= () => {

    const userDataString = localStorage.getItem("userData");
    const navigate = useNavigate();

   useEffect(() => {
    if (userDataString) {
        alert("Please Enter your Credentials to Access the Data")
        return navigate("/post")
     }  
  },[])
    
    return(
      <div>
      <UserForm/>
     </div>
    )
}

export default Login;
