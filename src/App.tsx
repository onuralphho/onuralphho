import "./App.css";
import createScrollSnap from "scroll-snap";
import { useRef } from "react";
import Info from "./components/Info";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

function App() {
  const ref = useRef(null);

  return (
    <div className="main-container overflow-x-hidden overflow-y-scroll h-screen mx-auto max-w-[1920px] flex flex-col gap-56">
      <div className="main-item h-screen">
        <Info />
      </div>
      <div className="main-item h-screen">
        <Journey />
      </div>
      <div className="main-item h-screen">
        <Contact/>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
