import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import logo2 from "../images/logo2.png";
import rocket from "../images/rocket.png";

function Login() {
  const [collegeCode, setCollegeCode] = useState('');
  const [error] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.68.31:3001/check', {
        college_code: collegeCode
      });

      if (response.data.success) {
        navigate('/student');
       } // } else {
      //   alert('Invalid college code');
      // }
    } catch (error) {
      alert('Error checking college code');
    }
  };
  
  return (
    <>
      <div className="login-div">
        <div className="login-upper-div"></div>
        <div className="login-mid-div">
          <div className="logo">
            <img className="logo-img" src={logo2} alt="logo" />
          </div>
        </div>
        <div className="login-lower-div">
          <h4>Software | Education | Advertising </h4>
        </div>

        <form onSubmit={handleSubmit} className="form1">
          <div className="school-code">
            <div className="input-field-code">
              {/* <label htmlFor="college_code">Enter College Code:</label><br /> */}
              <input
              htmlFor="college_code"
                type="text"
                id="college_code"
                name="college_code"
                value={collegeCode}
                onChange={(e) => setCollegeCode(e.target.value)}
                placeholder="Enter College Code"
              />
            </div>
            <button className="proceed-button" type="submit">
              PROCEED
            </button>
          </div>
        </form>

        {error && <p>{error}</p>}

        <div className="rocket">
          <img className="rocket-img" src={rocket} alt="rocket" />
        </div>
        <div className="box">
          <div className="base">
            <div className="cloud"></div>
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
