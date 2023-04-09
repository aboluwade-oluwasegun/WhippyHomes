import Button from "../Button/Button";
import mobileHeroImg from "../images/mobileHeroImg.png";
import "./hi.css";

const MobileHero = () => {
  return (
    <header className="mobile-header">
      <p className="mobile-header__title">
        <span>Whippyhomes</span>, your all-in-one property management platform.
      </p>
      <p className="mobile-header__description">
        Be among our founding members and <span> join the waitlist!</span>
      </p>
      <Button className="navigation-btn" click="click" />
      <img src={mobileHeroImg} alt="mobile Hero image" />
    </header>
  );
};

export default MobileHero;
