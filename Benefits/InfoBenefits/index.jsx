import React from "react";
import "./InfoBenefits.scss";

export const InfoBenefits = ({ title, discription }) => {
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <p className="discription">{discription}</p>
    </div>
  );
};
