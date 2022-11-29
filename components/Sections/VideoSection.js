import React from "react";
import PropTypes from "prop-types";
// import YoutubeIframe from "./../YoutubeIframe";
// import classNames from "classnames";
import { useStore } from "./../../context/Store";

const VideoSection = () => {
  const [{isDesktop}] = useStore();
  // const videoclasses = classNames({
  //   ["mobile-yt"]: !isDesktop,
  //   ["desktop-yt"]: isDesktop
  // });
  return (
    // <div className={videoclasses}>
    //   <div>
    <iframe width={isDesktop ? "560" : "100%"} height={isDesktop ? "315" : "100%"} src="https://www.youtube.com/embed/KlNSLU94Mj0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  // {/* <YoutubeIframe video="KlNSLU94Mj0" width={isDesktop ? "680px" : "100%"} height={isDesktop ? "480px" : "33vh"}/> */}
    //   </div>
    //   <style jsx>
    //     {`
    //       .videocontainer {

  //       }
  //       .mobile-yt div{
  //         height: 33vh;
  //       }
  //       .desktop-yt div{
  //         height: 480px;
  //       }

  //       .desktop-yt {
  //         margin-top: 50px;
  //         margin-left: 50px;

  //       }
  //     `}
  //   </style>
  // </div>
  );
};

VideoSection.propTypes = {
  isDesktop: PropTypes.bool
};

export default VideoSection;