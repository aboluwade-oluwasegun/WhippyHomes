import Feature1 from "./Feature1";
import Feature2 from "./Feature2";

import Button from "../Button/Button";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <p className="features-title">
        Experience hassle-free property management like never before with
        WhippyHomes.
      </p>
      <Feature1 className="feature1" value={1} />
      <Feature2 className="feature2" value={2} />
      <Button className="features-btn" />
    </section>
  );
};

export default Features;
