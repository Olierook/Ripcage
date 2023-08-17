import React from "react";
import PropTypes from "prop-types";
import { headerHeight, padding } from "./../../lib/globalvars";
import { colors } from "../../lib/colors";

const HeaderSection = props => {
  return (
    <div>
      <img src="/logo.png" alt="logo" height={"75px"}/>
      <style jsx>{`
            div {
                width: 100%;
                height: ${headerHeight};
                background: ${colors.bars};
                text: ${colors.barsText};
                display: flex;
                align-items: center;
                justify-content: center;
              }
        `}</style>
    </div>
  );
};

HeaderSection.propTypes = {};

export default HeaderSection;