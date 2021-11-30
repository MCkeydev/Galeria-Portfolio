import React from "react";
import "./slideshow-toggle.styles.scss";
import { useNavigate } from "react-router";
const Button = ({ use, url, handler }) => {
  let navigate = useNavigate();
  return (
    <div
      className="toggle-btn"
      onClick={() => {
        navigate(`${url}`);
      }}
    >
      <span>{`${use}`.toUpperCase()}</span>
    </div>
  );
};

export default Button;
