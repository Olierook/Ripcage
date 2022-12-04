import React from "react";
import PropTypes from "prop-types";
import ProfilePicture from "../ProfilePicture";
import { padding } from "./../../lib/globalvars";
import { useStore } from "./../../context/Store";

const InfoSection = props => {
  const {isBig} = useStore();
  return (
    <div>
      <ProfilePicture width={100}/>
      <br/>
      <br/>
      <p>
        Ik ben Rinus en ik houd van bier tappen en drinken. Kom ik binnenkort jouw tent onveilig maken?
      </p>
      <style jsx>{`
        div {
           margin-top: ${padding};
           margin-right: ${padding};
           margin-left: ${isBig ? 0 : padding};
        } 
        `}</style>
    </div>
  );
};

InfoSection.propTypes = {};

export default InfoSection;