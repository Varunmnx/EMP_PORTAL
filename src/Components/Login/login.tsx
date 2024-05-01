import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
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

        <button type="submit" className="login-btn">Log In</button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
          <p>
          <a href="#">Forgot Password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;