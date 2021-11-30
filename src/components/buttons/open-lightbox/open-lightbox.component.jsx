import React from "react";
import "./open-lightbox.styles.scss";
import { ReactComponent as OpenLogo } from "../../../assets/shared/icon-view-image.svg";
const OpenButton = ({ handler }) => {
  return (
    <div
      className="open-button"
      onClick={() => {
        handler();
      }}
    >
      <OpenLogo />
      <p className="view-image">VIEW IMAGE</p>
    </div>
  );
};

export default OpenButton;
