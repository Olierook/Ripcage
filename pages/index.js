import Head from "next/head";
import React from "react";
import ResponsiveGrid from "../components/ResponsiveGrid";
import Section from "../components/Section";
import VideoSection from "../components/Sections/VideoSection";
import useSetBreakpoints from "./../hooks/useSetBreakpoints";
import HeaderSection from "../components/Sections/HeaderSection";
import { footerHeight, headerHeight, padding } from "./../lib/globalvars";
import FooterSection from "./../components/Sections/FooterSection";
import InfoSection from "./../components/Sections/InfoSection";


export default function Home() {
  useSetBreakpoints(700, 918);
  const video = "KlNSLU94Mj0";

  const mobileGrid = `
    "header" ${headerHeight}
    "video"  33vh
    "info" minmax(calc(67vh - (${headerHeight} + ${footerHeight} + 50px)), auto)
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
    "video info" calc(100vh - (${headerHeight} + ${footerHeight}))
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
        <Section id="video"><VideoSection video={video}/></Section>
        <Section id="info"><InfoSection/></Section>
        <Section id="footer"><FooterSection/></Section>
      </ResponsiveGrid>
    </div>
  );
}
