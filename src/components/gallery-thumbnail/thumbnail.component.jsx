import React from "react";
import { useNavigate } from "react-router";
import "./thumbnail.styles.scss";

const Thumbnail = ({ name, artist, thumbnailUrl }) => {
  let navigate = useNavigate();
  return (
    <div
      className="galeria-thumbnail"
      onClick={() => navigate(`slideshow/${name.replaceAll(" ", "+")}`)}
    >
      <img className="thumbnail-image" src={thumbnailUrl} alt={`${name}`} />
      <div className="description">
        <div className="description-text ">
          <h2 className="thumbnail-title">{name}</h2>
          <span className=" subhead2 thumbnail-sub-title">{artist}</span>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
