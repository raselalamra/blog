import React from "react";
import img from "../../img/NotFound.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="error">
      <img src={img} alt="" />
    </div>
  );
};

export default NotFound;
