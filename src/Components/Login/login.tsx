import { useNavigate } from 'react-router-dom' ;
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa"; 
import { AppRoutes } from '../../App';


const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here...

    // Redirect to the dashboard page after successful login
    navigate(AppRoutes.DASHBOARD);
  };
  return (
    <div className="container">
        <div className="wrapper">
          <form  className="form" action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
            </div>

            <button type="submit" className="login-btn" onClick={handleLogin}>Log In</button>

            <div className="register-link">
              <p>
                Don't have an account? <a href="/register">Register</a>
              </p>
              <p>
              <a href="#">Forgot Password?</a>
              </p>
            </div>
          </form>
        </div>
    </div>
  );
};

export default LoginForm;
