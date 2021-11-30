import React from "react";
import { motion } from "framer-motion";
import "./lightbox.styles.scss";

const LightBox = ({ imageUrl, name, handler }) => {
  return (
    <div className="lightbox-container">
      <motion.div
        className="lightbox"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ ease: "easeOut" }}
      >
        <div
          className="button"
          onClick={() => {
            handler();
          }}
        >
          <span>CLOSE</span>
        </div>
        <img
          className="lightbox-image"
          src={`/${imageUrl}`}
          alt={`${name}`}
        ></img>
      </motion.div>
      <motion.div
        className="overlay"
        onClick={() => {
          handler();
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      ></motion.div>
    </div>
  );
};

export default LightBox;
