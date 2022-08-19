import React from "react";
import { Contact } from "./Contact";
import { ContactHeader } from "./ContactHeader";

export const Contacts = () => {
  return (
    <div className="  flex flex-[0.3] flex-col h-screen  border border-r border-zinc-400 ">
      <ContactHeader />
      <div className="flex-[1] overflow-auto">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
};
