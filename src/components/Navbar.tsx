import { Github, Moon, Search } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full fixed pt-2  z-20 h-14 border-b border-b-line/20 ">
      <div className="absolute h-px w-full bg-line/20"></div>
      <div className="flex max-w-3xl px-4 h-full mx-auto justify-end items-center gap-3 relative">
        <div className="h-full w-px bg-line/20 absolute lg:left-0 left-2"></div>
        <div className="h-full w-px right-2 bg-line/20 absolute lg:right-0"></div>
        <div className="gap-3 hidden md:flex">
          <div className="font-bold cursor-pointer">Daifolio</div>
          <div className="text-line">Blog</div>
          <div className="text-line">Components</div>
        </div>
        <div className="bg-neutral-800 flex gap-1 rounded-2xl px-2 py-1 shadow-[1px_1px_2px_rgba(255,255,255,0.2)_inset,2px_2px_3px_rgba(255,255,255,0.2)_inset] items-center justify-center cursor-pointer">
          <Search width={16} color="#9fa0aa" />
          <button className="text-xs px-2 py-[2px] bg-neutral-500/20 text-line rounded-md text-center shadow-[1px_-1px_2px_rgba(255,255,255,0.2)_inset,2px_-2px_3px_rgba(255,255,255,0.2)_inset]">
            Ctrl K
          </button>
        </div>
        <div className="w-8 h-8 flex justify-center items-center hover:bg-line/20  rounded-full border border-line/20">
          <Github width={16} />
        </div>
        <div className="w-8 h-8 flex justify-center items-center hover:bg-line/20  rounded-full border border-line/20">
          <Moon width={16} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
