import companyImg from "../../assets/svg/company-logo.svg";
import "./styles.scss";

const Nav = () => {
  return (
    <nav>
      <img src={companyImg} alt="company-logo" />
    </nav>
  );
};
export { Nav };
