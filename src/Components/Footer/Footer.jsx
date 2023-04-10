import facebook from "../../assets/svg/facebook.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import twitter from "../../assets/svg/twitter.svg";
import instagram from "../../assets/svg/instagram.svg";
import "./styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <p>All Rights Reserved</p>
        <p>&copy; 2023</p>
      </div>
      <div className="company-name">
        <p>WhippyHomes</p>
      </div>

      <ul className="socials-navigation">
        <li className="socials-links">
          <a>
            <img src={facebook} alt="img1" />
          </a>
        </li>
        <li className="socials-links">
          <a>
            <img src={whatsapp} alt="img1" />
          </a>
        </li>
        <li className="socials-links">
          <a>
            <img src={twitter} alt="img1" />
          </a>
        </li>
        <li className="socials-links">
          <a>
            <img src={instagram} alt="img1" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
