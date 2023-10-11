"use client";
import ProgressBar from "@/app/components/SemiCircleProgress";
import SemiCircleProgress from "@/app/components/SemiCircleProgress";
import AnimatedSVG from "@/app/components/animate-svg";
import React, { useState } from "react";

const page = () => {
  const [progressValue, setProgressValue] = useState(33);
  return (
<>

<div className="text-black pt-[42px] py-[186px] w-full bg-dash">
      <div className="container mx-auto ">
        <div className="grid grid-cols-4 rounded-xl border border-zinc-800">
          <div className="flex flex-col gap-4 my-8  border-r px-6 border-zinc-800 ">
            <p className="text-lg font-normal text-zinc-400">Current dataset</p>
            <p className="text-white text-xl ibm-regular"> Primary Brands</p>
          </div>
          <div className="flex justify-between my-8  items-end border-r px-6 border-zinc-800">
            <div className="flex flex-col gap-4  ">
              <p className="text-lg font-normal text-zinc-400 ibm-regular">Total Rows</p>
              <p className="text-white text-3xl tracking-[-0.75] digital-number-font font-normal"> 376</p>
            </div>
            <svg
              width={28}
              height={21}
              viewBox="0 0 28 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y={3}
                width={3}
                height={28}
                transform="rotate(-90 0 3)"
                fill="#27272A"
              />
              <rect
                y={9}
                width={3}
                height={28}
                transform="rotate(-90 0 9)"
                fill="#27272A"
              />
              <rect
                y={15}
                width={3}
                height={28}
                transform="rotate(-90 0 15)"
                fill="#27272A"
              />
              <rect
                y={21}
                width={3}
                height={28}
                transform="rotate(-90 0 21)"
                fill="#27272A"
              />
            </svg>
          </div>
          <div className="flex justify-between my-8  items-end  px-6 ">
            <div className="flex flex-col gap-4  ">
              <p className="text-lg font-normal text-zinc-400 ibm-regular">Total Columns</p>
              <p className="text-white text-3xl tracking-[-0.75] digital-number-font font-normal"> 742</p>
            </div>
            <svg
              width={28}
              height={21}
              viewBox="0 0 28 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y={3}
                width={3}
                height={28}
                transform="rotate(-90 0 3)"
                fill="#27272A"
              />
              <rect
                y={9}
                width={3}
                height={28}
                transform="rotate(-90 0 9)"
                fill="#27272A"
              />
              <rect
                y={15}
                width={3}
                height={28}
                transform="rotate(-90 0 15)"
                fill="#27272A"
              />
              <rect
                y={21}
                width={3}
                height={28}
                transform="rotate(-90 0 21)"
                fill="#27272A"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-4 border-r pt-4 px-8 items-center justify-center border-l border-zinc-800 ">
            <ProgressBar value={progressValue} />
          </div>
        </div>
      <AnimatedSVG/>

        <div className="grid grid-cols-6 gap-8 ">
          <div className="w-full px-4 py-[38px] background-info">
            <div className="flex flex-col gap-6  max-w-[96px] ">
              <span className="text-[40px] text-white leading-none digital-number-font">342</span>
              <p className="text-base text-zinc-400 break-words ibm-ibm-regular w-full max-w-[68px]">
                Missing Titles
              </p>
            </div>
          </div>
          <div className="w-full px-4 py-[38px] border-info">
            <div className="flex flex-col gap-6  max-w-[96px] ">
              <span className="text-[40px] text-white leading-none digital-number-font">342</span>
              <p className="text-base text-zinc-400 break-words w-full ibm-regular max-w-[140px]">
              Missing Desctiptions
              </p>
            </div>
          </div>
          <div className="w-full px-4 py-[38px] border-info">
            <div className="flex flex-col gap-6  max-w-[96px] ">
              <span className="text-[40px] text-white leading-none digital-number-font">342</span>
              <p className="text-base text-zinc-400 break-words w-full ibm-regular max-w-[140px]">
              Missing Categories
              </p>
            </div>
          </div>
          <div className="w-full px-4 py-[38px] border-info">
            <div className="flex flex-col gap-6  max-w-[96px] ">
              <span className="text-[40px] text-white leading-none digital-number-font">342</span>
              <p className="text-base ibm-regular text-zinc-400 break-words w-full max-w-[68px] ">
                Missing Titles
              </p>
            </div>
          </div>
          <div className="w-full px-4 py-[38px] border-info">
            <div className="flex flex-col gap-6  max-w-[96px] ">
              <span className="text-[40px] text-white leading-none digital-number-font">342</span>
              <p className="text-base ibm-regular text-zinc-400 break-words w-full max-w-[140px]">
              Missing Desctiptions
              </p>
            </div>
          </div>
          <div className="w-full px-4 py-[38px] border-info">
            <div className="flex flex-col gap-6  max-w-[96px] ">
              <span className="text-[40px] text-white leading-none digital-number-font">342</span>
              <p className="text-base ibm-regular text-zinc-400 break-words w-full max-w-[140px]">
              Missing Desctiptions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
};

export default page;
