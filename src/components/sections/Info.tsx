import PageShift from "../PageShift";
import profilePicture from "../../assets/profile.jpg";
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
				className="flex gap-2  justify-start items-center md:pl-60 flex-wrap">
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
				className="flex relative w-full gap-3  max-md:flex-col  max-md:items-center items-center md:justify-around"
				style={{ zIndex: "2" }}>
				<motion.div
					ref={ref}
					variants={pictureVariants}
					initial="hidden"
					animate={controls}
					className="flex  flex-col items-center gap-10 ">
					<img
						src={profilePicture}
						alt="profile picture of author"
						width={400}
						height={400}
						className="max-md:hidden  rounded-full max-md:max-w-[150px] shadow-lg shadow-[rgba(0,0,0,0.5)]"
					/>
				</motion.div>

				{/* Timeline */}
				<div className="max-md:hidden absolute inset-0 left-20 my-auto w-[1400px] -z-10 h-0.5 bg-white">
					<div className="hover:w-4 group transition-all absolute w-3 aspect-square bg-white rounded-full -left-1 -top-[4px]">
						<div className="group-hover:opacity-100 text-white text-xl font-semibold absolute left-0 top-2">{2019}</div>

					</div>
					<div className="hover:w-4 group transition-all absolute w-3 aspect-square bg-white rounded-full left-[800px] -top-[4px]">
						<div className="group-hover:opacity-100 text-white text-xl font-semibold absolute  top-2">{new Date().getFullYear()	}</div>

					</div>
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
