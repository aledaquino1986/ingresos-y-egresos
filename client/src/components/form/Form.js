import React, { useState } from "react";
import Button from "../ui/button/Button";
import TextField from "../ui/text-field/TextField";

import { today } from "../../utils/utils";
import "./form.css";

const Form = ({
  operationAmount,
  operationDescription,
  setOperationValues,
  dataFromDatabase,
  setDataFromDatabase,
  operation
}) => {
  const [amountError, setAmountError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!operationAmount || !operationDescription || !operation) {
      console.error("Input fields empty");
      return;
    }

    fetch("/api/operation", {
      method: "POST",
      body: JSON.stringify({
        operationAmount,
        operationDescription,
        operation,
        today
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        console.log(dataFromDatabase);
        console.log("success");
        setDataFromDatabase([
          ...dataFromDatabase,
          {
            amount: operationAmount,
            description: operationDescription,
            type: operation,
            date: today
          }
        ]);
      })
      .catch(error => {
        console.log(error);
      });

    console.log(dataFromDatabase);
    console.log("success");
    setDataFromDatabase([
      ...dataFromDatabase,
      {
        id: dataFromDatabase.length + 1,
        amount: operationAmount,
        description: operationDescription,
        type: operation,
        date: today
      }
    ]);
    console.log(dataFromDatabase);
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
      <div className="error">
        <p> {descriptionError ? <span> {descriptionError}</span> : ""}</p>
      </div>

      <TextField
        label="Description"
        placeHolder="Bought plane ticket"
        onChange={e =>
          setOperationValues(previous => ({
            ...previous,
            operationDescription: e.target.value
          }))
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

      <div className="error">
        <p> {amountError ? <span> {amountError}</span> : ""}</p>
      </div>
      <TextField
        label="Amount"
        placeHolder="300"
        onChange={e =>
          setOperationValues(previous => ({
            ...previous,
            operationAmount: e.target.value
          }))
        }
        onBlur={() =>
          errorHandler(
            operationAmount,
            setAmountError,
            "Input field must be a valid number",
            amountError
          )
        }
        onFocus={() =>
          errorHandler(operationAmount, setAmountError, null, descriptionError)
        }
      />

      <Button text="submit" type="submit" />
    </form>
  );
};

export default Form;
