import React from "react";
import PropTypes from "prop-types";
import { headerHeight } from "./../../lib/globalvars";

const HeaderSection = props => {
  return (
    <div>
      <img src="/VHF.png" height={headerHeight}/>
      <style jsx>{`
            div {
                width: 100%;
                height: ${headerHeight};
                background: #000000;
            }
            img {
                margin-left: 15px;
            }
        `}</style>
    </div>
  );
};

HeaderSection.propTypes = {};

export default HeaderSection;