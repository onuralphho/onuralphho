import PageShift from "./PageShift";
import { IoPaperPlane } from 'react-icons/io5';

const Contact = () => {

  const handleSubmit = (e:any) => {
    e.preventDefault()
    alert(e.target.current)
  }

  return (
    <div
      id="section3"
      className="flex relative justify-center md:items-center h-[100svh] max-h-[1080px] w-full  pt-20 p-2  bg-gradient-to-tr from-rose-500 shadow-[rgba(0,0,0,1)] shadow-2xl"
    >
      <form onSubmit={handleSubmit} className="container h-max flex flex-col gap-3 rounded-3xl bg-stone-800 p-5 md:p-10 max-w-[1000px]  ">
        <h2 className="text-white font-extrabold text-2xl text-center">Onuralp the <span className="text-5xl md:text-5xl text-purple-600  ">Developer</span></h2>
        <p className="text-white font-bold md:text-xl my-2 md:m-3 text-center">If you're looking for a reliable and skilled web developer to help bring your ideas to life, please don't hesitate to contact me.</p>
        <div className="relative  group  text-green-400">
          <input
            type="email"
            name="email_from"
            className="text-xl peer w-full  invalid:border-red-600 p-3 bg-transparent   border-2 border-green-400 rounded-2xl outline-none"
            placeholder=" "
          />
          <label className="absolute transition-all duration-300 bg-stone-800 pointer-events-none text-lg  px-1 h-min left-5 peer-placeholder-shown:text-2xl -top-20  peer-focus:-top-20 peer-focus:text-lg peer-placeholder-shown:-top-6 font-bold my-auto  bottom-0 ">
            E-mail
          </label>
          <p className="invisible peer-invalid:visible text-red-600 ">Please enter valid email</p>
        </div>

        <div className="relative  group  text-green-400">
          <input
            type="text"
            name="message"
            className="text-xl peer w-full  invalid:border-red-600 p-3 bg-transparent   border-2 border-green-400 rounded-2xl outline-none"
            placeholder=" "
            
          />
          <label className="absolute transition-all duration-300 bg-stone-800 pointer-events-none text-lg  px-1 h-min left-5 peer-placeholder-shown:text-2xl -top-20  peer-focus:-top-20 peer-focus:text-lg peer-placeholder-shown:-top-6 font-bold my-auto  bottom-0 ">
            Message
          </label>
          <p className="invisible peer-invalid:visible text-red-600 ">Please enter a message</p>
        </div>
       <button className="w-fit transition-all hover:bg-green-300 bg-green-400 text-3xl px-5 py-1 rounded-xl text-[#252525] font-bold flex gap-1"><span>Send</span> <IoPaperPlane size={25} className="self-center"/></button>
      </form>

      <PageShift way="up" info="Projects">
        section2
      </PageShift>
    </div>
  );
};

export default Contact;
