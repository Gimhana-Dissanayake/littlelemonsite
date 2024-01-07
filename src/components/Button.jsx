import React from "react";
import "./Button.css";
import PuffLoader from "react-spinners/PuffLoader";

const Button = (props) => {
  return (
    <button
      className={`${props.className} button-styles `}
      onClick={props.onClick}
      type={props.type || "button"}
      style={props.style}
    >
      {props.loading ? (
        <PuffLoader color="#186f65" size={20} className="mx-auto" />
      ) : (
        props.title
      )}
    </button>
  );
};

// "hero__reserve-btn"

export default Button;
