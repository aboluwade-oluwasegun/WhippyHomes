import Form from "../Form/Form";
import waitlistImg from "./waitlistImg.png";

import "./WaitlistSection.css";
const WaitlistSection = () => {
  return (
    <section className="waitlistSection" id="waitlist">
      <div className="waitlist-image__container">
        <img src={waitlistImg} alt="waitlist Image" />
      </div>
      <div className="waitlist-content">
        <p className="waitlist-content__title">Join the Waitlist</p>
        <p className="waitlist-content__description">
          Join us today and take the first step towards stress-free property
          management
        </p>
        <Form />
      </div>
    </section>
  );
};

export default WaitlistSection;
