import React from "react";
import PropTypes from "prop-types";
import { headerHeight } from "./../../lib/globalvars";

const HeaderSection = props => {
  return (
    <div>
      <img src="/VHF.svg" height={headerHeight}/>
      <style jsx>{`
            div {
                width: 100%;
                height: ${headerHeight};
                background: #ffffff;
            }
            img {
                margin-left: 18px;
            }
        `}</style>
    </div>
  );
};

HeaderSection.propTypes = {};

export default HeaderSection;