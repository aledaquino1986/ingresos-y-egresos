import React from "react";
import "./card.css";

const Card = ({ className = "" }) => {
  return (
    <div className={`card ${className}`}>
      <div className={`card__picture-${className}`}></div>
      <div className={`card__heading card__heading-${className}`}>
        <span className={`card__heading-${className}-span`}>
          Expenditure: $600{" "}
        </span>
      </div>

      <div className="card__description">
        <ul className="card__description-list">
          <li>Date: 24th February</li>
          <li>Description: Paying Afip</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
