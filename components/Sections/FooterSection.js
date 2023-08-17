import React, {useState} from "react";
import PropTypes from "prop-types";
import { SocialIcon } from "react-social-icons";
import { footerHeight } from "../../lib/globalvars";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "../../lib/colors";



const FooterSection = ({socmed}) => {
  const [clicked, setClicked] = useState(false);
  const {facebook, instagram, email, phonenumber} = socmed;

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
      <SocialIcon url={"https://open.spotify.com/artist/2jwyLoOyrJz0OM0FICfOGT?si=QYV_Ijv1SdmJVHeIZxkmAg"}/>
      <SocialIcon url={"https://www.youtube.com/@goldwolffband"}/>
      <SocialIcon url={`https://www.instagram.com/${instagram}`}/>
      <SocialIcon url={`https://www.facebook.com/${facebook}`}/>
      <SocialIcon url={`https://api.whatsapp.com/send?phone=${phonenumber}`}/>
      <SocialIcon onClick={copy} network="email" style={{cursor: "pointer"}}/>
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
                /* border-top: 1px solid #bbb; */
                background: ${colors.bars};
                text: ${colors.barsText};
                display: flex;
                gap: 15px;
                align-items: center;
                justify-content: center;

            }
        `}</style>
    </div>
  );
};

FooterSection.propTypes = {
  socmed: PropTypes.object
};

export default FooterSection;