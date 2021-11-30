import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ControlBar from "../control-bar/control-bar.component";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../assets/data.json";
import "./slideshow-directory-styles.scss";
import Vignette from "../slideshow-vignette/slideshow-vignette.component";
import Information from "../slideshow-information/slideshow-information.component";
import OpenButton from "../buttons/open-lightbox/open-lightbox.component.jsx";
import LightBox from "../lightbox/lightbox.component";

const SlideshowDirectory = () => {
  let { painting } = useParams();
  const id = useRef();
  const lastId = useRef();
  const next = useRef();
  const previous = useRef();
  const [piece, setPiece] = useState({});
  const [isLightBox, setIsLightBox] = useState(false);

  const buttonHandler = () => {
    return setIsLightBox(!isLightBox);
  };
  function getData() {
    const currentId = data.findIndex((cur, i) => {
      return cur.name === painting.replaceAll("+", " ");
    });
    id.current = currentId;

    previous.current = currentId !== 0 ? data[currentId - 1].name : "";
    next.current = currentId === 14 ? "" : data[currentId + 1].name;
    lastId.current = data.length - 1;

    setPiece(data[currentId]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="slideshow-container">
      <AnimatePresence>
        <Vignette {...piece} key={"vignette"} handler={buttonHandler} />

        <Information {...piece} key={"information"} />
      </AnimatePresence>
      <ControlBar
        next={next.current}
        previous={previous.current}
        target={piece?.name}
        id={id.current}
        lastId={lastId.current}
      />
      <AnimatePresence>
        {isLightBox && (
          <LightBox handler={buttonHandler} imageUrl={piece.images?.gallery} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SlideshowDirectory;
