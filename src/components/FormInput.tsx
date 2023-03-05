const FormInput = (props: any) => {
  return (
    <div className="relative  group  text-green-400">
      <input
        type={props.type}
        name={props.name}
        className="text-xl peer  invalid:border-red-600 p-3 bg-transparent   border-2 border-green-400 rounded-2xl outline-none"
        placeholder=" "
      />
      <label className="absolute transition-all duration-300 bg-stone-800 pointer-events-none text-lg  px-1 h-min left-5 peer-placeholder-shown:text-2xl -top-20  peer-focus:-top-20 peer-focus:text-lg peer-placeholder-shown:-top-6 font-bold my-auto  bottom-0 ">
        {props.label}
      </label>
      <p className="invisible peer-invalid:visible text-red-600 ">
        {props.invalid}
      </p>
    </div>
  );
};

export default FormInput;
