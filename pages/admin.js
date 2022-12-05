import Head from "next/head";
import React, { useState} from "react";
import ResponsiveGrid from "../components/ResponsiveGrid";
import Section from "../components/Section";
import useSetBreakpoints from "../hooks/useSetBreakpoints";
import HeaderSection from "../components/Sections/HeaderSection";
import { footerHeight, headerHeight, padding } from "../lib/globalvars";
import ContentSection from "./../components/Sections/ContentSection";
import ConfigSection from "./../components/Sections/ConfigSection";
import { signIn, useUser } from "./../context/userContext";
import { Button } from "@mui/material";
import { render } from "react-dom";


export default function Admin() {

  const { user, setUser, loadingUser } = useUser();
  const [renderOrder, setRenderOrder] = useState(false);
  console.log({user});

  useSetBreakpoints(700, 918);

  

  const mobileGrid = `
    "header" ${headerHeight}
    "content" auto
    "config" auto
    "footer" ${footerHeight} 
    / auto
  `;

  const mediumGrid = `
    "header" ${headerHeight}
    "content"  auto
    "config" auto
    "footer" ${footerHeight}  
    / auto
  `;

  const desktopGrid = `
    "header header" ${headerHeight}
    "content config" calc(100vh - (${headerHeight} + ${footerHeight}))
    "footer footer" ${footerHeight} 
    / calc(560px + ${padding} + ${padding}) auto
  `;
  return (
    <div className="container">
      <Head>
        <title>Veldhuijzen Hospitality</title>
      </Head>
      <ResponsiveGrid small={mobileGrid} medium={mediumGrid} big={desktopGrid}>
        <Section id="header"><HeaderSection/></Section>
        {user ?
          <>
            <Section id="content"><ContentSection setRenderOrder={setRenderOrder}/></Section>
            {renderOrder && <Section id="config"><ConfigSection renderOrder={renderOrder}/></Section>}
          </>
          :
          <Button onClick={signIn()}>Inloggen</Button>
        }
        <Section id="footer"></Section>
      </ResponsiveGrid>
    </div>
  );
}
