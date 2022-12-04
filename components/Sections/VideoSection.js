import React from "react";
// import YoutubeIframe from "./../YoutubeIframe";
// import classNames from "classnames";
import { useStore } from "./../../context/Store";
import { PropTypes } from "prop-types";

const VideoSection = (video) => {
  const [{isMedium, isBig}] = useStore();
  // const videoclasses = classNames({
  //   ["mobile-yt"]: !isDesktop,
  //   ["desktop-yt"]: isDesktop
  // });
  return (
    // <div className={videoclasses}>
    //   <div>
    <iframe width={isBig ? "560" : "100%"} height={isBig ? "315" : isMedium ? "500" : "100%"} src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
  video: PropTypes.string,
};

export default VideoSection;