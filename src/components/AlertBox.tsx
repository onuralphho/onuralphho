import { useAlertContext } from "../contexts/AlertProvider";
import { TiTick } from "react-icons/ti";
import { GiCancel } from "react-icons/gi";
const AlertBox = (props: any) => {



  return (
    <div
      
      className={`${props.isShown? "opacity-100 translate-y-0":"opacity-0 -translate-y-24"} ${props.message !=='Message could not be sent' ?"bg-green-500" :"bg-red-500"} transition-all duration-400 absolute w-fit z-40 top-2 left-0 right-0 m-auto  px-4 py-2 rounded-2xl shadow-lg shadow-[rgba(0,0,0,0.4)]`}
    >
      <div className="flex gap-1 items-center text-2xl text-white font-thin">
        {props.message}
        {props.message !=='Message could not be sent' ?<TiTick />:<GiCancel/>}
      </div>
    </div>
  );
};

export default AlertBox;
