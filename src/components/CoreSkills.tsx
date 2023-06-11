import NameCode from "./NameCode";
import jsLogo from "../assets/JavaScript-logo.png";
import reactLogo from "../assets/React-icon.svg.png";
import nextLogo from "../assets/next-js-icon-logo-EE302D5DBD-seeklogo.com.png";
import htmllogo from "../assets/html5-logo-html-logo-0.png";
import csslogo from "../assets/CSS3_logo_and_wordmark.svg.png";
import dotnetLogo from "../assets/NET_Core_Logo.svg.png";
import Tilt from "react-parallax-tilt";
const CoreSkills = () => {
	return (
		<Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
			<div className="relative scale-90 flex gap-1  md:gap-5  flex-col p-2 md:p-6 aspect-video shadow bg-[#ffffff2d] backdrop-blur-sm border-l-[0.1px] border-t-[1px] rounded-lg">
				<NameCode />

				<div className="relative grid grid-cols-2 h-max gap-2  shadow-md hover:z-50 border border-transparent hover:border-white hover:scale-110 transition-all p-2 pt-8 md:p-4 md:pt-8   bg-[#252525] rounded-lg">
					<div className="absolute flex gap-2 right-2 top-2">
						<span className="aspect-square w-4 bg-green-500 rounded-full"></span>
						<span className="aspect-square w-4 bg-yellow-500 rounded-full"></span>
						<span className="aspect-square w-4 bg-red-500 rounded-full"></span>
					</div>
					<div className="bg-white flex gap-4 rounded-md justify-center items-center h-[60px] p-2 ">
						<img src={reactLogo} className="w-10 " alt="" />
						<span className="font-semibold">React</span>
					</div>
					<div className="bg-white flex gap-4 rounded-md justify-center items-center h-[60px] p-2 ">
						<img src={dotnetLogo} className="w-10 " alt="" />
						<span className="font-semibold">.Net Core</span>
					</div>
					<div className="bg-white flex gap-4 rounded-md justify-center items-center h-[60px] p-2 ">
						<img src={nextLogo} className="w-10 " alt="" />
						<span className="font-semibold">Next.js</span>
					</div>
					<div className="bg-white flex  gap-2 rounded-md justify-around items-center h-[60px] p-2 ">
						<img src={jsLogo} className="w-10 " alt="" />
						<span className="font-semibold">Javascript</span>
					</div>
					<div className="bg-white flex gap-4 rounded-md justify-center items-center h-[60px] p-2 ">
						<img src={htmllogo} className="w-10 " alt="" />
						<span className="font-semibold">Html</span>
					</div>
					<div className="bg-white flex gap-4 rounded-md justify-center items-center h-[60px] p-2 ">
						<img src={csslogo} className="w-10 " alt="" />
						<span className="font-semibold">CSS</span>
					</div>
				</div>
			</div>
		</Tilt>
	);
};

export default CoreSkills;
