import Form from "..//Form/Form";
import "./Hero.css";
import heroImg from "../images/heroImg.png";

const DesktopHero = (props) => {
  return (
    <header className="desktop-header">
      <div className="hero-content">
        <p className="hero-content__title">
          <span>Whippyhomes</span>, your all-in-one property management
          platform.
        </p>
        <p className="hero-content__description">
          Be among our founding members and <span> join the waitlist!</span>
        </p>
        <Form data={props.data} />
      </div>
      <div className="hero-image__container">
        <div className="hero-image__container--effect1"></div>
        <div className="hero-image__container--effect2"></div>
        <img src={heroImg} alt="hero-image" />
      </div>
    </header>
  );
};

export default DesktopHero;
