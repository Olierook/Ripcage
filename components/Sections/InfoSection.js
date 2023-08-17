import React from "react";
import PropTypes from "prop-types";
import ProfilePicture from "../ProfilePicture";
import { padding } from "./../../lib/globalvars";
import { useStore } from "./../../context/Store";
import { colors } from "../../lib/colors";

const InfoSection = ({content}) => {
  const {h, p1, p2} = content;
  const [{isBig}] = useStore();
  console.log({isBig});
  return (
    <div>
      <ProfilePicture width={isBig ? "calc(100%)" : "calc(100vw - 50px)"}/>
      <h3>{h}</h3>
      <>
        {p1.split("\\n ").map((i, key) => {
          return <p key={key}>{i}</p>;
        })}
      </>
      <>
        {p2.split("\\n ").map((i, key) => {
          return <p key={key}>{i}</p>;
        })}
      </>

      <style jsx>{`
        div {
           margin-top: ${padding};
           margin-right: ${padding};
           margin-left: ${isBig ? 0 : padding};
        } 
        p {
          font-size: 1.05em;
          white-space: pre-wrap;
        }
        h3 {
          color: ${colors.title};
          font-weight: bold;
        }
        `}</style>
    </div>
  );
};

InfoSection.propTypes = {
  content: PropTypes.object
};

export default InfoSection;