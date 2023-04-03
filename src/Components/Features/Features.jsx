import Feature from "./Feature";

import Button from "../Button/Button";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <p className="features-title">
        Experience hassle-free property management like never before with
        WhippyHomes.
      </p>
      <Feature className="feature1" />
      <Feature className="feature2" />
      <Button className="features-btn" />
    </section>
  );
};

export default Features;
