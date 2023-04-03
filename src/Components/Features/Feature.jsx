import React from "react";
import "./Feature.css";
import featureImg1 from "./featureimg1.png";
import featureImg2 from "./featureimg2.png";
let img;
const Feature = (props) => {
  if (props.value === 1) {
    img = featureImg1;
  }
  if (props.value === 2) {
    img = featureImg2;
  }
  return (
    <div className={props.className}>
      <div className="feature-image__container">
        <img src={img} alt="product" />
        {console.log(img)}
      </div>
      <p className="feature-text">
        Our platform makes it easy for landlords to manage their properties,
        process rent collections and fill vacancies quickly
      </p>
    </div>
  );
};

export default Feature;
