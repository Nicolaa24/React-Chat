import React from "react";

export const Dialog = () => {
  return (
    <div className="flex justify-start">
      <div className="flex items-center p-3 w-fit m-3">
        <p className="mx-4">Avatar</p>
        <div className="mx-4">
          <p className="bg-slate-500 text-white rounded-3xl  p-3">
            Message text for testing
          </p>
          <p className=" text-xs text-gray-400  mt-2">19/08/2022 15:56</p>
        </div>
      </div>
    </div>
  );
};
