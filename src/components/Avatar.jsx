import React from "react";
import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div
      className="avatar"
      style={{ backgroundImage: `url(${props.url})` }}
    ></div>
  );
};

export default Avatar;
