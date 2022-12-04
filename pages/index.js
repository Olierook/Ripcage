import Head from "next/head";
import { useValue, useVideo } from "./../fetchData/index";
import { useUser } from "./../context/userContext";
import Button from "./../components/Mui/CustomButtons/Button";
import Router from "next/router";
import React from "react";
import ResponsiveGrid from "../components/ResponsiveGrid";
import Section from "../components/Section";
import VideoSection from "../components/Sections/VideoSection";
import { useStore } from "./../context/Store";
import useSetBreakpoints from "./../hooks/useSetBreakpoints";
import HeaderSection from "../components/Sections/HeaderSection";
import { footerHeight, headerHeight } from "./../lib/globalvars";


export default function Home() {
  useSetBreakpoints(700, 918);
  const video = "KlNSLU94Mj0";

  const mobileGrid = `
  "header" ${headerHeight}
  "video"  33vh
  "info" calc(67vh - 100px)
  "footer" ${footerHeight} 
  / auto
  `;

  const mediumGrid = `
  "header" ${headerHeight}
  "video"  500px
  "info" auto
  "footer" ${footerHeight}  
  / auto
  `;

  const desktopGrid = `
    "header header" ${headerHeight}
    "video info" calc(100vh - 100px)
    "footer footer" ${footerHeight} 
    / 50vw 50vw
  `;
  return (
    <div className="container">
      <Head>
        <title>Veldhuijzen Hospitality</title>
      </Head>
      <ResponsiveGrid small={mobileGrid} medium={mediumGrid} big={desktopGrid}>
        <Section id="header"><HeaderSection/></Section>
        <Section id="video"><VideoSection video={video}/></Section>
        <Section id="info"></Section>
        <Section id="footer"></Section>
      </ResponsiveGrid>
    </div>
  );
}
