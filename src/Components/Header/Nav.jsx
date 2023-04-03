import companyImg from "./company-logo.svg";

import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <img src={companyImg} alt="company-logo" />
    </nav>
  );
};
export default Nav;