// Parent.js
import React from "react";
import "./Parent.css";

const Parent = ({ showParent }) => {
  // Your component logic here
  return (
    <div className="parent-form">
      {showParent && (
        <>
          <h2>Parent Form</h2>
          <form>
            <label htmlFor="parentName">Parent's Name:</label>
            <input type="text" id="parentName" name="parentName" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" />
          </form>
        </>
      )}
    </div>
  );
};

export default Parent;
