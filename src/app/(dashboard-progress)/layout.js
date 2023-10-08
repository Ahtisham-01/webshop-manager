import React from "react";
import { dashboardlogo, logo } from "../utils/svg";
import ButtonPrimary from "../components/reuseableUI/ButtonPrimary";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full flex justify-between items-center border-b border-zinc-800 bg-black">
        <div className="py-11 px-8 border-r border-zinc-800">{dashboardlogo}</div>
        <div>
          <span className="text-white">WEBSHOP MANAGER</span>
        </div>
        <div className="flex">
          <div className="py-5 px-7  border-l border-zinc-800">
            <ButtonPrimary text="stop" />
          </div>
          <div className="py-5 px-7  border-l border-zinc-800">
            <ButtonPrimary text="pause"  />
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
