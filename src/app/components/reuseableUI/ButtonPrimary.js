"use client";
import React from "react";

const ButtonPrimary = ({ text }) => {
  console.log(text);
  return (
    <button
      className={`w-[88px] h-[88px] text-white uppercase text-xl tracking-[-0.4px] imb-bold font-bold relative shadow-md rounded-full border-4 ${
        text == "stop"
          ? "border-red-500"
          : text == "pause"
          ? "border-amber-400"
          : " border-[#B8FF01B2]/70"
      }`}
    >
      <div className="w-[88px] h-[88px] left-0 top-0 absolute  rounded-full border-4 border-zinc-800 blur-[5px]" />

      {text === "pause" && (
        <svg
          className="absolute inset-0"
          xmlns="http://www.w3.org/2000/svg"
          width={88}
          height={88}
          viewBox="0 0 88 88"
          fill="none"
        >
          <circle cx={44} cy={44} r={44} fill="url(#paint0_radial_11_59)" />
          <defs>
            <radialGradient
              id="paint0_radial_11_59"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(44 44) rotate(90) scale(44)"
            >
              <stop stopColor="#FBBF24" stopOpacity="0.3" />
              <stop offset={1} stopColor="#FBBF24" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      )}
      {text === "stop" && (
        <svg
          className="absolute inset-0 z-0 "
          xmlns="http://www.w3.org/2000/svg"
          width={88}
          height={88}
          viewBox="0 0 88 88"
          fill="none"
        >
          <circle
            cx={44}
            cy={44}
            r={44}
            fill="url(#paint0_radial_39_66)"
            fillOpacity="0.3"
          />

          <defs>
            <radialGradient
              id="paint0_radial_39_66"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(44 44) rotate(90) scale(44)"
            >
              <stop stopColor="#DC2626" />
              <stop offset={1} stopColor="#DC2626" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      )}
      {text === "start" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={88}
          height={88}
          viewBox="0 0 88 88"
          fill="none"
        >
          <circle cx={44} cy={44} r={44} fill="url(#paint0_radial_12_82)" />
          <defs>
            <radialGradient
              id="paint0_radial_12_82"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(44 44) rotate(90) scale(44)"
            >
              <stop stopColor="#B8FF01" stopOpacity="0.2" />
              <stop offset={1} stopColor="#B8FF01" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      )}

      <span className="z-30 relative">{text}</span>
    </button>
  );
};

export default ButtonPrimary;
