import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
const NavBar = () => {
  const {token}= useAppContext()
  return (
    <div className="flex py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer  items-center justify-between">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-32 sm:w-44 " />
      </Link>
     
        <Link to='/admin' className="rounded-full bg-blue-500 hover:bg-blue-700 hover:scale-105 py-2.5 px-10 text-white flex items-center gap-2  text-sm ">{token? 'Dashboard':'Login'}
          <img src={assets.arrow} alt="arrow" width={14}/>
        </Link>
    
    </div>
  );
};

export default NavBar;
