import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function AuthPage({isAuth, children}) {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") === 'true';
    if (isAuth === true && isLogin === false) {
      return navigate("/login");
    }
  }, [isAuth, navigate])
  return children;
}

export default AuthPage;
