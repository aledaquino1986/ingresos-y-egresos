import React, { useState, useEffect } from "react";
import SectionHeader from "../layout/SectionHeader";
import Form from "../form/Form";
import Button from "../ui/button/Button";

import "./income-and-expenses.css";
import Card from "../ui/card/Card";

const defaultValues = {
  operation: "income",
  operationDescription: "",
  operationAmount: 0
};

const IncomeAndExpenses = () => {
  const [dataFromDatabase, setDataFromDatabase] = useState([]);
  const [operationValues, setOperationValues] = useState(defaultValues);

  const { operation, operationDescription, operationAmount } = operationValues;

  const INCOME = "income";
  const EXPENSES = "expenses";
  const SMALL_SIZE = "small";

  useEffect(() => {
    fetch("/api/operation")
      .then(response => {
        return response.json();
      })
      .then(incomeExpenses => {
        setDataFromDatabase(incomeExpenses);
        console.log(dataFromDatabase);
      });
  }, []);

  return (
    <section className="section section-form">
      <SectionHeader heading="Fill out the form to track your expenses">
        <div className="buttons">
          <Button
            size={operation !== EXPENSES ? SMALL_SIZE : ""}
            text="Expenses"
            color="red"
            onClick={() =>
              setOperationValues(previous => ({
                ...previous,
                operation: EXPENSES
              }))
            }
          />
          <Button
            size={operation !== INCOME ? SMALL_SIZE : ""}
            text="Income"
            color="green"
            onClick={() =>
              setOperationValues(previous => ({
                ...previous,
                operation: INCOME
              }))
            }
          />
        </div>
      </SectionHeader>

      <div className={`form-container form-container-${operation}`}>
        <Form
          operationAmount={operationAmount}
          operationDescription={operationDescription}
          setOperationValues={setOperationValues}
          operation={operation}
          dataFromDatabase={dataFromDatabase}
          setDataFromDatabase={setDataFromDatabase}
        />
      </div>

      <div className="card-container">
        {dataFromDatabase.map(entry => {
          const { id, amount, description, type, date } = entry;
          return (
            <Card
              key={id}
              className={type === "expenses" ? "expenditure" : "income"}
              amount={amount}
              description={description}
              date={date}
              type={type}
            />
          );
        })}
      </div>
    </section>
  );
};

export default IncomeAndExpenses;
