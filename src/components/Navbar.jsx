import React from "react";
import logo from "../images/amexlogo.png"
import search from "../images/search.png"

function Navbar() {
  return (
    <div className="h-16 bg-blue-200 flex justify-between pl-24 pr-24">
      <div className="flex-1 flex justify-start items-center">
        <img src={logo} alt="logo" className="h-10 w-auto" /> 
        <div className="mr-4 pl-4">My Account</div>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <img src={search} alt="search" className="h-10 w-auto pr-4" />
        <div className="mr-4">Help</div>
        <div className="mr-4">Login</div>
      </div>
    </div>
  );
}

export default Navbar;
