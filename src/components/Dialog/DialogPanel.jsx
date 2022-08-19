import React from "react";
import { Dialog } from "./Dialog";
import { DialogFooter } from "./DialogFooter";
import { DialogHeader } from "./DialogHeader";

export const DialogPanel = () => {
  return (
    <div className=" flex flex-[0.7] flex-col h-screen w-screen bg-slate-200 border border-l">
      <DialogHeader />
      <div className="flex-[1]  overflow-auto bg-white">
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
      </div>
      <DialogFooter />
    </div>
  );
};
