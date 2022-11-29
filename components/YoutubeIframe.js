import {useRef} from "react";
import useIsDesktop from "./../hooks/useIsDesktop";

//    thumbnailQuality: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault'


const YoutubeIframe = ({video, width, height}) => {
    
  const divRef = useRef(null);
  const isDesktop = useIsDesktop();
  const thumbnailQuality = isDesktop ? "maxresdefault" : "sddefault";
  console.log({video});

  const onClick = () => {
    const iframe = document.createElement( "iframe" );
    iframe.setAttribute( "frameborder", "0" );
    iframe.setAttribute( "allowfullscreen", "1");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    iframe.style.width = width;
    iframe.style.height = height;
    iframe.setAttribute( "src", `https://www.youtube.com/embed/${video}?rel=0&showinfo=1&autoplay=1` );
    if (divRef.current) {
      divRef.current.innerHTML = "";
      divRef.current.appendChild(iframe);
    }
  };


  return (
    <div ref={divRef} className="youtube-frame position-relative">
      <span onClick={onClick} className="ti-control-play position-absolute display-1 text-white" />
      <img onClick={onClick} loading="lazy" src={`https://img.youtube.com/vi/${video}/${thumbnailQuality}.jpg`} alt="YouTube Video Thumbnail" width={width} height={isDesktop ? height : "100%"} className="shadow" />
    </div>
  );
};

export default YoutubeIframe;