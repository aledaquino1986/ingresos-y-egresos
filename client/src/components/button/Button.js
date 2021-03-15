import React from "react";
import "./button.css";

const style = {
  redColor: "red",
  greenColor: "green"
};

const Button = ({ text, color = "black" }) => {
  return <button className={`button button-${color}`}>{text}</button>;
};

export default Button;
