import React from "react";
import "./Feature.css";
import featureImg1 from "./featureimg1.png";

const Feature1 = (props) => {
  return (
    <div className={props.className}>
      <div className="feature-image__container">
        <img src={featureImg1} alt="product" />
      </div>
      <p className="feature-text">
        Our platform makes it easy for landlords to manage their properties,
        process rent collections and fill vacancies quickly
      </p>
    </div>
  );
};

export default Feature1;
