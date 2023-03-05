import { BsGithub,BsLinkedin } from "react-icons/bs";
import { SiFiverr } from "react-icons/si";
const Header = () => {
  return (
    <header id="navbar" className="p-4 absolute z-10  w-full bg-transparent   transition-all">
      <ul className="flex gap-4 ">
        <li>
          <a href="https://github.com/Porpos/">
            <BsGithub color="white" className="social-icon"  />
          </a>
        </li>
        <li>
            <a href="https://www.fiverr.com/onuralphho61/create-responsive-react-web-apps-for-you">
                <SiFiverr color="#1dbf73" className="social-icon" />
            </a>
        </li>
        <li style={{background:'white',borderRadius:'20px'}}><a  href="https://www.linkedin.com/in/onuralp-hac%C4%B1hamzao%C4%9Flu-283a18175/"><BsLinkedin color="#0a66c2"  className="social-icon "/></a></li>
      </ul>
    </header>
  );
};

export default Header;
