import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button
      className={`${props.className} button-styles`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

// "hero__reserve-btn"

export default Button;
