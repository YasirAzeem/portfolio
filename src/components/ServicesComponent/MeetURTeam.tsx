import * as React from "react";


export default function MeetYourTeam() {
 
  return (
    <div className="relative mt-[50px] mb-[-50px] md:mb-[-100px] lg:mb-[10px] HD:mb-[10px] MHD:mb-[10px] md:mt-[50px]">
      {/* <img
        src="/img/meetyourteambg.png"
        alt="Bg Blog"
        className="hidden lg:block absolute inset-0 w-full h-[800px] md:h-[700px] MHD:h-[850px] object-cover z-0"
      /> */}

      <div className="relative z-10 flex justify-center items-center">
        <div className="flex flex-col">
          <p className="font-saborDisplaySSK font-normal text-[30px] md:text-[60px] mt-[10px]">
            Meet Your <span className="text-[#0E35E3]">Team</span>
          </p>
          <div className="flex md:justify-end">
            <img src="/img/teamunderline.png" alt="underline" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center items-center mt-[10px]">
        <div className="flex flex-col md:flex-row md:flex-wrap md:pl-[60px] lg:pl-[0px] gap-[20px] justify-center items-center md:gap-[40px]">
          <p className="font-inter font-bold text-[25px] md:text-[30px]">
            Data Engineering
          </p>
          <p className="font-inter font-bold text-[25px] md:text-[30px]">
            Data Scientist
          </p>
          <p className="font-inter font-bold text-[25px] md:text-[30px]">
            AI Architect
          </p>
          <p className="font-inter font-bold text-[25px] md:text-[30px]">
            ML Engineer
          </p>
        </div>
      </div>
      {/* <img
        src="/blogresp/people.png"
        alt="Bg Blog"
        className="lg:hidden w-full lg:h-auto object-cover z-0"
      /> */}
    </div>
  );
}
