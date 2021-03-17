import React from "react";
import "./button.css";

const style = {
  redColor: "red",
  greenColor: "green"
};

const Button = ({ text, color = "black", onClick, type, size = "big" }) => {
  return (
    <button
      className={`button button-${color} button-${size}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
