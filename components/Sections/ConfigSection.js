import React from "react";
import PropTypes from "prop-types";
import { useValue } from "../../fetchData/index";
import { TextField } from "@mui/material";
import { Button, Checkbox } from "@material-ui/core";
import { signOut, getAuth } from "firebase/auth";


const ConfigSection = () => {
  const [show, setShow] = useValue("config/show");

  const auth = getAuth();
  const signout = () => signOut(auth);


  return (
    <div className="outerdiv">
      <h3>Config</h3>
      <div className="innerdiv">
        <div>
          <span>Show: </span>
          <Checkbox
            checked={!!show}
            onChange={(e) => setShow(e.target.checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <Button onClick={signout}>Uitloggen</Button>
      </div>
      <style jsx>{`
        .innerdiv {
            margin-top: 20px;
            display: grid;
            grid-template: 1fr 1fr 1fr / 50% 50%;
            gap: 20px;
            height: 100%;
            width: calc(100% - 20px);
        }
        .outerdiv {
            margin-top: 40px;
            height: 100%;
            width: 100%;
            padding: 0 20px 20px 20px;
        }
        
        `}</style>
    </div>
  );
};

ConfigSection.propTypes = {
  renderOrder: PropTypes.bool
};

export default ConfigSection;