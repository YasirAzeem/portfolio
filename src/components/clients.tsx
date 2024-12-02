import Image from "next/image";
import React from "react";
import line from "../../public/art/line2.png";
import fusioxX from "../../public/art/fusionX.png";
import Slider from "./slider";
import hurdles from "../../public/art/hurdles.png";
import { MoveRight } from "lucide-react";
import MiddleImage from "../../public/img/MiddleImage.png";
import MiddleImageSvg from "../../public/art/middle-img.svg";
// import MiddleImageSvg from "../../public/art/middle-step.png";
import FirstIcon from "../../public/icons/FirstIcon";
import SecondIcon from "../../public/icons/SecondIcon";
import ThirdIcon from "../../public/icons/ThirdIcon";
import FourthIcon from "../../public/icons/FourthIcon";
import FifthIcon from "../../public/icons/FifthIcon";
import SixthIcon from "../../public/icons/SixthIcon";
import eclipticRight from "../../public/art/ecliptic-right.png";
import Swirl from "../../public/art/swirl.png";
import LeftGlobe from "../../public/art/left-globe.png";
import circles from "../../public/art/circles.png";
import SliderMobile from "./SliderMobile";

export default function Clients() {
  return (
    <div className="relative">
      <Image
        src={fusioxX}
        width={322}
        height={300}
        alt="line"
        priority
        className="absolute top-0 left-0  opacity-[0.04]"
      />
      <Image
        src={eclipticRight}
        className="absolute top-[-500px] z-0 right-0"
        width={600}
        height={600}
        alt="last-hero"
        priority
      />

      <div className="mt-[42px] flex justify-center items-center">
        <p className="text-[25px] sm:text-[33px] lg:text-[60px] font-saborDisplaySSK text-center font-normal relative w-fit">
          Companies we&apos;ve <span className="text-[#0E35E3]">helped</span>
          <Image
            src={line}
            width={231}
            height={8}
            alt="line"
            priority
            className="hidden lg:block absolute max-lg:w-[200px] max-[602px]:left-1/3  min-[640px]:top-[80px] right-[-25px] lg:-right-5"
          />
        </p>
      </div>
      <div className="flex justify-center relative z-50 items-center mt-10 max-[1023px]:hidden">
        <Slider />
      </div>
      <div className="flex justify-center relative z-50 items-center mt-10 min-[1023px]:hidden">
        <SliderMobile />
      </div>
      {/* for desktop & latptop */}
      <div className="relative gap-[20px] max-lg:hidden flex justify-center pt-[60px] mt-7 pb-[40px]">
        <div className=" object-contain bg-no-repeat bg-center w-full inset-0 m-auto absolute h-[1400px]"></div>
        <div className="absolute hidden -bottom-5 blur  h-5 w-full bg-gradient-to-r from-teal-800 to-blue-800   z-10"></div>
        <div className="col-span-4 w-fit ms-auto relative z-50 pr-10">
          <div className="max-w-[330px] flex items-end flex-col gap-2 mt-[8%]">
            <p className="text-[20px] text-right leading-tight font-sabor">
              Finding developers with skills that perfectly match project
              requirements can be a real struggle, leading to immediate
              setbacks.
            </p>
          </div>
          <div className="max-w-[330px] flex items-end flex-col gap-2 mt-[85%]">
            <p className="text-[20px] text-right leading-tight font-sabor">
              As a consequence, new developers require lengthy onboarding
              processes, creating the overhead of operational time and salary
              costs.
            </p>
          </div>
          <div className="max-w-[330px] flex items-end flex-col gap-2 mt-[74%]">
            <p className="text-[20px] text-right leading-tight font-sabor">
              Additionally, the constant need to update and adapt to the latest
              technologies to stay competitive is both costly and
              resource-intensive.
            </p>
          </div>
          <div className="absolute bottom-6 min-[1290px]:bottom-0 right-[-50px] min-[1290px]:right-[-120px] w-[300px] min-[1290px]:w-[526px] h-[100px] min-[1290px]:h-[130px]  flex items-center flex-col gap-2 mt-[5%] justify-center rounded-[12px] bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500">
            <p className="text-2xl min-[1290px]:text-[30px] font-sabor leading-tight">
              Helping Companies Save
            </p>
            <p className="text-3xl min-[1290px]:text-[40px] font-sabor leading-tight">
              $5 Million Yearly
            </p>
          </div>
        </div>
        <div className="col-span-2 relative min-w-[426px] z-50">
          <Image
            src={MiddleImageSvg}
            alt="hurdles"
            width={426}
            height={1109}
            priority
            className="mx-auto w-[426px] h-[1109px]"
          />
        </div>
        <div className="col-span-4 w-fit me-auto relative z-50 ps-10">
          <div className="max-w-[330px] flex flex-col gap-2 mt-[68%]">
            <p className="text-[20px] leading-tight font-sabor">
              This delays project timelines due to prolonged and inefficient
              hiring processes, which often ends up in compromises.
            </p>
          </div>
          <div className="max-w-[330px] flex flex-col gap-2 mt-[77%]">
            <p className="text-[20px] leading-tight font-sabor">
              Developers who do not integrate well with the existing team, face
              challenges due to cultural or work-style differences, causing
              additional friction.
            </p>
          </div>
          <div className="max-w-[330px] flex flex-col gap-2 mt-[77%] relative ">
            <p className="text-[20px] leading-tight font-sabor">
              Ultimately, these factors create high turnover among development
              staff, disrupting project continuity and incurring substantial
              hiring and training costs.
            </p>
          </div>
        </div>
      </div>
      {/* for mobile & tablet */}

      <div className="lg:hidden px-4 grid sm:grid-cols-2 gap-6 justify-center container relative mt-[30px] lg:w-[90%] lg:mx-auto lg:max-w-full h-full">
        {/*  <img
          src="/art/client-mobile-bg1.png"
          alt="client mobile bg"
          className="opacity-40 absolute bg-center top-[-100px] !z-[0] left-0 w-full h-full"
        /> */}

        <img
          src="/landing/StepsBGMobile.svg"
          alt="client mobile bg"
          className="opacity-70 absolute top-[-150px] !z-[0] left-0 w-full h-[1000px]"
        />

        <div className="w-full lg:max-w-[330px] relative z-50 flex items-center">
          <div className="flex flex-col text-right pr-3">
            <p className="!text-[15px] font-semibold ">Step 1</p>
            <p className="!text-[15px]  leading-tight font-sabor">
            Finding developers with skills that perfectly match project
              requirements can be a real struggle, leading to immediate
              setbacks.
            </p>
          </div>
          <div className="">
            <FirstIcon />
          </div>
        </div>
        <div className="w-full lg:max-w-[330px] relative z-50 flex items-center">
          <div>
            <SecondIcon />
          </div>
          <div className="flex  flex-col pl-3">
            <span className="!text-[15px] font-semibold ">Step 2</span>
            <p className="!text-[15px]  leading-tight font-sabor">
              This delays project timelines due to prolonged and inefficient
              hiring processes, which often ends up in compromises.
            </p>
          </div>
        </div>
        <div className="w-full lg:max-w-[330px] relative z-50 flex items-center">
          <div className="flex flex-col text-right pr-3">
            <span className="!text-[15px] font-semibold ">Step 3</span>
            <p className="!text-[15px]  leading-tight font-sabor">
              As a consequence, new developers require lengthy onboarding
              processes, creating the overhead of operational time and salary
              costs.
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
            <span className="!text-[15px] font-semibold ">Step 4</span>
            <p className="!text-[15px]  leading-tight font-sabor">
              Developers who do not integrate well with the existing team, face
              challenges due to cultural or work-style differences, causing
              additional friction.
            </p>
          </div>
        </div>
        <div className="w-full lg:max-w-[330px] relative z-50 flex items-center">
          <div className="flex flex-col text-right pr-3">
            <span className="!text-[15px] font-semibold ">Step 5</span>
            <p className="!text-[15px]  leading-tight font-sabor">
              Additionally, the constant need to update and adapt to the latest
              technologies to stay competitive is both costly and
              resource-intensive.
            </p>
          </div>
          <div>
            <FifthIcon />
          </div>
        </div>
        <div className="w-full lg:max-w-[330px] relative z-50 flex items-center">
          <div>
            <SixthIcon />
          </div>
          <div className="flex  flex-col pl-3">
            <span className="!text-[15px] font-semibold ">Step 6</span>
            <p className="!text-[15px]  leading-tight font-sabor">
              Ultimately, these factors create high turnover among development
              staff, disrupting project continuity and incurring substantial
              hiring and training costs.
            </p>
          </div>
        </div>
        <div className="col-span-full flex justify-center relative z-50 w-full">
          <div className="w-full max-w-[400px] h-[100px]  flex items-center flex-col gap-2 justify-center rounded-[12px] bg-gradient-to-r from-teal-400 to-blue-500">
            <p className="text-2xl font-sabor leading-tight">
              Helping Companies Save
            </p>
            <p className="text-3xl  font-sabor leading-tight">
              $5 Million Yearly
            </p>
          </div>
        </div>
      </div>
      <Image
        src={Swirl}
        width={300}
        height={500}
        alt="swirl"
        priority
        className="absolute top-80 right-0 w-[530px] max-lg:hidden"
      />
      {/* <Image
        src={circles}
        width={300}
        height={500}
        alt="swirl"
        priority
        className="absolute lg:hidden top-80 left-0 xl:w-[730px]"
      /> */}
      <Image
        src={LeftGlobe}
        width={300}
        height={500}
        alt="LeftGlobe"
        priority
        className="hidden lg:block absolute -bottom-36 left-0 xl:w-[475px]"
      />
    </div>
  );
}
