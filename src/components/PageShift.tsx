import { SlArrowDown,SlArrowUp } from "react-icons/sl";
import { useScroll } from "../hooks/useScroll";
import { useState } from "react";

const PageShift = (props:any) => {
  const [showInfo, setShowInfo]= useState(false)

  return (
    <button
      onMouseEnter={() => {
        setShowInfo(true)
      }}
      onMouseLeave={() => {
        setShowInfo(false)
      }}
      
      onClick={() => {
        useScroll(props.children);
      }}
      className={`absolute z-20 max-w-fit m-auto left-0 right-0 group  border p-1  md:p-2 rounded-full flex items-center justify-center md:opacity-40 hover:opacity-80 transition-all  ${props.way === 'up'?'max-md:bottom-10 md:top-0 mt-2':'bottom-0 mb-2'}`}
    >
      {props.way ==='up' ?<SlArrowUp color="white" className=" md:mb-3 w-20 h-5 md:w-20 md:h-20 max-md:opacity-0 " />:
      <SlArrowDown color="white" className=" md:mt-3 w-20 h-5 md:w-20 md:h-20 max-md:opacity-0" />}
      <span className="absolute text-white md:text-3xl md:opacity-0 group-hover:md:translate-x-32 whitespace-pre z-0 group-hover:md:opacity-100 duration-300">{props.info}</span>
    </button>
  );
};

export default PageShift;
