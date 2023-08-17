import React from "react";
import PropTypes from "prop-types";

const ProfilePicture = ({width}) => {
  return (
    <>
      <img src="/profiel.jpg"/>
      <style jsx>{`
            img {
                width: ${width};

            }
        `}</style>
    </>
  );
};

ProfilePicture.propTypes = {
  width: PropTypes.number
};

export default ProfilePicture;