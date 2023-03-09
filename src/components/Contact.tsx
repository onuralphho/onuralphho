import PageShift from "./PageShift";
import { IoPaperPlane } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAlertContext } from "../contexts/AlertProvider";
import AlertBox from "./AlertBox";
import { sleep } from "../tools/sleep.js";

const Contact = () => {
  const alertCtx = useAlertContext();

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  const formVariants = {
    visible: { opacity: 1, transition: { duration: 0.7 }, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.stop();
    }
  }, [controls, inView]);

  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [isMessageSending, setIsMessageSending] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsMessageSending(true);
    const res = await fetch(
      `https://emailvalidation.abstractapi.com/v1/?api_key=9081505faa59489cafd0da471c6e98fb&email=${emailInput}`
    );
    const data = await res.json();

    if (emailInput.length > 0 && data.is_smtp_valid.value) {
      setErrorEmail(false);
      emailjs.sendForm(
        "service_8ke6iu1",
        "template_p4ynw24",
        e.target,
        "3XOVJs_SN-nTKAV6U"
      );
      setIsMessageSending(false);
      setEmailInput("");
      setMessageInput("");
      alertCtx?.setAlert({ shown: true, type: "Message Delivered" });
      await sleep(2000);
      alertCtx?.setAlert({ shown: false, type: "Message Delivered" });
    } else {
      setIsMessageSending(false);
      setErrorEmail(true);
      alertCtx?.setAlert({ shown: true, type: "Message could not be sent" });
      await sleep(2000);
      alertCtx?.setAlert({ shown: false, type: "Message could not be sent" });
    }
  };

  return (
    <>
      <AlertBox
        message={alertCtx?.alert.type}
        isShown={alertCtx?.alert.shown}
        closeBox={alertCtx?.setAlert}
      />
      <div
        id="section3"
        className="flex relative justify-center md:items-center h-[100svh] max-h-[1080px] w-full  pt-20 p-2  bg-gradient-to-tr from-red-600 shadow-[rgba(0,0,0,1)] shadow-2xl"
      >
        <motion.form
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={formVariants}
          onSubmit={handleSubmit}
          className="container h-max flex flex-col gap-3 rounded-3xl bg-stone-800 p-5 md:p-10 max-w-[1000px]  "
        >
          <h2 className="text-white font-extrabold text-2xl text-center">
            Onuralp the{" "}
            <span className="text-5xl md:text-5xl text-purple-600  ">
              Developer
            </span>
          </h2>
          <p className="text-white font-bold md:text-xl my-2 md:m-3 text-center">
            If you're looking for a reliable and skilled web developer to help
            bring your ideas to life, contact me here!
          </p>
          <div className="relative  group  text-green-400">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => {
                setErrorEmail(false);
                setEmailInput(e.target.value);
              }}
              name="email_from"
              className="text-xl peer w-full  invalid:border-red-600 p-3 bg-transparent   border-2 border-green-400 rounded-2xl outline-none"
              placeholder=" "
            />
            <label className="absolute transition-all duration-300 bg-stone-800 pointer-events-none text-lg  px-1 h-min left-5 peer-placeholder-shown:text-2xl -top-20  peer-focus:-top-20 peer-focus:text-lg peer-placeholder-shown:-top-6 font-bold my-auto  bottom-0 ">
              E-mail
            </label>
            <p
              className={`${
                !errorEmail ? "invisible" : "visible"
              }  peer-invalid:visible  text-red-600 `}
            >
              Please enter valid email
            </p>
          </div>

          <div className="relative  group  text-green-400">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => {
                setMessageInput(e.target.value);
              }}
              name="message"
              className="text-xl peer w-full  invalid:border-red-600 p-3 bg-transparent   border-2 border-green-400 rounded-2xl outline-none"
              placeholder=" "
            />
            <label className="absolute transition-all duration-300 bg-stone-800 pointer-events-none text-lg  px-1 h-min left-5 peer-placeholder-shown:text-2xl -top-20  peer-focus:-top-20 peer-focus:text-lg peer-placeholder-shown:-top-6 font-bold my-auto  bottom-0 ">
              Message
            </label>
            <p
              className={`invisible peer-invalid:visible ${
                !errorEmail && "visible"
              } text-red-600 `}
            >
              Please enter a message
            </p>
          </div>
          <button className="w-fit transition-all hover:bg-green-300 bg-green-400 text-3xl px-5 py-1 rounded-xl text-[#252525] font-bold flex gap-3">
            <span>Send</span>{" "}
            {isMessageSending ? (
              <span className="w-6 h-6 border-t-purple-600 border-t-[3px] border-r-[3px] border-r-transparent rounded-full   self-center animate-spin"></span>
            ) : (
              <IoPaperPlane size={24} className="self-center" />
            )}
          </button>
        </motion.form>

        <PageShift way="up" info="Projects">
          section2
        </PageShift>
      </div>
    </>
  );
};

export default Contact;
