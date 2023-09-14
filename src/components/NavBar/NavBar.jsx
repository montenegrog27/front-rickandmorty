import React from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import Portada from "../Portada/Portada";
function NavBar(props) {
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 ">
        <div className=" top-0 justify-around w-full  grid grid-cols-2">
          <div className="">
            <Portada />
          </div>
          <div className="flex space-x-4 p-2">
            <Link
              to="/home"
              className="bg-green-500 rounded-lg h-10 w-[80px] text-center p-1 text-white text-lg font-semibold hover:bg-green-600"
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className="bg-green-500 rounded-lg h-10 w-[80px] text-center p-1 text-white text-lg font-semibold hover:bg-green-600"
            >
              Fav
            </Link>
            <Link
              to="/about"
              className="bg-green-500 rounded-lg h-10 w-[80px] text-center p-1 text-white text-lg font-semibold hover:bg-green-600"
            >
              About
            </Link>
            <Link
              to="/"
              className="bg-green-500 rounded-lg h-10 w-[80px] text-center p-1 text-white text-lg font-semibold hover:bg-green-600"
              onClick={handleSignOut}
            >
              Logout
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default NavBar;
