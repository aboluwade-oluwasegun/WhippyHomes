import React from "react";
import "./Button.css";
const Button = (props) => {
  const scrollEffectHandler = () => {
    if (props.click === "yeah") {
      const waitlist = document.querySelector(".waitlistSection");
      waitlist.scrollIntoView({ behavior: "smooth" });
    }
  };
  const classes = "waitlist-cta " + props.className;
  return (
    <button className={classes} onClick={scrollEffectHandler}>
      Join The WaitList
    </button>
  );
};

export default Button;
