import "./register.css";
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const RegisterForm = () => {
  return (
    <div className="container">
    <div className="wrapper">
      <form  className="form" action="">
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Phone" required />
          <FaPhoneAlt />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" />
          <MdEmail />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Repeat Password" required />
          <FaLock />
        </div>
       

        <button type="submit" className="register-btn">Register</button>

        <div className="login-link">
          <p>
            Already have an account? <a href="/">Login</a>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegisterForm;

