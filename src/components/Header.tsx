import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiFiverr } from "react-icons/si";
import { useScroll } from "../hooks/useScroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import profilePicture from "../assets/profile.jpg";
const Header = () => {
	return (
		<header
			id="navbar"
			className="flex justify-between p-4 absolute z-10  w-full bg-transparent   transition-all">
			<ul className="flex gap-4 ">
				<li>
					<a target="_blank" href="https://github.com/onuralphho/">
						<LazyLoadImage
							src={profilePicture}
							alt="profile picture of author"
							width={35}
							height={35}
							className="  rounded-full md:hidden max-md:max-w-[35px] "
						/>
						<BsGithub color="white" className="social-icon max-md:hidden" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://www.fiverr.com/onuralphho61/create-responsive-react-web-apps-for-you">
						<SiFiverr color="#1dbf73" className="social-icon" />
					</a>
				</li>
				<li style={{ background: "white", borderRadius: "10px", height:"max-content" }}>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/onuralp-hacihamzaoglu-283a18175/">
						<BsLinkedin color="#0a66c2" className="social-icon " />
					</a>
				</li>
			</ul>
			<div className="flex text-white font-bold items-center text-sm md:text-2xl gap-2 ">
				<span
					className="cursor-pointer hover:text-purple-300 transition-all"
					onClick={() => {
						useScroll("section1");
					}}>
					About
				</span>
				<span>/</span>
				<span
					className="cursor-pointer hover:text-purple-300 transition-all"
					onClick={() => {
						useScroll("section2");
					}}>
					Projects
				</span>
				<span>/</span>
				<span
					className="cursor-pointer hover:text-purple-300 transition-all"
					onClick={() => {
						useScroll("section3");
					}}>
					Contact
				</span>
			</div>
		</header>
	);
};

export default Header;
