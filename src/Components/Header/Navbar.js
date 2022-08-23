import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdVideoLabel } from "react-icons/md";
import Hero from "../ss/Test";
import Sidebar from "./SideMenuBar";

function Navbar() {
  const [open, setOpen] = useState(true);
  return (
    <div className="">
      <div className="bg-ytube-darker min-h-5 flex  p-3 justify-between z-10 w-screen fixed">
        <div className="flex ">
          <AiOutlineMenu
            className=" text-white text-2xl hover:text-gray-300 mx-2"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <MdVideoLabel className="text-2xl mx-3" />
          <h1 className="text-white">Meetoob</h1>
        </div>

        <div className="bg-ytube-darkest mx-48 px-48 self-center text-white">
          <h1>Search</h1>
        </div>

        <div className="text-white">Accounts</div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Navbar;
