import { useEffect } from "react";
import DepartmentsList from "../components/Department";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";

const Posts: React.FC = () => {
  const userData = localStorage.getItem("userData");
  const navigate = useNavigate();

  useEffect(() => {
    const checkCredentials = () => {
      if (!userData) {
        alert("Please enter your credentials to access the data.");
        navigate("/");
      }
    };

    checkCredentials();
  }, []);

  return (
    <div>
      <Post />
      <DepartmentsList />
    </div>
  );
};

export default Posts;
