import React, { useState } from "react";
import "./StudentProfile.css";
import Parent from "./Parent";
//import Teacher from "./Teacher";

import background1 from "../images/background1.jpg";

const Student = () => {
  
  const [showParent, setShowParent] =useState(false);
 // const [showTeacher, setShowTeacher] =useState(false);
  
    
  return (
    <div className="wrapper">
      <div className="logo">
        <img className="my-logo" src={background1} alt="" />
      </div>
      
      <div className="content-info">
        <div className="left-div">
          <button className="student-button btn" type="submit">
            Student
          </button>
        </div>
        <div className="mid-div">
          <button
            className="parent-button btn"
            type="submit"
            onClick={() => setShowParent(!showParent)}
          >
            Parent
          </button>
        </div>
        <div className="right-div">
          <button className="teacher-button btn" type="submit"
          // onClick={() => setShowTeacher(!showTeacher)}
          >
            Teacher
          </button>
        </div>
      </div>

      {showParent && <Parent />}
        {/* {showTeacher && <Teacher /> } */}


      <div className="form-group">
        <form action="#" showParent={showParent}  >
        
          <div className="login-form">
            <div className="input">
              <label htmlFor="schoolcode"></label>
              <input
                type="text"
                name="schoolcode"
                id="schoolcode"
                placeholder="School code / Domain"
              />
            </div>
            <div className="input ">
              <label htmlFor="email/mobile"></label>
              <input
                type="text"
                name="email/mobile"
                id="email/mobile"
                placeholder="Username(Mobile/Email)"
              />
            </div>
            <div className="input">
              <label htmlFor="password>"></label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password / OTP"
              />
            </div>
            <div className="forget-password">
              <a href="#">No Password ? Try OTP</a>
             <i className="ri-information-2-line"></i>
              <a href="/forget_pass">Forget Password ?</a>
            </div>
          </div>
        </form>
      
      </div>
      <div className="user-login">
        <button className="signIn-button" type="submit">
          SIGN IN
        </button>
        <a className="goggle-link" href="#">
          Login with Google
          <i class="ri-google-fill"></i>
        </a>
      </div>

      <div className="query">
        <a href="#">HOW TO LOGIN?</a>
      </div>
     
      <div className="footer">
        <h1>Powered by</h1>
        <h2>DreamsGuider.com</h2>
        <h3>Software | Education | Advertising</h3>
      </div>
      
    </div>
    
  );
};

export default Student;
