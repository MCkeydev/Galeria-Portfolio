import React from "react";
import "./control-bar.styles.scss";
import { ReactComponent as PrevLogo } from "../../assets/shared/icon-back-button.svg";
import { ReactComponent as NextLogo } from "../../assets/shared/icon-next-button.svg";
import { useNavigate } from "react-router";
const ControlBar = ({ id, lastId, previous, next, target }) => {
  let navigate = useNavigate();
  return (
    <div className="ControlBar">
      <hr
        className="progress-bar"
        style={{
          width: `${(100 / 15) * (id + 1)}%`,
        }}
      ></hr>
      <div className="control-container">
        <div className="control-bar">
          <div className="control-info">
            <span className="info-name">{target}</span>
            <span className="info-artist">Vincent Van Gogh</span>
          </div>
          <div className="control-buttons">
            <PrevLogo
              className="logo"
              onClick={
                id === 0
                  ? null
                  : () =>
                      navigate(`/slideshow/${previous.replaceAll(" ", "+")}`)
              }
              style={id === 0 ? { opacity: 0.4 } : { opacity: 1 }}
            />

            <NextLogo
              className="logo"
              onClick={
                id === lastId
                  ? null
                  : () => navigate(`/slideshow/${next.replaceAll(" ", "+")}`)
              }
              style={id === lastId ? { opacity: 0.4 } : { opacity: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlBar;
