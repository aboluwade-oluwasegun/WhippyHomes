import Feature from "./Feature";
import featureImg1 from "./featureImg1.png";
import featureImg2 from "./featureImg2.png";
import Button from "../Button/Button";
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

      <Button className="navigation-btn" click="click" />
    </section>
  );
};

export default Features;
