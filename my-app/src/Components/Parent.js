// import React from "react";
// // import background1 from "../images/background1.jpg";
// //import "./Parent.css";
// import Form from "./form";
// // import Footer from "./Footer";
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Parent = () => {
  const [parentUsername, setParentUsername] = useState('');
  const [parentPassword, setParentPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/parentlogin", {
        parent_username : parentUsername,
        parent_password : parentPassword
      });
      if (response.data.success) {
        navigate('/profile');
      }
    } catch (error) {
      console.error('Error checking parent data:', error);
      alert('Error checking parent data');
    }
  };


  return (
    <>
   
   <div className="form-container">
      <div className="form-detail">
        <form onSubmit={handleSubmit} action="#">
          <div className="login-form">
            <div className="input-feild">
              <label htmlFor="schoolcode"></label>
              <input
                type="text"
                name="schoolcode"
                id="schoolcode"
                placeholder="School code / Domain"
              />
            </div>
            <div className="input-feild ">
              <label htmlFor="parent_username"></label>
              <input
                type="text"
                name="parent_username"
                id="parent_username"
                value={parentUsername}
                onChange={(e) => setParentUsername(e.target.value)}
                placeholder="Username(Mobile/Email)"
              />
            </div>
            <div className="input-feild">
              <label htmlFor="parent_password"></label>
              <input
                type="password"
                name="parent_password"
                id="parent_password"
                value={parentPassword}
                onChange={(e) => setParentPassword(e.target.value)}
                placeholder="Password / OTP"
              />
            </div>
            <div className="forget-pass">
              <a href="#">Forget Password ?</a>
              <i className="fa-thin fa-circle-info"></i>
            </div>
          </div>
          <div className="user-info">
            <button className="sign-btn" type="submit">SIGN IN</button>
            <a className="link-btn" href="#">Login with Google</a>
            <i className="fa-brands fa-google"></i>
          </div>
          <div className="question">
            <a href="#">HOW TO LOGIN?</a>
          </div>
        </form>
      </div>
    </div>
   
    </>
  );
};
export default Parent;
