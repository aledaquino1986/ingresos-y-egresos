import React from "react";
import "./card.css";

const Card = ({
  className = "",
  date = "24th February",
  description = "Paying Afip",
  type = "income",
  amount = "600"
}) => {
  return (
    <div className={`card ${className}`}>
      <div className={`card__picture-${className}`}></div>
      <div className={`card__heading card__heading-${className}`}>
        <span className={`card__heading-${className}-span`}>
          {type === "expenditure" || type === "expenses"
            ? "expenditure"
            : "income"}
          : ${amount}{" "}
        </span>
      </div>

      <div className="card__description">
        <ul className="card__description-list">
          <li>Date: {date}</li>
          <li>Description: {description} </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
