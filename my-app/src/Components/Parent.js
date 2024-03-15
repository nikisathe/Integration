import React from "react";
// import background1 from "../images/background1.jpg";
//import "./Parent.css";
import Form from "./form";
// import Footer from "./Footer";

const Parent = ({ showParent }) => {
  
  return (
    <>
   
      {showParent && (
        <>
        <h5>Parent</h5>
        <Form/>
                </>
      )}
   
    </>
  );
};
export default Parent;
