import React, { useState } from "react";
import SectionHeader from "../layout/SectionHeader";
import Form from "../form/Form";
import Button from "../button/Button";

import setCurrentState from "../../utils/utils";
import "./income-and-expenses.css";
import Card from "../card/Card";

const IncomeAndExpenses = () => {
  const [operation, setOperation] = useState("income");
  const [operationDescription, setoperationDescription] = useState("");
  const [operationAmount, setOperationAmount] = useState(0);

  const INCOME = "income";
  const EXPENSES = "expenses";

  return (
    <section className="section section-form">
      <SectionHeader heading="Fill out the form to track your expenses">
        <div className="buttons">
          <Button
            text="Expenses"
            color="red"
            onClick={() => setCurrentState(EXPENSES, setOperation)}
          />
          <Button
            text="Income"
            color="green"
            onClick={() => setCurrentState(INCOME, setOperation)}
          />
        </div>
      </SectionHeader>

      <div className={`form-container form-container-${operation}`}>
        <Form
          description="Description"
          amount="Amount"
          operationAmount={operationAmount}
          operationDescription={operationDescription}
          setoperationDescription={setoperationDescription}
          setOperationAmount={setOperationAmount}
          operation={operation}
        />
      </div>
    </section>
  );
};

export default IncomeAndExpenses;
