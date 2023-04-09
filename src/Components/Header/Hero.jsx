import { useState, useEffect } from "react";
import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";
function Hero(props) {
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 428) {
        setMobileView(true);
        console.log("true");
      }
      if (window.innerWidth > 428) {
        setMobileView(false);
        console.log("false");
      }
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);
  return <>{mobileView ? <MobileHero /> : <DesktopHero data={props.data} />}</>;
}

export default Hero;
