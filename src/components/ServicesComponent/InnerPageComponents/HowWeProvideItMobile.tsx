import Image from "next/image";
import React from "react";
import MiddleImageSvg from "../../../../public/services/middlestepsservices.png";
import FirstIcon from "../../../../public/services/MobileStep1";
import SecondIcon from "../../../../public/services/MobileStep1";
import ThirdIcon from "../../../../public/services/MobileStep2";
import FourthIcon from "../../../../public/services/MobileStep3";


const HowWeProvideItMobile = () => {
  return (
    <div className="relative">
      {/* for desktop & latptop */}
      <div className="relative gap-[20px] max-lg:hidden flex justify-center pt-[60px] pb-[40px]">
        <div className="absolute hidden -bottom-5 blur  h-5 w-full bg-[linear-gradient(20.43deg,#0F2939_100.8%,#fff_84.38%)]  z-10"></div>
        <div className="col-span-4 w-fit ms-auto relative z-50 pr-[5px]">
          <div className="w-[300px] MHD:w-[430px] flex items-end flex-col gap-0 mt-[17%] MHD:mt-[14%]">
            <p className="text-[20px] text-right leading-[28px] font-saborDisplaySSK">Design</p>
            <p className="text-[20px] text-right leading-[28px] font-sabor">
              Not just beautiful, but purposeful user experience and juicy illustrations are done.
            </p>
          </div>
          <div className="w-[300px] MHD:w-[430px] flex items-end flex-col mt-[75%] MHD:mt-[67%]">
             <p className="text-[20px] text-right leading-[28px] font-saborDisplaySSK">Development</p>
            <p className="text-[20px] text-right leading-[28px] font-sabor">
             Our devs are making magic mobile appdevelopment following deadlines.
            </p>
          </div>
          <div className="absolute bottom-10 min-[1290px]:bottom-[10px] right-[-100px] min-[1290px]:right-[-150px] w-[350px] min-[1290px]:w-[400px] MHD:w-[526px] h-[100px] min-[1290px]:h-[130px]  flex items-center flex-col gap-2  justify-center rounded-[12px] bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500">
            <p className="text-2xl min-[1290px]:text-[30px] font-saborDisplaySSK leading-[33px]">
              Helping Companies Save
            </p>
            <p className="text-3xl min-[1290px]:text-[40px] font-saborDisplaySSK leading-[44px]">
              $5 Million Yearly
            </p>
          </div>
        </div>
        <div className="col-span-2 relative min-w-[426px] z-50">
            <img src="/services/middlestepsservices.png" alt="middle steps" />
          {/* <Image
            src={MiddleImageSvg}
            alt="hurdles"
            width={426}
            height={1109}
            priority
            className="mx-auto w-[426px] h-[1109px]"
          /> */}
        </div>
        <div className="col-span-4 w-fit me-auto relative z-50 ">
          <div className="w-[300px] MHD:w-[430px] flex flex-col gap-2 mt-[68%] MHD:mt-[57%]">
          <p className="text-[20px] text-left leading-[28px] font-saborDisplaySSK">Design</p>
            <p className="text-[20px] text-left leading-[28px] font-sabor">
              Not just beautiful, but purposeful user experience and juicy illustrations are done.
            </p>
          </div>
          <div className="w-[300px] MHD:w-[430px] flex flex-col gap-2 mt-[77%] MHD:mt-[65%]">
          <p className="text-[20px] text-left leading-[28px] font-saborDisplaySSK"> Deployment & QA Testing</p>
            <p className="text-[20px] text-left leading-[28px] font-sabor">
                    Yeah, even magic should be tested. Believe us, Santa does the same.
            </p>
          </div>
        </div>
      </div>
      {/* for mobile & tablet */}
      
      <div className="lg:hidden px-4 grid sm:grid-cols-2 gap-6 justify-center container relative mt-[30px] lg:w-[90%] lg:mx-auto lg:max-w-full h-full">
        
       {/*  <img
          src="/services/stepsservicesbg.png"
          alt="client mobile bg"
          className="opacity-70 absolute top-[-150px] !z-[0] left-0 w-full h-[1000px]"
        /> */}

        <div className="w-full lg:max-w-[330px] relative z-50 flex gap-[10px] items-center">
          <div className="flex flex-col text-right pr-3">
            <p className="!text-[15px] font-semibold "> Design</p>
            <p className="!text-[15px]  leading-tight font-sabor">
              Not just beautiful, but purposeful user experience and juicy illustrations are done.
            </p>
          </div>
          <div>
           <FirstIcon />
           </div>
          {/* <div className="">
            <img src="/services/stepsservice1.png" alt="step1" className="" />
          </div> */}
        </div>
        <div className="w-full lg:max-w-[330px] relative z-50 flex items-center">
          <div>
           <FirstIcon />
           </div>
          <div className="flex  flex-col pl-3">
            <span className="!text-[15px] font-semibold ">Design</span>
            <p className="!text-[15px]  leading-tight font-sabor">
            Not just beautiful, but purposeful user experience and juicy illustrations are done.
            </p>
          </div>
        </div>
        <div className="w-full lg:max-w-[330px] relative z-50 flex items-center">
          <div className="flex flex-col text-right pr-3">
            <span className="!text-[15px] font-semibold ">Development</span>
            <p className="!text-[15px]  leading-tight font-sabor">
            
Our devs are making magic mobile appdevelopment following deadlines.
            </p>
          </div>
          <div>
          <ThirdIcon />
          </div>
        </div>
        <div className="w-full lg:max-w-[330px] relative z-50 flex items-center">
        <div>
        <FourthIcon />
        </div>
          <div className="flex  flex-col pl-3">
            <span className="!text-[15px] font-semibold "> Deployment & QA Testing</span>
            <p className="!text-[15px]  leading-tight font-sabor">
Yeah, even magic should be tested. Believe us, Santa does the same.
            </p>
          </div>
        </div>
        <div className="col-span-full flex justify-center relative z-50 w-full">
          <div className="w-full max-w-[400px] h-[100px]  flex items-center flex-col gap-2 justify-center rounded-[12px] bg-[linear-gradient(87.43deg,#090EDB_8.8%,#DA24BB_84.38%)]">
            <p className="text-2xl font-sabor leading-tight">
              Helping Companies Save
            </p>
            <p className="text-3xl  font-sabor leading-tight">
              $5 Million Yearly
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWeProvideItMobile