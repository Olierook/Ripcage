import React from "react";
import PropTypes from "prop-types";
import { useStore } from "./../context/Store";

const ResponsiveGrid = ({mobileGrid, desktopGrid, children}) => {
  const [{isDesktop}] = useStore();
  return (
    <div className='grid'>
      {children}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template: ${isDesktop ? desktopGrid : mobileGrid};
        }
      `}</style>
    </div>
  );
};

ResponsiveGrid.propTypes = {
  mobileGrid: PropTypes.string,
  desktopGrid: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
};

export default ResponsiveGrid;