import React from "react";

export const Contact = () => {
  return (
    <div className="flex flex-row justify-between items-center p-5  w-full border-b border-1 border-slate-100 border-current hover:bg-slate-200  cursor-pointer">
      <div className="flex flex-row items-center">
        <div className="flex relative">
          <span className="mx-4">Avatar</span>
          <span className="absolute top-5 left-4">Offline</span>
        </div>

        <div className="flex flex-col mx-3">
          <h3 className="mb-1">Aliva Freeman</h3>
          <p className="text-zinc-400 ">Last message</p>
        </div>
      </div>

      <div className="text-sm text-zinc-500 ">19/08/2022 15:12</div>
    </div>
  );
};
