import React from "react";
import PropTypes from "prop-types";
import ProfilePicture from "../ProfilePicture";
import { padding } from "./../../lib/globalvars";
import { useStore } from "./../../context/Store";

const InfoSection = props => {
  const [{isBig}] = useStore();
  console.log({isBig});
  return (
    <div>
      <ProfilePicture width={100}/>
      <h3>Barman, keukenhulp of facilitair medewerker inhuren?</h3>
      <p>Aangenaam, ik ben Rinus! Ik heb meer dan 10 jaar hospitality-ervaring. Van het begeleiden van kroegentochten tot het bakken van pizza’s, je kunt mij breed inzetten. En altijd met een gastvrije glimlach en positieve instelling.</p>
      <p>Zoek jij iemand om tijdelijk je team te versterken? Neem contact met mij op via één van de buttons hieronder!</p>

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

InfoSection.propTypes = {};

export default InfoSection;