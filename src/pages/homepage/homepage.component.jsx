import React from "react";
import "./homepage.styles.scss";

import HomepageDirectory from "../../components/homepage-directory/homepageDirectory.component";
const HomePage = ({ ...props }) => {
  return (
    <div className="home-page">
      <HomepageDirectory />
    </div>
  );
};

export default HomePage;
