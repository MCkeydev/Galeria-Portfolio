import React, { useState, useEffect } from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";

import { useNavigate, useParams } from "react-router-dom";
import Button from "../buttons/slideshow-toggle/slideshow-toggle.component";

const Header = ({ isClicked }) => {
  let navigate = useNavigate();

  return (
    <div className="header">
      <Logo className="gallery-logo" onClick={() => navigate("/")} />
      <Button
        use={!isClicked ? "start slideshow" : "stop slideshow"}
        url={!isClicked ? "/slideshow/Starry+Night" : "/"}
      ></Button>
    </div>
  );
};

export default Header;
