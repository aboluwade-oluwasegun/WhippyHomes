import Form from "../Form/Form";
import waitlistImg from "./waitlistImg.png";
import Logo from "../images/company-logo.svg";

import "./WaitlistSection.css";
const WaitlistSection = () => {
  return (
    <section className="waitlistSection">
      <div className="waitlist-image__container">
        <img src={waitlistImg} alt="waitlist Image" />
      </div>
      <div className="waitlist-content">
        <div className="waitlist-header">
          <p className="waitlist-content__title">
            <img src={Logo} alt="Company Logo" /> Join the Waitlist
          </p>
          <p className="waitlist-content__description">
            Join us today and take the first step towards stress-free property
            management
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default WaitlistSection;
