import Image from "next/image";
import React from "react";
import talkline from "../../public/art/talkline.png";
import calenderBottom from "../../public/art/calender-bottom.png";
import letstalkright from "../../public/art/lettalkright.png";
import CustomCalender from "./custom-calender";
import footerTopBg from "../../public/art/footer-top-bg.png";
import calenderBg from "../../public/art/calenderBg.png";
import CustomTimepicker from "./custom-timepicker";
import { Button } from "./ui/button";
import GradientBtn from "./gradient-btn";

export default function LetsTalk() {
  return (
    <div className="mt-[30px] lg:mt-[80px] relative">
      <div className="w-full relative">
        <Image
          src={letstalkright}
          width={450}
          height={686}
          alt="bottom"
          priority
          className="hidden md:block absolute -top-32 left-0  "
        />
      </div>
      <div className="w-[85%] flex justify-center mx-auto relative z-50">
        <p className="text-[30px]  md:text-[40px] lg:text-[60px] font-sabor text-center  relative w-fit">
          Hello, Let&apos;s Talk!
          <Image
            src={talkline}
            width={110}
            height={4}
            alt="line"
            priority
            className="absolute top-[70px] right-0 max-lg:hidden"
          />
        </p>
      </div>
      <div className="flex flex-col items-center relative z-50">
        <p className="text-base text-center md:text-[24px] font-sabor container sm:w-[633px] mt-[10px] lg:mt-[25px]">
          Schedule a 30 min one-to-one call to dicuss your goals and challenges
        </p>
        <div className=" items-center gap-3 mt-[10px] hidden md:flex lg:mt-[25px] max-lg:px-8">
          <span className="w-[22px] h-[22px] text-black flex items-center justify-center font-semibold  bg-white rounded-full ">
            !
          </span>
          <p className="text-[16px]">
            This call is optional but highly recommended!
          </p>
        </div>
      </div>
      <div className="relative z-50 mt-[30px] lg:mt-[70px]">
        {/* <div className="flex  justify-center max-sm:flex-col gap-8 sm:gap-4 md:gap-12">
          <CustomCalender />
          <CustomTimepicker />
        </div> */}

        <div className="flex justify-center">
          <div className="w-[95%] 2xl:w-[80%]">
            <iframe
              src="https://calendly.com/yasir-programmx/30min"
              className="w-full h-[700px] rounded-3xl"
            ></iframe>

          </div>
        </div>

        <div className="flex justify-center mt-[40px]">
          {/* <button className="w-[206px] md:w-[306px] max-md:bg-[linear-gradient(87.43deg,#090EDB_8.8%,#DA24BB_84.38%)] h-[65px] rounded-[12px] lg:rounded-[10px] bg-[#1936BA] text-white text-xl font-semibold hover:opacity-90 flex items-center justify-center">
            Continue
          </button> */}
          <GradientBtn text="Continue" url="https://calendly.com/yasir-programmx/30min" />
        </div>
      </div>
      <div className="w-full h-[200px] relative max-[807px]:!hidden">
        <Image
          src={calenderBg}
          width={1600}
          height={800}
          alt="calender"
          priority
          className="absolute bottom-[110%] z-10 max-[807px]:hidden left-0 w-full"
        />
        <Image
          src={footerTopBg}
          width={1600}
          height={800}
          alt="footer"
          priority
          className="absolute max-[807px]:hidden max-[948px]:top-[-130%] top-[-150%]  left-0 w-full"
        />
        <Image
          src={calenderBottom}
          width={1900}
          height={402}
          alt="bottom"
          priority
          className="absolute max-[807px]:hidden max-[948px]:bottom-[80%]  bottom-[80%] min-[1031px]:bottom-[60%] min-[1166px]:bottom-[30%] min-[1554px]bottom-[20%] z-[11] left-0 w-full"
        />
      </div>
    </div>
  );
}
