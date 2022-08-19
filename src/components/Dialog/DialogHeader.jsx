import React from "react";

export const DialogHeader = () => {
  return (
    <div className="flex justify-between flex-row  w-full items-center border-b  border-zinc-400 ">
      <div className="flex flex-row  items-center m-6 p-2">
        <span className="mx-3">Avatar</span>
        <h5 className="text-xs ">Offline</h5>
        <h4 className="mx-3 text-xl font-bold text-gray-500">Alica Freeman</h4>
      </div>
    </div>
  );
};
