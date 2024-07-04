import UserForm from "../components/UserForm";


const Login : React.FC= () => {
     const userData = localStorage.getItem("userData");
     const navigate = useNavigate();

  useEffect(() => {
    const checkCredentials = () => {
      if (userData) {
        navigate("/post");
      }
    };

    checkCredentials();
  }, [userData, navigate]);
    
    return(
      <div>
      <UserForm/>
     </div>
    )
}

export default Login;
