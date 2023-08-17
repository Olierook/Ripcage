import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { useValue } from "./../../fetchData/index";
import { TextField } from "@mui/material";

const ContentSection = ({setRenderOrder}) => {
  const [video, setVideo] = useValue("content/video");
  const [facebook, setFacebook] = useValue("content/facebook");
  const [instagram, setInstagram] = useValue("content/instagram");
  const [email, setEmail] = useValue("content/email");
  const [phonenumber, setPhonenumber] = useValue("content/phonenumber");
  const [h, setH] = useValue("content/h");
  const [p1, setP1] = useValue("content/p1");
  const [p2, setP2] = useValue("content/p2");

  useEffect(() => {
    setRenderOrder(true);
  }, []);
  


  return (
    <div className="outerdiv">
      <h3>Content</h3>
      <div className="innerdiv">
        <TextField label="Video" variant="outlined" value={video || ""} onChange={(e) => setVideo(e.target.value)}/>
        <TextField label="Facebook" variant="outlined" value={facebook || ""} onChange={(e) => setFacebook(e.target.value)}/>
        <TextField label="Instagram" variant="outlined" value={instagram || ""} onChange={(e) => setInstagram(e.target.value)}/>
        <TextField label="Email" variant="outlined" value={email || ""} onChange={(e) => setEmail(e.target.value)}/>
        <TextField label="Phonenumber" variant="outlined" value={phonenumber || ""} onChange={(e) => setPhonenumber(e.target.value)}/>
        <TextField label="Paragraph Title" variant="outlined" value={h || ""} onChange={(e) => setH(e.target.value)}/>
        <TextField label="P1" variant="outlined" value={p1 || ""} onChange={(e) => setP1(e.target.value)}/>
        <TextField label="P2" variant="outlined" value={p2 || ""} onChange={(e) => setP2(e.target.value)}/>


      </div>
      <style jsx>{`
        .innerdiv {
            margin-top: 20px;
            display: grid;
            grid-template: 1fr 1fr 1fr 1fr / 50% 50%;
            gap: 20px;
            height: 100%;
            width: calc(100% - 20px);
        }
        .outerdiv {
            height: 100%;
            width: 100%;
            padding: 0 20px 20px 20px;
        }
        
        `}</style>
    </div>
  );
};

ContentSection.propTypes = {
  renderOrder: PropTypes.bool,
  setRenderOrder: PropTypes.func
};

export default ContentSection;