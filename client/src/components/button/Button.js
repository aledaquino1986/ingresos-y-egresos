import React from "react";
import "./button.css";

const style = {
  redColor: "red",
  greenColor: "green"
};

const Button = ({ text, color = "black", onClick, type }) => {
  return (
    <button className={`button button-${color}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
