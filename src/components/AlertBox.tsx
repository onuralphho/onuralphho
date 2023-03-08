import { useAlertContext } from "../contexts/AlertProvider";
import { TiTick } from "react-icons/ti";
const AlertBox = (props: any) => {



  return (
    <div
      
      className={`${props.isShown? "opacity-100 translate-y-0":"opacity-0 -translate-y-24"} transition-all duration-400 absolute w-fit z-20 top-2 left-0 right-0 m-auto bg-green-500 px-4 py-2 rounded-2xl shadow-lg shadow-[rgba(0,0,0,0.4)]`}
    >
      <div className="flex gap-1 items-center text-2xl text-white font-thin">
        {props.message}
        <TiTick />
      </div>
    </div>
  );
};

export default AlertBox;
