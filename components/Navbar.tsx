import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-end items-center text-black border-b border-gray-200 py-5 px-6">
      <div className="flex items-center gap-3">
        <div className="profile flex items-center">
          <FaRegUserCircle className="text-2xl mr-1" />
          <IoIosArrowDown />
        </div>
        <div className="flex items-center">
          <span>En </span>
          <span>
            <IoIosArrowDown className="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
