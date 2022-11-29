
import useMediaQuery from './useMediaQuery';
import { useEffect, useState } from 'react';
const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(false)
    const matches = useMediaQuery("(min-width: 556px)");
    useEffect(() => {
        setIsDesktop(matches);
    })
    return isDesktop
}

//   const useIsDesktop = (inverse = false) => {

//     const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
//     const {isDesktop, isMobile} = getMobileDetect(userAgent);
//     return inverse ? isMobile : isDesktop;
// }
// const getMobileDetect = (userAgent) => {
//   const isAndroid = () => Boolean(userAgent.match(/Android/i));
//   const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
//   const isOpera = () => Boolean(userAgent.match(/Opera Mini/i));
//   const isWindows = () => Boolean(userAgent.match(/IEMobile/i));
//   const isSSR = () => Boolean(userAgent.match(/SSR/i));

//   const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows());
//   const isDesktop = () => Boolean(!isMobile() && !isSSR());
//   return {
//     isMobile,
//     isDesktop,
//     isAndroid,
//     isIos,
//     isSSR
//   };
// };


export default useIsDesktop