import React, { useState } from "react";
import Button from "../button/Button";

import setCurrentState from "../../utils/utils";
import "./form.css";

const Form = ({
  description,
  amount,
  operationAmount,
  operationDescription,
  setoperationDescription,
  setOperationAmount,
  operation
}) => {
  const [amountError, setAmountError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(operationDescription, operationAmount, operation);
  };

  const errorHandler = (state, errorStateFunction, error, stateError) => {
    if (!state) {
      errorStateFunction(error);
      console.log(stateError);
    }

    if (state && typeof state === "number" && state.length > 40) {
      errorStateFunction("Input must be a valid number");
      console.log(stateError);
    }

    if (state && typeof state === "string" && state.length > 40) {
      errorStateFunction("Text can't be longer than 40 characters");
      console.log(stateError);
    }
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="form__input">
        <label htmlFor={description}>{description}</label>
        <div className="error">
          <p> {descriptionError ? <span> {descriptionError}</span> : ""}</p>
        </div>
        <input
          type="text"
          id={description}
          placeholder="Bought plane ticket"
          onChange={e =>
            setCurrentState(e.target.value, setoperationDescription)
          }
          onBlur={() =>
            errorHandler(
              operationDescription,
              setDescriptionError,
              "The input field must be of no more than 40 characters",
              descriptionError
            )
          }
          onFocus={() =>
            errorHandler(
              operationDescription,
              setDescriptionError,
              null,
              descriptionError
            )
          }
        />
      </div>
      <div className="form__input">
        <label htmlFor={amount}>{amount}</label>
        <div className="error">
          <p> {amountError ? <span> {amountError}</span> : ""}</p>
        </div>
        <input
          type="number"
          id={amount}
          placeholder="300"
          onChange={e => setCurrentState(e.target.value, setOperationAmount)}
          onBlur={() =>
            errorHandler(
              operationAmount,
              setAmountError,
              "Input field must be a valid number",
              amountError
            )
          }
          onFocus={() =>
            errorHandler(
              operationAmount,
              setAmountError,
              null,
              descriptionError
            )
          }
        />
      </div>
      <Button text="submit" type="submit" />
    </form>
  );
};

export default Form;
