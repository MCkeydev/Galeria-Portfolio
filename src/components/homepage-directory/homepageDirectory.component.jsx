import React from "react";
import data from "../../assets/data.json";
import "./homepage-directory.styles.scss";
import MediaQuery from "react-responsive";
import GalleryDesktop from "../homepage-gallery-desktop/homepage-gallery-desktop.component";
import GalleryTablet from "../homepage-gallery-tablet/homepage-gallery-tablet.component";
import GalleryPhone from "../homepage-gallery-phone/homepage-gallery-phone.component";
import { motion, AnimatePresence } from "framer-motion";
class HomepageDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paintings: [],
    };
  }
  async getThumbnailData() {
    let i = 0;
    // const res = await fetch("data.json");
    // const data = await res.json();

    const thumbnailInfo = data.map((cur) => {
      i++;
      return {
        name: cur.name,
        artist: cur.artist.name,
        thumbnailUrl: cur.images.thumbnail,
        id: i,
      };
    });
    return thumbnailInfo;
  }

  async componentDidMount() {
    //fetch data in "data.json", then set states, triggering rerender
    const thumbnailInfo = await this.getThumbnailData();

    this.setState({ paintings: thumbnailInfo });
  }
  render() {
    return (
      <AnimatePresence>
        <motion.div
          className="home-page-container"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <MediaQuery minWidth={1400}>
            <GalleryDesktop paintings={this.state.paintings} />
          </MediaQuery>
          <MediaQuery minWidth={768} maxWidth={1399}>
            <GalleryTablet paintings={this.state.paintings} />
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <GalleryPhone paintings={this.state.paintings} />
          </MediaQuery>
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default HomepageDirectory;
