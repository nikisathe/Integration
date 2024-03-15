import React from "react";
//import "./Teacher.css";
// import background1 from "../images/background1.jpg";
import Form from "./form";

const Teacher = ({ showTeacher }) => {
  return (
    <>
      {showTeacher && (
        <>
        <h5>Teacher</h5>
          <Form />
        </>
      )}
    </>
  );
};

export default Teacher;
