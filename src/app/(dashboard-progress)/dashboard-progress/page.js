"use client";
import ProgressBar from "@/app/components/SemiCircleProgress";
import SemiCircleProgress from "@/app/components/SemiCircleProgress";
import React, { useState } from "react";

const page = () => {
  const [progressValue, setProgressValue] = useState(33);
  return (
<>

<div className="text-black pt-[42px] py-[186px] w-full">
      <div className="container mx-auto ">
        <div className="grid grid-cols-4 rounded-xl border border-zinc-800">
          <div className="flex flex-col gap-4 py-8  border-r px-6 border-zinc-800 ">
            <p className="text-lg font-normal text-zinc-400">Current dataset</p>
            <p className="text-white text-xl ibm-regular"> Primary Brands</p>
          </div>
          <div className="flex justify-between py-8  items-end border-r px-6 border-zinc-800">
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
          <div className="flex justify-between py-8  items-end border-r px-6 border-zinc-800">
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
          <div className="flex flex-col gap-4 border-r pt-4 px-8 items-center justify-center border-zinc-800 ">
            <ProgressBar value={progressValue} />
          </div>
        </div>
        <svg
        className="container mx-auto"
          width={1114}
          height={228}
          viewBox="0 0 1114 228"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M442 0V54C442 89.8985 412.899 119 377 119H279C245.863 119 219 145.863 219 179V202"
            stroke="#A1A1AA"
          />
          <path d="M442 0L442 202" stroke="#A1A1AA" />
          <path
            d="M442 0V59C442 92.1371 468.863 119 502 119H821C865.183 119 901 154.817 901 199V202"
            stroke="#A1A1AA"
          />
          <path
            d="M442 0V59C442 92.1371 468.863 119 502 119H1033C1077.18 119 1113 154.817 1113 199V202"
            stroke="#A1A1AA"
          />
          <path
            d="M442 0V55C442 90.3462 413.346 119 378 119H100C55.8172 119 20 154.817 20 199V202"
            stroke="url(#paint0_linear_25_621)"
            strokeWidth={2}
          />
          <g filter="url(#filter0_diii_25_621)">
            <path
              d="M19.994 202C23.3044 202 25.9881 204.684 25.9881 207.994C25.9881 211.304 23.3044 213.988 19.994 213.988C16.6836 213.988 14 211.304 14 207.994C14 204.684 16.6836 202 19.994 202Z"
              fill="black"
            />
            <path
              d="M19.994 203.397C22.5332 203.397 24.5915 205.455 24.5915 207.994C24.5915 210.533 22.5332 212.592 19.994 212.592C17.4549 212.592 15.3965 210.533 15.3965 207.994C15.3965 205.455 17.4549 203.397 19.994 203.397Z"
              stroke="white"
              strokeWidth="2.79309"
            />
          </g>
          <g filter="url(#filter1_f_25_621)">
            <path
              d="M167 118.757C167 117.796 167.795 117.025 168.756 117.056L230 119L168.743 120.459C167.787 120.481 167 119.713 167 118.757Z"
              fill="#86EFAC"
            />
          </g>
          <path
            d="M167 118.757C167 117.796 167.795 117.025 168.756 117.056L230 119L168.743 120.459C167.787 120.481 167 119.713 167 118.757Z"
            fill="#86EFAC"
          />
          <defs>
            <filter
              id="filter0_diii_25_621"
              x="0.0345364"
              y="188.035"
              width="39.919"
              height="39.919"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="6.98273" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.395098 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_25_621"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_25_621"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="6.98273" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2={-1}
                k3={1}
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_25_621"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="9.31031" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2={-1}
                k3={1}
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_25_621"
                result="effect3_innerShadow_25_621"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2.32758" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2={-1}
                k3={1}
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_25_621"
                result="effect4_innerShadow_25_621"
              />
            </filter>
            <filter
              id="filter1_f_25_621"
              x={165}
              y="115.055"
              width={67}
              height="7.40413"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={1}
                result="effect1_foregroundBlur_25_621"
              />
            </filter>
            <linearGradient
              id="paint0_linear_25_621"
              x1="442.605"
              y1="2.05758e-05"
              x2="64.2692"
              y2="265.163"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#003915" />
              <stop offset={1} stopColor="#0FA647" />
            </linearGradient>
          </defs>
        </svg>

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
