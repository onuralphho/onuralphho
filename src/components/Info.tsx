import PageShift from "./PageShift";
import profilePicture from "../assets/profile.jpg";
import jsLogo from "../assets/JavaScript-logo.png";
import reactLogo from "../assets/React-icon.svg.png";
import nextLogo from "../assets/next-js-icon-logo-EE302D5DBD-seeklogo.com.png";
import htmllogo from "../assets/html5-logo-html-logo-0.png";
import csslogo from "../assets/CSS3_logo_and_wordmark.svg.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";


const Info = () => {
  const [selfInfo, setSelfInfo] = useState([
    { text: "Developer", color: "#9333ea" },
    { text: "Engineer", color: "#d97706" },
    { text: "Designer", color: "#16a34a" },
  ]);

  return (
    <div
      id="section1"
      className="flex flex-col relative  gap-10 md:justify-center   h-[100svh] max-h-[1080px]  w-full pt-20 p-10 bg-gradient-to-tr   from-[#161616] to- shadow-[rgba(0,0,0,1)] shadow-2xl"
    >
      <div className="flex gap-2 justify-start md:pl-60 flex-wrap">
        <span className="text-7xl font-bold text-white ">Hi, I'm </span>
        <span className="flex flex-col gap-7 md:gap-10 font-bold h-20 md:h-28 overflow-hidden">
          {selfInfo.map((i,index) => (
            <span key={index} style={{color:i.color}} className={` text-6xl md:text-8xl toast ` }> {i.text}</span>
          ))}
        </span>
      </div>

      <div
        className="flex w-full gap-3 lg:gap-60 max-md:flex-col  max-md:items-center items-center md:justify-evenly md:px-40"
        style={{ zIndex: "2" }}
      >
        <div className="flex flex-col items-center gap-10">
          <LazyLoadImage
            src={profilePicture}
            alt="profile picture of author"
            width={400}
            height={400}
            className=" h-auto max-w-[150px] md:max-w-md rounded-full shadow-lg shadow-[rgba(0,0,0,0.5)]"
            placeholder={
              <div className="h-40 w-40 shadow-lg shadow-black "><img src="" alt="" /></div>
            }
          />
         
        </div>
        <div className="flex flex-col max-md:flex-col-reverse items-center gap-20 max-md:gap-6">
          <div className=" astroid-wrapper text-red-500 text-center relative border border-red-500 h-fit w-fit px-2  md:p-5 rounded-full shadow-xl  ">
            <span>Core Skills</span>
            <img
              draggable="false"
              className="astroid max-md:w-14"
              src={reactLogo}
              alt=""
            />
            <img draggable="false" className="astroid max-md:w-14" src={nextLogo} alt="" />
            <img draggable="false" className="astroid max-md:w-14" src={jsLogo} alt="" />
            <img draggable="false" className="astroid max-md:w-14" src={csslogo} alt="" />
            <img draggable="false" className="astroid max-md:w-14" src={htmllogo} alt="" />
          </div>
          <div className="max-md:w-[300px] w-[400px]">
          <code className="text-white flex flex-col text-start md:text-2xl typewriter">
            <h1 className="max-w-fit ">
              <span className="text-blue-600">{"<h1 id='name'>"}</span> <br />
            </h1>
            <h1 className="max-w-fit pl-5">
              <span>Onuralp Hacıhamzaoğlu</span>
              <br />
            </h1>
            <h1 className="max-w-fit">
              <span className="text-blue-600">{" </h1>"}</span>
            </h1>
          </code></div>
          <div className="w-full h-full">
            <code>{/* {"<h2 id=''></h2>"} */}</code>
          </div>
        </div>
      </div>

      <PageShift way="down" info="Projects">
        section2
      </PageShift>
    </div>
  );
};

export default Info;
