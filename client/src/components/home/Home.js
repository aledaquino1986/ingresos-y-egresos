import React from "react";

import Card from "../ui/card/Card";
import SectionHeader from "../layout/SectionHeader";
import "./home.css";

const Home = () => {
  return (
    <section className="section">
      <SectionHeader heading="Balance de ingresos y egresos">
        <p>
          Su total: <span className="header__section-amount">$20000</span>
        </p>
      </SectionHeader>
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
