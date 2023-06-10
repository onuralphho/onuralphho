import "./App.css";
import createScrollSnap from "scroll-snap";
import { useRef } from "react";
import Info from "./components/sections/Info";
import Journey from "./components/sections/Journey";
import Contact from "./components/sections/Contact";

function App() {
  const ref = useRef(null);

  return (
    <div className="main-container  overflow-x-hidden overflow-y-scroll h-screen mx-auto max-w-[1920px] flex flex-col  gap-36">
      <div className="main-item h-screen">
        <Info />
      </div>
      <div className="main-item h-screen">
        <Journey />
      </div>
      <div className="main-item h-screen">
        <Contact/>
      </div>
      <div className="">
        
      </div>
    </div>
  );
}

export default App;
