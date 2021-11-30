import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import SlideShow from "./pages/slideshow/slideshow.component";
import Header from "./components/header/header.component";

const App = () => {
  let { pathname } = useLocation();

  const isSlideshow = pathname !== "/" ? true : false;

  return (
    <AnimatePresence>
      <motion.div
        className="App-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Header isClicked={isSlideshow} />
        <Routes>
          <Route path="/" element={<HomePage key="HomePage" />} />
          <Route
            path="/slideshow/:painting"
            element={<SlideShow key="SlideShow" />}
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
