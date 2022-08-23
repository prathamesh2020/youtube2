import React from "react";
import { AiOutlineHome, AiFillGift } from "react-icons/ai";
import { MdQueue } from "react-icons/md";
import Hero from "../ss/Test";

function Sidebar({ isOpen }) {
  isOpen = true;
  return (
    <div className="flex">
      <div
        className={`mt-10 z-50 fixed bg-ytube-darker h-screen duration-300 ${
          isOpen ? "w-72" : "w-[4rem] space-y-4 f"
        } transition min-w-13 flex flex-col `}
      >
        <button
          className={`flex ${
            isOpen ? "flex-row p-5 " : "flex-col"
          } hover:bg-ytube-darkest p-3  `}
        >
          <AiOutlineHome className="text-2xl self-center" />
          <p className="text-xs self-center px-4">Home</p>
        </button>
        <button
          className={`flex ${
            isOpen ? "flex-row p-5 " : "flex-col"
          } hover:bg-ytube-darkest p-3`}
        >
          <AiFillGift className="text-2xl self-center" />
          <p className="text-xs self-center px-4">Subscribe</p>
        </button>
        <button
          className={`flex ${
            isOpen ? "flex-row p-5 " : "flex-col"
          } hover:bg-ytube-darkest p-3`}
        >
          <MdQueue className="text-2xl self-center" />
          <p className="text-xs self-center px-4">Library</p>
        </button>
      </div>
      <Hero />
    </div>
  );
}

export default Sidebar;

//w-72 or w-20
