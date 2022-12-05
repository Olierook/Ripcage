import React from "react";
import PropTypes from "prop-types";
import ProfilePicture from "../ProfilePicture";
import { padding } from "./../../lib/globalvars";
import { useStore } from "./../../context/Store";

const InfoSection = ({content}) => {
  const {h, p1, p2} = content;
  const [{isBig}] = useStore();
  console.log({isBig});
  return (
    <div>
      <ProfilePicture width={100}/>
      <h3>{h}</h3>
      <p>{p1}</p>
      <p>{p2}</p>

      <style jsx>{`
        div {
           margin-top: ${padding};
           margin-right: ${padding};
           margin-left: ${isBig ? 0 : padding};
        } 
        p {
          font-size: 1.05em;
        }
        `}</style>
    </div>
  );
};

InfoSection.propTypes = {
  content: PropTypes.object
};

export default InfoSection;