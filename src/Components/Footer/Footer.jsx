import "./Footer.css";
import facebook from "./facebook.svg";
import whatsapp from "./whatsapp.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

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
          <a
            href="https://www.facebook.com/profile.php?id=100091771032107"
            target="blank"
          >
            <img src={facebook} alt="Facebook Logo" />
          </a>
        </li>
        <li className="socials-links">
          <a>
            <img src={whatsapp} alt="Whatsapp Logo" />
          </a>
        </li>
        <li className="socials-links">
          <a
            href="https://twitter.com/whippy_homes?s=11&t=-6UFfNgpBnah3dBjCtcwtQ"
            target="blank"
          >
            <img src={twitter} alt="Twitter Logo" />
          </a>
        </li>
        <li className="socials-links">
          <a
            href="https://instagram.com/whippyhomes?igshid=YmMyMTA2M2Y"
            target="blank"
          >
            <img src={instagram} alt="Instagram Logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
