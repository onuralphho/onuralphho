import PageShift from "./PageShift";

const Contact = () => {
  return (
    <div
      id="section3"
      className="flex relative justify-center md:items-center h-[100svh] max-h-[1080px] w-full  pt-20 p-10 bg-[#252525] shadow-[rgba(0,0,0,1)] shadow-2xl"
    >
        <div className="absolute bg-white left-0 top-[140px] h-56 lg:h-72 w-full">

        

        </div>


      <PageShift way="up" info="About Me">
        section2
      </PageShift>
    </div>
  );
};

export default Contact;
