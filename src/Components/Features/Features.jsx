import Feature from "./Feature";
import featureImg1 from "./featureImg1.png";
import featureImg2 from "./featureImg2.png";
import { Link } from "react-scroll";
// import Button from "../Button/Button";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <p className="features-title">
        Experience hassle-free property management like never before with
        WhippyHomes.
      </p>
      <Feature className="feature1" img={featureImg1} />
      <Feature className="feature2" img={featureImg2} />
      <li className="feature-btn">
        <Link
          to="#waitlist"
          spy={true}
          offset={50}
          smooth={true}
          duration={500}
        >
          Join The WaitList
        </Link>
      </li>
    </section>
  );
};

export default Features;
