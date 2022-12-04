import React from "react";
import PropTypes from "prop-types";

const ProfilePicture = ({width}) => {
  return (
    <>
      <img src="/profiel.jpg"/>
      <style jsx>{`
            img {
                border-radius: 50%;
                width: ${width}px;
            }
        `}</style>
    </>
  );
};

ProfilePicture.propTypes = {
  width: PropTypes.number
};

export default ProfilePicture;