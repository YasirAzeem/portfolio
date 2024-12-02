import * as React from "react";

export default function ForthSection({ marginBottom }) {
  return (
    <div
      className={`relative mt-[-50px] md:mt-[-50px] lg:mt-[40px] lgMax:mt-[10px] ${marginBottom}`}
    >
      <img
        src="/img/meetyourteambg.png"
        alt="Bg Blog"
        className="hidden lg:block absolute inset-0 w-full h-[800px] md:h-[850px] lg:h-auto object-cover z-0"
      />

      <div className="relative z-10 flex justify-center items-center pt-[20px] HD:pt-[50px]">
        <div className="flex flex-col">
          <p className="font-saborDisplaySSK font-normal text-[30px] md:text-[60px]">
            Meet Your <span className="text-[#0E35E3]">Team</span>
          </p>
          <div className="flex md:justify-end">
            <img
              src="/img/teamunderline.png"
              alt="underline"
              className=" lg:mt-[-10px]"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center items-center mt-[10px] HD:mt-[25px]">
        <div className="flex flex-col lg:flex-row md:flex-wrap md:pl-[60px] lg:pl-[0px] gap-[20px] justify-center items-center md:gap-[40px]">
          <p className="font-inter font-bold  text-[25px] md:text-[30px]">
            Data Engineering
          </p>
          <p className="font-inter font-bold  text-[25px] md:text-[30px]">
            Data Scientist
          </p>
          <p className="font-inter font-bold  text-[25px] md:text-[30px]">
            AI Architect
          </p>
          <p className="font-inter font-bold  text-[25px] md:text-[30px]">
            ML Engineer
          </p>
        </div>
      </div>
      <img
        src="/blogresp/people.png"
        alt="Bg Blog"
        className="lg:hidden w-full lg:h-auto object-cover z-[99999]"
      />
    </div>
  );
}
