import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpenButton from "../buttons/open-lightbox/open-lightbox.component";
import "./slideshow-vignette.styles.scss";

const Vignette = ({ artist, images, name, description, handler }) => {
  return (
    <motion.div
      className="vignette-container"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <motion.img
        className="vignette-hero"
        src={`/${images?.hero?.large}`}
        alt="starry night"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      ></motion.img>
      <OpenButton handler={handler} />

      <img className="artist-hero" src={`/${artist?.image}`}></img>

      <div className="description-card">
        <div className="vignette-description">
          <h1 className="title">{name}</h1>
          <p className="subhead1">{artist?.name}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Vignette;
