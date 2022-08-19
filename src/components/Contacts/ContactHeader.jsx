import React from "react";

import { FiSearch } from "react-icons/fi";

export const ContactHeader = () => {
  return (
    <div className="border-b  border-zinc-400 h-[25%]  bg-slate-100">
      <div className="border-2 border-zinc-500 border-current w-[60px] h-[60px] rounded-full mt-4 ml-5"></div>

      <div className="flex-[1] items-center flex flex-row p-2  rounded-xl relative m-3 mt-5 bg-white">
        <span className="bg-white  rounded-xl">
          <FiSearch size={23} className="" />
        </span>

        <input
          className="w-[90%] flex-[1]  outline-none  placeholder:pl-9  "
          placeholder="Search or start new chat"
        />
      </div>
    </div>
  );
};
