import React, { useEffect } from "react";
 import { useNavigate } from "react-router-dom";
import "./Loader.css";
import background1 from "../images/background1.jpg";
import Footer from "./Footer";

function Loader() {
   const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/Login");
    }, 5000); 
    return () => clearTimeout(timeoutId);
  }, [navigate]);


  return (
    <div className="main-div">
      <div className="upper-div">
        <img className="image1" src={background1} alt="" />
      </div>

      <Footer/>
      </div>
   
  );
}

export default Loader;
