// Import necessary libraries and dependencies
import React, { useState } from "react";
import "./StudentProfile.css";
import Parent from "./Parent";
import Teacher from "./Teacher";
import Footer from "./Footer";
import background1 from "../images/background1.jpg";
import axios from "axios"; // Import Axios for making HTTP requests

const StudentProfile = () => {
  // State variables to manage the visibility of different components
  const [showParent, setShowParent] = useState(false);
  const [showTeacher, setShowTeacher] = useState(false);
  const [showStudentForm, setShowStudentForm] = useState(true);

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Fetch input values from the form
    const schoolCode = event.target.elements.schoolcode.value;
    const username = event.target.elements["email/mobile"].value;
    const password = event.target.elements.password.value;

    try {
      // Make a POST request to your login API
      const response = await axios.post("/login", {
        stud_username: username,
        stud_password: password,
      });

      // If login is successful, show appropriate content based on the user type
      if (response.data.success) {
        // Logic to determine user type and show corresponding content
        // For now, assuming all users are students
        setShowParent(false);
        setShowTeacher(false);
        setShowStudentForm(true);
      } else {
        // Handle unsuccessful login
        console.log("Student data not found");
        // You can display an error message to the user
      }
    } catch (error) {
      // Handle error if the request fails
      console.error("Error logging in:", error);
      // You can display an error message to the user
    }
  };

  // Function to toggle visibility of parent section
  const toggleParent = () => {
    setShowParent(true);
    setShowTeacher(false);
    setShowStudentForm(false);
  };

  // Function to toggle visibility of teacher section
  const toggleTeacher = () => {
    setShowParent(false);
    setShowTeacher(true);
    setShowStudentForm(false);
  };

  // Function to toggle visibility of student form section
  const toggleStudent = () => {
    setShowParent(false);
    setShowTeacher(false);
    setShowStudentForm(true);
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img className="my-logo" src={background1} alt="" />
      </div>

      <div className="content-info">
        <div className="left-div">
          <button
            className="student-button btn"
            type="submit"
            onClick={toggleStudent}
          >
            Student
          </button>
        </div>
        <div className="mid-div">
          <button
            className="parent-button btn"
            type="submit"
            onClick={toggleParent}
          >
            Parent
          </button>
        </div>
        <div className="right-div">
          <button
            className="teacher-button btn"
            type="submit"
            onClick={toggleTeacher}
          >
            Teacher
          </button>
        </div>
      </div>

      {showParent && <Parent showParent={showParent} />}
      {showTeacher && <Teacher showTeacher={showTeacher} />}

      <div
        style={{ display: showStudentForm ? "block" : "none" }}
        className="form-container"
      >
        <div className="form-group">
          {showStudentForm && (
            <form onSubmit={handleFormSubmit}>
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
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password / OTP"
                  />
                </div>
                <div className="forget-password">
                  <a href="#">Forget Password ?</a>
                </div>
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
            </form>
          )}
        </div>
      </div>

      <div className="footer">
        <h1>Powered by</h1>
        <h2>DreamsGuider.com</h2>
        <h3>Software | Education | Advertising</h3>
      </div>
    </div>
  );
};

export default StudentProfile;
