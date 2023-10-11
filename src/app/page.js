"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { logo } from "./utils/svg";
import { useRouter } from "next/navigation";
import { getTitle } from "./utils/function";

export default function Home() {
  const [OTP, setOTP] = useState("");
  const router =useRouter()
  useEffect(()=>{
    if(OTP.length>=6){
      router.push("/load-csv")
    }
  },[OTP?.length])
  return (
  <>
     {getTitle("Passcode | WMS")}

    <section className="bg-home h-screen py-20 flex flex-col ">
      <div className=" flex justify-center w-full max-w-[840px] gap-[177px]  mx-auto flex-col items-center">
        <div>{logo}</div>
        <div className="w-full h-full max-h-[215px]">
          <h1 className="text-white text-center font-normal ibm-regular text-[60px] leading-none">
            What’s the passcode?
          </h1>
          <OTPInput
            containerStyle={{ margin: "68px 0"  }}
            value={OTP}
            onChange={setOTP}
            separator={<span></span>}
            numInputs={6}
            inputType="number"
            renderInput={(props, index) => (
              <input
                {...props}
                placeholder="-"
             
                className="!text-white text-3xl mr-8 py-7 input-otp backdrop-blur-sm leading-[14px] placeholder:!text-white appearance-none focus:outline-none  h-[86px] !w-[110px] rounded-[4px]"
              />
            )}
          />
        </div>
        
      </div>
    </section>
  </>
  );
}
