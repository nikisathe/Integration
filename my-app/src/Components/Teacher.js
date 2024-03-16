import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Teacher = () => {
  const [teacherUsername, setTeacherUsername] = useState('');
  const [teacherPassword, setTeacherPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/Facultylogin", {
        Teacher_username: teacherUsername,
        Teacher_password: teacherPassword
      });
      if (response.data.success) {
        navigate('/profile');
      }
    } catch (error) {
      console.error('Error checking faculty data:', error);
      alert('Error checking faculty data');
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
              <label htmlFor="Teacher_username"></label>
              <input
                type="text"
                name="Teacher_username"
                id="Teacher_username"
                value={teacherUsername}
                onChange={(e) => setTeacherUsername(e.target.value)}
                placeholder="Username(Mobile/Email)"
              />
            </div>
            <div className="input-feild">
              <label htmlFor="Teacher_password"></label>
              <input
                type="password"
                name="Teacher_password"
                id="Teacher_password"
                value={teacherPassword}
                onChange={(e) => setTeacherPassword(e.target.value)}
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

export default Teacher;
