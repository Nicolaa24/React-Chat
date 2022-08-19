import React from "react";
import { Contacts } from "./components/Contacts/Contacts";
import { DialogPanel } from "./components/Dialog/DialogPanel";

export const App = () => {
  return (
    <div className=" w-screen flex">
      <Contacts />
      <DialogPanel />
    </div>
  );
};
