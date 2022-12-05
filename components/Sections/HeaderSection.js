import React from "react";
import PropTypes from "prop-types";
import { headerHeight, padding } from "./../../lib/globalvars";

const HeaderSection = props => {
  return (
    <div>
      <img src="/VHF.svg" height={"50px"}/>
      <style jsx>{`
            div {
                width: 100%;
                height: ${headerHeight};
                background: #ffffff;
            }
            img {
                margin-left: ${padding};
                margin-top: 12.5px;
            }
        `}</style>
    </div>
  );
};

HeaderSection.propTypes = {};

export default HeaderSection;