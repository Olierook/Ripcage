import React from "react";
import PropTypes from "prop-types";

const ResponsiveGrid = ({isDesktop, mobileGrid, desktopGrid, children}) => {
  return (
    <div className='grid'>
      {children}
      <style jsx>{`
        .grid {
          display: grid;
          
        }
      `}</style>
    </div>
  );
};

ResponsiveGrid.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  mobileGrid: PropTypes.string,
  desktopGrid: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
};

export default ResponsiveGrid;