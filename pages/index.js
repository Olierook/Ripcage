import Head from 'next/head'
import { useValue } from './../fetchData/index';
import { useUser } from './../context/userContext';
import Button from "./../components/Mui/CustomButtons/Button";
import Router from 'next/router';
import React from 'react';
import useIsDesktop from './../hooks/useIsDesktop';
import YoutubeIframe from '../components/YoutubeIframe';
import classNames from 'classnames';
import ResponsiveGrid from '../components/ResponsiveGrid';


export default function Home() {
  const isDesktop = useIsDesktop();
  const videoclasses = classNames({
    ['mobile-yt']: !isDesktop,
    ['desktop-yt']: isDesktop
  })

console.log(isDesktop);
  return (
    <div className="container">
      <Head>
        <title>Veldhuijzen Hospitality</title>
      </Head>
      <ResponsiveGrid isDesktop={isDesktop}>
        <div>1</div>
        <div className={videoclasses}>
          <div>
            <YoutubeIframe video="KlNSLU94Mj0" width={isDesktop ? "680px" : "100%"} height={isDesktop ? "480px" : "33vh"}/>
          </div>
        </div>
        <div>3</div>
      </ResponsiveGrid>
      
      <style jsx>
        {`
          .videocontainer {

          }
          .mobile-yt div{
            height: 33vh;
          }
          .desktop-yt div{
            height: 480px;
          }

          .desktop-yt {
            margin-top: 50px;
            margin-left: 50px;

          }
        `}
      </style>
    </div>
  )
}
