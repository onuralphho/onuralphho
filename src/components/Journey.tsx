import { FiArrowRight } from "react-icons/fi";
import PageShift from "./PageShift";
import mcDonalds from "../assets/mc.jpg";
import budgetApp from "../assets/Ekran görüntüsü 2023-02-25 163819.jpg";
import pokeDex from "../assets/Ekran görüntüsü 2023-02-25 164240.jpg";
import soChat from "../assets/soprahlog.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import { useState } from "react";
import profilesmall from '../assets/profile-small.jpg'

const PROJECTS_DATA = [
  {
    id: 1,
    name: "Burger App",
    pictureLink: mcDonalds,
    description:
      "The Burger App features a modern and responsive design, with a clean and intuitive interface that makes it easy for users to navigate and interact with. The app leverages the power of React to provide a seamless and efficient user experience, with minimal page reloading and instant updates as the user interacts with the app.",
    link: "dev",
  },
  {
    id: 2,
    name: "Budget App",
    pictureLink: budgetApp,
    description:
      "The Budget Tracker App features a clean and modern design, with intuitive navigation and a responsive layout that adapts seamlessly to any screen size. The app leverages the power of React to provide real-time updates as the user interacts with the app, with minimal page reloading and an intuitive user interface that makes it easy to add, edit, and delete transactions. ",
    link: "https://budget-app-ivory-two.vercel.app/",
  },
  {
    id: 3,
    name: "PokeDEX",
    pictureLink: pokeDex,
    description:
      "The Poke Dex App is a dynamic web application built using React, a popular JavaScript library for building dynamic user interfaces. The app allows users to explore the vast world of Pokemon by providing them with detailed information on every Pokemon in the series.",
    link: "https://poke-dex-rho.vercel.app/",
  },
  {
    id: 4,
    name: "SoChat",
    pictureLink: soChat,
    description:
      "SoChat is a modern web application built using React, a popular JavaScript library for building dynamic user interfaces. The app provides users with a real-time messaging platform, allowing them to connect with friends, family, and colleagues from anywhere in the world.",
    link: "https://sochat-one.vercel.app/",
  },
];

const Journey = () => {
  const [cardRotate, setCardRotate] = useState(0);

  return (
    <div
      id="section2"
      className="flex relative justify-center md:items-center h-[100svh] max-h-[1080px] w-full pt-20 p-10 bg-gradient-to-tr from-green-600  shadow-[rgba(0,0,0,1)] shadow-2xl"
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        className="mySwiper h-min p-3 lg:p-10"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          440: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {PROJECTS_DATA.map((project) => (
          <SwiperSlide
            key={project.id}
            className="card-main select-none my-auto max-w-fit lg:mx-auto relative mx-2 group "
          >
            <h2 className="card-name-tag z-20  group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[rgba(0,0,0,0.2)] transition-all  absolute backdrop-blur  lg:-top-8 lg:-left-10 text-[#252525] lg:text-2xl border-4 border-l-indigo-500 border-b-indigo-700 border-t-orange-400 border-r-orange-600 shadow-md shadow-[rgba(0,0,0,0.5)] font-bold  p-2 rounded-xl">
              {project.name}
            </h2>
            <a href={project.link !== 'dev'?project.link:''}>
            <div
              className={`card-inner ${
                cardRotate === project.id && "card-inner-rotate"
              }`}
            >
              <div
                className={`card-front transition-all opacity-100 ${
                  cardRotate === project.id && "opacity-0"
                }`}
              >
                <LazyLoadImage
                  className="rounded-2xl overflow-hidden"
                  width={300}
                  src={project.pictureLink}
                 
                />
              </div>

              <div
                className={`card-back w-full h-full transition-all bg-white absolute top-0 rounded-2xl pt-14 lg:pt-10 px-5 text-start opacity-0 ${
                  cardRotate === project.id && "opacity-100"
                }`}
              >
                <h2 className="font-bold text-xl max-lg:hidden">
                  {project.name}
                </h2>
                <p className="pl-3 pt-2 font-medium">{project.description}</p>
              </div>
            </div>
            </a>
            <button
              onClick={() => {
                if (cardRotate !== 0 && cardRotate === project.id) {
                  setCardRotate(0);
                } else {
                  setCardRotate(project.id);
                }
              }}
             
              className="absolute bottom-2 max-md:bg-gradient-to-bl from-green-500 right-2  lg:-bottom-3 px-2  lg:-right-4 text-[#252525] rounded-lg backdrop-blur-xl border-2 border-l-indigo-500 border-b-indigo-700 border-t-orange-400 border-r-orange-600 shadow-md shadow-[rgba(0,0,0,0.5)]"
            >
              <FiArrowRight color="" className=" w-7 h-7" />
              <span className="font-bold max-md:hidden absolute left-0 transition-all opacity-0 top-7 group-hover:opacity-100 group-hover:top-8 text-sm">
                Description
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <PageShift way="up" info="About Me">
        section1
      </PageShift>
      <PageShift way="down" info="Contact">
        section3
      </PageShift>
    </div>
  );
};

export default Journey;
