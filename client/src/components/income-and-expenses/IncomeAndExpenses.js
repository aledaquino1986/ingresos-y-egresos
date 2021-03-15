import React, { useState } from "react";
import SectionHeader from "../layout/SectionHeader";
import Form from "../form/Form";
import Button from "../button/Button";

import "./income-and-expenses.css";
import Card from "../card/Card";

const IncomeAndExpenses = () => {
  return (
    <section className="section section-form">
      <SectionHeader heading="Fill out the form to track your expenses">
        <div class="buttons">
          <Button text="Expenses" color="red" />
          <Button text="Income" color="green" />
        </div>
      </SectionHeader>

      <div className="form-container">
        <Form description="Description" amount="Amount" />
      </div>
    </section>
  );
};

export default IncomeAndExpenses;
