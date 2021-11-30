import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./slideshow-information.styles.scss";

const Information = ({ description, year, source }) => {
  return (
    <motion.div
      className="information-container"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <span className="date">{year}</span>
      <article>
        <p className="trivia">{description}</p>
      </article>
      <a className="source-link" href={source} target="_blank">
        GO TO SOURCE
      </a>
    </motion.div>
  );
};

export default Information;
