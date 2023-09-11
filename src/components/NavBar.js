import React from "react";


import { FaMap } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";

function NavBar() {
  return (
    <div className="navBar">
        <div className='logo'>
          <FaCircleUser size={40} color="#000" />
        </div>
      <div className='icons'>
        <div className='icon-1'> 
          <FaMap size={40} color="#F3980E" />
        </div>
        <div className='icon-2'>
          <FaTrophy size={40} color="#F3980E" />
        </div>
        <div className='icon-3'>
          <FaStar size={40} color="#F3980E" />
        </div>
      </div>
    </div>
  );
}
export default NavBar;

