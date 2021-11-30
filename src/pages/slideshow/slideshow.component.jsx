import React from "react";
import SlideshowDirectory from "../../components/slideshow-directory/slideshow-directory.component";

import { useParams } from "react-router";
import "./slideshow.styles.scss";

const SlideShow = () => {
  let { painting } = useParams();
  return (
    <div className="slideshow">
      <SlideshowDirectory key={painting} />
    </div>
  );
};

export default SlideShow;
