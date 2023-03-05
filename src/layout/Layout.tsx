import Header from "../components/Header";
import cssLogo from "../assets/CSS3_logo_and_wordmark.svg.png";
import htmlLogo from "../assets/html5-logo-html-logo-0.png";
import jsLogo from "../assets/JavaScript-logo.png";
import reactLogo from "../assets/React-icon.svg.png";
import nextLogo from "../assets/next-js-icon-logo-EE302D5DBD-seeklogo.com.png";

const Layout = (props: any) => {
  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className=" relative ">
        <Header />
        {props.children}
      </div>
    </>
  );
};

export default Layout;
