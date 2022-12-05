import Head from "next/head";
import React, { useEffect } from "react";
import ResponsiveGrid from "../components/ResponsiveGrid";
import Section from "../components/Section";
import VideoSection from "../components/Sections/VideoSection";
import useSetBreakpoints from "./../hooks/useSetBreakpoints";
import HeaderSection from "../components/Sections/HeaderSection";
import { footerHeight, headerHeight, padding } from "./../lib/globalvars";
import FooterSection from "./../components/Sections/FooterSection";
import InfoSection from "./../components/Sections/InfoSection";
import { useValue } from "./../fetchData/index";
import admin from "./../firebase/nodeApp";


export default function Home({
  video,
  facebook,
  instagram,
  email,
  phonenumber,
  h,
  p1,
  p2,
  show
}) {
  useSetBreakpoints(700, 918);

  

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
      {show &&
      <ResponsiveGrid small={mobileGrid} medium={mediumGrid} big={desktopGrid}>
        <Section id="header"><HeaderSection/></Section>
        <Section id="video"><VideoSection video={video}/></Section>
        <Section id="info"><InfoSection content={{h, p1, p2}}/></Section>
        <Section id="footer"><FooterSection socmed={{facebook, instagram, email, phonenumber}}/></Section>
      </ResponsiveGrid>
      }
    </div>
  );
}


export async function getStaticProps() {
  const db = admin.database();
  function getValue(string) {
    const ref = db.ref(string);
    return new Promise(resolve => {
      ref.on("value", response => resolve(response.val()));
    });
  }


  const video = await getValue("content/video");
  const facebook = await getValue("content/facebook");  
  const instagram = await getValue("content/instagram");  
  const email = await getValue("content/email");  
  const phonenumber = await getValue("content/phonenumber");  
  const h = await getValue("content/h");  
  const p1 = await getValue("content/p1");  
  const p2 = await getValue("content/p2");  


  
  const show = await getValue("config/show");  


  return {
    props: {
      video,
      facebook,
      instagram,
      email,
      phonenumber,
      h,
      p1,
      p2,
      show
    },
    revalidate: 120, // In seconds
  };
}