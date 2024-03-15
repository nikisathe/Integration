import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
    <div className="form-container">
      <div className="form-detail">
        <form action="#">
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
              <label htmlFor="email/mobile"></label>
              <input
                type="text"
                name="email/mobile"
                id="email/mobile"
                placeholder="Username(Mobile/Email)"
              />
            </div>
            <div className="input-feild">
              <label htmlFor="password>"></label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password / OTP"
              />
            </div>
            <div className="forget-pass">
              
              <a href="#">Forget Password ?</a>
              <i class="fa-thin fa-circle-info"></i>
            </div>
          </div>
       
      
      <div className="user-info">
        <button className="sign-btn" type="submit">
          SIGN IN
        </button>
        <a className="link-btn" href="#">
          Login with Google
        </a><i class="fa-brands fa-google"></i>
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

export default Form;
