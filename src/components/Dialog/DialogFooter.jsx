import React from "react";
import { IoMdSend } from "react-icons/io";

export const DialogFooter = () => {
  return (
    <div className="items-center w-full bg-slate-100">
      <div className=" m-5 flex flex-row">
        <input
          className="p-1 rounded-xl w-full mx-3 outline-none"
          placeholder="Type your message"
        />
        <button className="cursor-pointer  ">
          <IoMdSend size={24} />
        </button>
      </div>
    </div>
  );
};
