import Header from "../components/Header";


const Layout = (props: any) => {
  return (
    <div className="">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className=" relative ">
        <Header />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
