"use client";
import CsvUploader from "@/app/components/upload-csv";
import { getTitle } from "@/app/utils/function";
import { logo } from "@/app/utils/svg";
import React from "react";

const page = () => {
  return (
   <>
   {getTitle("Load CSV | WMS")}
    <section className="bg-black h-screen py-20 flex flex-col overflow-y-auto">
      <div className=" flex justify-center w-full max-w-[840px]  gap-20 mx-auto flex-col items-center">
        <div>{logo}</div>
        <div className="w-full h-auto flex flex-col">
          <h1 className="text-white text-center ibm-regular pb-16 font-normal ibm-regular text-[60px] leading-none">
            LOAD CSV
          </h1>
          <div className="w-full max-w-[1062px] h-full max-h-[284px] container-color">
          
             <CsvUploader/>
           
          </div>
        </div>
      </div>
    </section>
   </>
  );
};

export default page;
