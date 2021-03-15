import React from "react";
import "./section-header.css";

const SectionHeader = ({ heading, children }) => {
  return (
    <header className="header__section">
      <h2>{heading}</h2>
      {children}
    </header>
  );
};

export default SectionHeader;
