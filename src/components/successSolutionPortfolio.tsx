import Image from "next/image";
import React from "react";
import check from "../../public/art/check.png";
import trophyMan from "../../public/art/trophyMan.png";
import heroGradient from "../../public/art/hero-img-gradiant-circles.svg";
import GradientBtn from "./gradient-btn";
import caq from "../../public/art/caq.png";

export default function SuccessSolution() {
  const leftArrData = [
    "Free Codebase Systems and Architecture Audit",
    "Free Business Audit and Technical Roadmap",
    "Tailored Team Composition",
    "Seamless Workflow Integration",
    "Global Hiring and Compliance",
    "Dedicated Management Support",
  ];

  const rightArrData = [
    "KPI Tracking and Performance-Based Metrics",
    "Advanced Technology Integration",
    "On-demand scalability / Team Changes",
    "Proactive Innovation / Skill Upgrades",
    "Daily, Weekly, and Monthly Reports",
    "Immediate Value on Day 1",
  ];
  return (
    <div className="relative w-full h-full sm:mt-56">
      <div className="bg-[#1936BA] h-[87.45px] lg:h-[154px] relative z-40">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-center h-full max-[1200px]:container">
          <p className="whitespace-nowrap text-[30px] lg:text-[40px] HD:px-4 lg:px-6 font-sabor font-normal leading-none max-lg:text-center">
            A complete solution for
          </p>
          <p className="text-[35px] lg:text-[60px] HD:px-4 lg:px-6 font-sabor leading-none max-lg:text-center">
            Software Success
          </p>
        </div>
      </div>
      <div className="relative ">
        <Image
          src={trophyMan}
          alt="success"
          width={943}
          height={905}
          className="absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 z-40 max-[1200px]:hidden"
          priority
        />
        <div className="hidden md:block w-[905px] h-[905px] max-w-full absolute translate-x-[-50%] translate-y-[-50%] top-0 left-1/2 ">
          <Image
            src={heroGradient}
            width={905}
            height={905}
            alt="hero"
            priority
          />
        </div>
        <div className="max-md:!hidden absolute lg:mt-[-50px] translate-x-[-135px] max-[1200px]:translate-y-[250px] translate-y-[190px] top-1/2 left-1/2 z-40 mt-8">
          <GradientBtn text="Get Started" url="https://calendly.com/yasir-programmx/30min" />
        </div>
        <div className="max-w-[1400px] max-[1200px]:container max-md:gap-3 mt-[40px] lg:mt-[80px] max-[1200px]:gap-4 mx-auto flex max-md:flex-col items-centers justify-between">
          <div className="flex flex-col gap-3  HD:px-4 lg:px-6">
            {leftArrData.map((x, index) => (
              <div key={index + x} className="flex items-start gap-1.5">
                <Image
                  src={check}
                  width={20}
                  height={17}
                  alt="check"
                  priority
                  className="mt-1"
                />
                <p className="text-sm md:text-xl font-sabor">{x}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3  HD:px-4 lg:px-6">
            {rightArrData.map((x, index) => (
              <div key={index + x} className="flex items-start gap-1.5">
                <Image
                  src={check}
                  width={20}
                  height={17}
                  alt="check"
                  priority
                  className="mt-1"
                />
                <p className="text-sm whitespace-nowrap md:text-xl font-sabor">
                  {x}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="md:hidden container mt-10">
          <GradientBtn text="Get Started" />
        </div> */}
        <div className="absolute -bottom-[112px] lg:-bottom-[370px] z-40 w-full h-[76px] lg:h-[140px] overflow-hidden flex flex-col-reverse">
          {/* <Image
            src={caq}
            width={1920}
            height={149}
            alt="caq"
            priority
            className=""
          /> */}
          <img src="/art/caq.png" alt="" className="h-full " />
          {/* <img src="/art/commonly.png" alt="" className="h-full md:hidden" /> */}
          <p className="text-[25px] font-normal whitespace-nowrap lg:text-[40px] font-sabor absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center ">
            Commonly Asked Questions
          </p>
        </div>
      </div>
    </div>
  );
}
