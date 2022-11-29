import Head from "next/head";
import { useValue } from "./../fetchData/index";
import { useUser } from "./../context/userContext";
import Button from "./../components/Mui/CustomButtons/Button";
import Router from "next/router";
import React from "react";
import useIsDesktop from "./../hooks/useIsDesktop";
import ResponsiveGrid from "../components/ResponsiveGrid";
import Section from "../components/Section";
import VideoSection from "../components/Sections/VideoSection";
import { useStore } from "./../context/Store";


export default function Home() {
  useIsDesktop();

  const mobileGrid = `
  "header" 50px
  "video"  33vh
  "info" calc(67vh - 50px)
  "footer" 25px 
  / auto
  `;
  const desktopGrid = `
    "header header" 50px
    "video info" calc(100vh - 100px)
    "footer footer" 50px
    / 50vw 50vw
  `;
  return (
    <div className="container">
      <Head>
        <title>Veldhuijzen Hospitality</title>
      </Head>
      <ResponsiveGrid mobileGrid={mobileGrid} desktopGrid={desktopGrid}>
        <Section id="header"></Section>
        <Section id="video"><VideoSection/></Section>
        <Section id="info"></Section>
        <Section id="footer"></Section>
      </ResponsiveGrid>
    </div>
  );
}
