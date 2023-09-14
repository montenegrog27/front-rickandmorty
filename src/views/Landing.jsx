import { Link } from "react-router-dom";
import LogoRM from "../assets/logo.png";

function Landing() {
  return (
    <div className="bg-aqua h-650 mt-10 flex justify-center items-center flex-col text-center">
      <img src={LogoRM} alt="" className="mt-160 w-550" />

      <Link
        to="/home"
        className=" mt-10 bg-green-600 items-center flex justify-center px-3 rounded-xl text-decoration-none font-bold text-[rgb(32,32,32)] font-[Franklin Gothic Medium] transition duration-200  h-[60px]"
      >
        INGRESAR
      </Link>
    </div>
  );
}

export default Landing;
