import PageShift from "../PageShift";
import profilePicture from "../../assets/profile.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CoreSkills from "../CoreSkills";


const Info = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.1 });
	const pictureVariants = {
		visible: { opacity: 1, transition: { duration: 0.7 }, x: 0 },
		hidden: { opacity: 0, x: -50 },
	};
	const skillsVariants = {
		visible: { opacity: 1, transition: { duration: 0.7 }, x: 0 },
		hidden: { opacity: 0, x: 50 },
	};

	const [selfInfo, setSelfInfo] = useState([
		{ text: "Developer", color: "#9333ea" },
		{ text: "Engineer", color: "#d97706" },
		{ text: "Designer", color: "#16a34a" },
	]);
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.stop();
		}
	}, [controls, inView]);
	return (
		<div
			id="section1"
			className="flex flex-col relative  gap-2 md:pt-28  h-[100svh] max-h-[1080px]  w-full pt-20 p-10 bg-gradient-to-tr   from-red-500 to- shadow-[rgba(0,0,0,1)] shadow-2xl">
			<motion.div
				ref={ref}
				variants={skillsVariants}
				initial="hidden"
				animate={controls}
				className="flex gap-2 justify-start items-center md:pl-60 flex-wrap">
				<span className="text-4xl md:text-7xl font-bold text-white ">Hi, I'm </span>
				<span className="flex flex-col gap-7 md:gap-10 font-bold h-20   md:h-28 overflow-hidden">
					{selfInfo.map((i, index) => (
						<span
							key={index}
							style={{ color: i.color }}
							className={` text-6xl md:text-8xl toast `}>
							{" "}
							{i.text}
						</span>
					))}
				</span>
			</motion.div>

			<div
				className="flex relative w-full gap-3 lg:gap-40 max-md:flex-col  max-md:items-center items-center md:justify-around md:px-40"
				style={{ zIndex: "2" }}>
				<motion.div
					ref={ref}
					variants={pictureVariants}
					initial="hidden"
					animate={controls}
					className="flex  flex-col items-center gap-10 ">
					<LazyLoadImage
						src={profilePicture}
						alt="profile picture of author"
						width={400}
						height={400}
						className="max-md:hidden  rounded-full max-md:max-w-[150px] shadow-lg shadow-[rgba(0,0,0,0.5)]"
					/>
				</motion.div>
				<div className="absolute inset-0 m-auto w-40 h-0.5 bg-white">
					<div className="absolute w-3 aspect-square bg-white rounded-full -left-1 -top-[3px]"></div>
				</div>
				<CoreSkills />
			</div>

			<PageShift way="down" info="Projects">
				section2
			</PageShift>
		</div>
	);
};

export default Info;
