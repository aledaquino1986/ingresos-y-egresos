import React from "react";

import Card from "../card/Card";
import "./home.css";

const Home = () => {
  return (
    <section className="balance">
      <header className="balance__total">
        <h1>Balance de ingresos y egresos</h1>
        <p>
          Su total: <span className="balance__total-amount">$20000</span>
        </p>
      </header>

      <div className="balance__operations">
        <h3 className="balance__operations-heading">Últimas 10 operaciones</h3>
      </div>

      <div className="card-container">
        <Card className="expenditure" />
        <Card className="income" />
        <Card className="expenditure" />
        <Card className="income" />
        <Card className="expenditure" />
        <Card className="income" />
        <Card className="expenditure" />
        <Card className="income" />
        <Card className="expenditure" />
        <Card className="income" />
      </div>
    </section>
  );
};

export default Home;
