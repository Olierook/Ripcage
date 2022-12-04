import React, {useState} from "react";
import PropTypes from "prop-types";
import { SocialIcon } from "react-social-icons";
import { footerHeight } from "../../lib/globalvars";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";



const FooterSection = () => {
  const [clicked, setClicked] = useState(false);

  const email = "bookings@veldhuijzenhospitality.com";
  const copy = async (e) => {
    console.log("hi");
    e.preventDefault();
    await navigator.clipboard.writeText(email);
    setClicked(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setClicked(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <div>
      <SocialIcon url="https://www.instagram.com/rinusium/?hl=en"/>
      <SocialIcon url="https://www.facebook.com/rinusium/?hl=en"/>
      <SocialIcon url="https://api.whatsapp.com/send?phone=31644923887"/>
      <SocialIcon onClick={copy} network="email" />
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={clicked}
        autoHideDuration={1000}
        onClose={handleClose}
        message={`Copied ${email}`}
        action={action}
      />


        
      <style jsx>{`
            div {
                width: 100%;
                height: ${footerHeight};
                border-top: 1px solid #bbb;
                background: #fff;
                display: flex;
                gap: 15px;
                align-items: center;
                justify-content: center;

            }
        `}</style>
    </div>
  );
};

FooterSection.propTypes = {};

export default FooterSection;