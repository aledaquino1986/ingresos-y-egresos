import React from "react";
import Button from "../button/Button";
import "./form.css";

const Form = ({ description, amount }) => {
  return (
    <form action="" className="form">
      <div className="form__input">
        <label htmlFor="description">{description}</label>
        <input type="text" placeholder="Bought plane ticket" />
      </div>
      <div className="form__input">
        <label htmlFor="amount">{amount}</label>
        <input type="number" placeholder="300" />
      </div>
      <Button text="submit" />
    </form>
  );
};

export default Form;
