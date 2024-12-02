import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import foundation from "../../public/art/companies/foundation.svg";
import micro1 from "../../public/art/companies/micro1.svg";
import blockhouse from "../../public/art/companies/blockhouse.svg";
import fliteCity from "../../public/art/companies/flite city.svg";
import appraiseall from "../../public/art/companies/appraiseall.svg";
import convrx from "../../public/art/companies/convrx.svg";
import Garuda from "../../public/art/companies/Garuda.svg";

import CircleLines from "@public/portfolio-assets/hero-circle-lines-bgg.png";
import RespMainBg from "@public/portfolio-assets/responsive main image bg.svg";
import hero01bg from "@public/portfolio-assets/hero-01bg.svg";
import WavesLines from "@public/portfolio-assets/herosection-waves-lines.png";
import RightBG from "@public/portfolio-assets/herosection-right-side-bg.png";
import InnovationBG from "@public/portfolio-assets/Innovation-left-side.png";
import BottomLinesBG from "@public/portfolio-assets/lines-background-bottom-image.svg";
import PersonBG from "@public/portfolio-assets/herosection-person.png";
import PenBG from "@public/portfolio-assets/herosection-pen.png";
import EmailBoxBG from "@public/portfolio-assets/herosection-emailbox.svg";
import PhoneBoxBG from "@public/portfolio-assets/herosection-phonebox.svg";
import PortfolioBG from "@public/portfolio-assets/herosection-portfolio.svg";
import BottomBoxBG from "@public/portfolio-assets/hero-bottom-box.png";
import AllBoxBG from "@public/portfolio-assets/herosection-all-box.png";
import BlockChainBoxBG from "@public/portfolio-assets/herosection-blockchain-box.png";
import EcomBoxBG from "@public/portfolio-assets/herosection-ecom-box.png";
import AIBoxBG from "@public/portfolio-assets/herosection-ai-box.png";
import WebDevBoxBG from "@public/portfolio-assets/herosection-webdev-box.png";
import ResponsiveMainBG from "@public/portfolio-assets/responsive-main-image-bg.svg";
import ResponsiveMainBG2 from "@public/portfolio-assets/responsive-main-image-bg.png";
import ResponsivePorfolioBG from "@public/portfolio-assets/responsive-portfolio.svg";
import ResponsivelinesBG from "@public/portfolio-assets/res-lines-background-image.svg";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

import { portfolioNav } from "@/constants/portfolio";

type Props = {
  selectedTab: string;
  onSelectTab: React.Dispatch<React.SetStateAction<string>>;
};

const PortfolioHeroSection = ({ selectedTab, onSelectTab }: Props) => {
  const cards = [
    {
      image: AllBoxBG,
      title: "All",
    },
    {
      image: BlockChainBoxBG,
      title: "Blockchain",
    },
    {
      image: EcomBoxBG,
      title: "Ecommerce",
    },
    {
      image: AIBoxBG,
      title: "AI",
    },
    {
      image: WebDevBoxBG,
      title: "Web",
    },
    {
      image: WebDevBoxBG,
      title: "Web",
    },
  ];
  return (
    <div className="relative w-full h-full">
      <Image
        src={RightBG}
        alt="Right side"
        className="absolute right-0 -top-24  max-[1600px]:w-[20%] max-[1023px]:hidden "
      />
      <Image
        src={InnovationBG}
        alt="Innovation Left Side"
        className="absolute left-10 HD:left-[6%] top-24 max-[1023px]:hidden"
      />
      <Image
        src={BottomLinesBG}
        alt="Bottom Lines"
        className="absolute bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-[1023px]:hidden"
      />
      <Image
        src={ResponsivelinesBG}
        alt="Bottom Lines"
        className="absolute bottom-0 sm:bottom-[-10rem] lg:bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-[1023px]:hidden w-full"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-[1023px]:hidden">
        <Image
          src={WavesLines}
          alt="Hero Waves Lines Background"
          className="w-full h-full "
        />
      </div>
      <div className="relative w-full h-full HD:max-w-[1320px] mx-auto">
      <Image
          src={RespMainBg}
          alt="Hero Circle Lines Background"
          className="mt-[-1rem] min-[1023px]:hidden"
        />
        <Image
          src={CircleLines}
          alt="Hero Circle Lines Background"
          className="mx-auto mt-[4rem] min-[1440px]:mt-[1rem] min-[1900px]:mt-[4rem] max-[1023px]:hidden"
        />
        <div className="absolute min-[1366px]:bottom-[28%] min-[1366px]:left-[22%] min-[1440px]:bottom-[34%] min-[1440px]:left-[20%] min-[1900px]:bottom-[33%] min-[1900px]:left-[20%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src={PenBG}
            alt="Hero Pen Background"
            className="w-full h-full max-[1023px]:hidden"
          />
        </div>
        <div className="absolute min-[1366px]:bottom-[28%] min-[1440px]:bottom-[30%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src={EmailBoxBG}
            alt="Hero Email Box Background"
            className="w-full h-full max-[1023px]:hidden"
          />
        </div>
        <div className="absolute min-[1366px]:bottom-[38%] min-[1366px]:right-[0%] min-[1440px]:bottom-[37%] min-[1440px]:right-[0%] min-[1900px]:bottom-[37%] min-[1900px]:right-[0%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src={PhoneBoxBG}
            alt="Hero Phone Box Background"
            className="w-full h-full max-[1023px]:hidden "
          />
        </div>
        <div className="absolute min-[1366px]:top-[12%] min-[1366px]:right-[0%] min-[1440px]:top-[10%] min-[1440px]:right-[-2%] min-[1600px]:top-[10%] min-[1600px]:right-[-3%] min-[1900px]:top-[10%] min-[1900px]:right-[-2%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src={PortfolioBG}
            alt="Hero Portfolio Box Background"
            className="w-full h-full max-[1023px]:hidden"
          />
        </div>
        <div className="absolute max-[1023px]:top-[39%] max-[1023px]:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 min-[1023px]:hidden">
          <Image
            src={ResponsivePorfolioBG}
            alt="Hero Portfolio Box Background"
            className="w-[90%] h-full"
          />
        </div>
        <div className="absolute bottom-[11%] flex justify-center items-center left-1/2 transform -translate-x-1/2 z-10 w-full max-[1023px]:hidden">
          <Image
            src={BottomBoxBG}
            alt="Hero Bottom Box Background"
            className="w-[80%] h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center min-[1366px]:gap-4 min-[1440px]:gap-16 w-full">
            {portfolioNav.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => onSelectTab(item.label)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="w-auto h-full"
                />
                <p
                  className={`font-saborDisplaySSK font-normal text-[25px] ${
                    selectedTab === item.label ? "text-[#090EDB]" : ""
                  }`}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute z-10 flex justify-center align-center w-full">
          <div className="w-[100%] md:w-[80%] flex flex-col lg:flex-row ">
              <div className="w-[80%] md:w-[65%] lg:w-auto ml-[20%] md:ml-[30%] lg:ml-[0%] flex  flex-row lg:flex-col flex-wrap lg:flex-nowrap items-center lg:items-start flex-grow lg:flex-grow-0 lg:basis-[40%]">
                  <p className="font-sabor px-2 text-[40px]">Where</p>
                  <p className=" font-sora text-[60px] lg:text-[80px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
                    Bytes 
                  </p>
                  <p className=" font-sabor px-2 text-[40px]">Become</p>
                  <p className=" font-sora text-[60px] lg:text-[80px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
                  Brilliance  
                  </p>
                  <p className=" font-sabor px-2 text-[40px]">In Every Blog</p>
                  <Button
                    className={cn(
                      "hidden lg:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[10px]"
                    )}
                  >
                    Book a Discovery Call
                  </Button>
                <div className="hidden  lg:flex justify-end items-end lg:ml-[50%] HD:ml-[60%] MHD:ml-[65%] FHD:ml-[67%] mr-[-30%] mt-[35px]">
                  <img src='/img/emailcard.png' alt='blogEmail' className=" "   />
                </div>
              </div>
                <img src='/portfolio-assets/herosection-person.png' alt='blogHero' className=" hidden lg:block w-[50%] h-[580px] ml-[-90px] mt-[60px] z-20 "   />
                <img src='/img/BlogHeroMobile.png' alt='blogHeromobile' className="lg:hidden"   />

                <div className="hidden lg:block mt-[330px] ml-[-40px]">
                  <img src='/img/PhoneCard.png' alt='blogEmail' className=" h-auto "   />
                </div>
          </div>
      </div>

       {/*  <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-fit w-full">
          <Image
            src={PersonBG}
            alt="Hero Person Background"
            className="w-full h-full max-[1023px]:hidden object-contain max-w-[614px] max-h-[670px] mr-auto ml-[27rem]"
          />
           <Image
            src={ResponsiveMainBG2}
            alt="Responsive Background"
            className="w-[55%] mx-auto h-full mt-[15rem] sm:mt-[22rem] lg:mt-[15rem] min-[1023px]:hidden"
          /> 
        </div>
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 min-[1023px]:hidden w-full space-y-3">
          <p className="leading-[42px] font-sabor font-normal text-[40px] text-[#fff] text-center">
            We've delivered
          </p>
          <div className="flex w-fit justify-center mx-auto">
            <p className="leading-[42px] font-sans text-[40px] sm:text-[50px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
              200+
            </p>
            <p className="leading-[42px] w-fit font-sans text-[40px] sm:text-[50px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
              Successful
              <br /> Projects
            </p>
          </div>
        </div>
        <div className="absolute top-[25%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 z-10 max-[1023px]:hidden">
          <p className="font-sabor font-normal text-[20px] sm:text-[40px] min-[1600px]:text-[35px] min-[1900px]:text-[40px] text-[#fff]">
            We've delivered
          </p>
          <p className="font-sans text-[40px] sm:text-[80px] min-[1600px]:text-[90px] min-[1900px]:text-[100px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
            200+
          </p>
          <p className="font-sans text-[30px] sm:text-[50px] min-[1600px]:text-[50px] min-[1900px]:text-[60px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
            Successful
          </p>
          <p className="font-sans text-[30px] sm:text-[50px] min-[1600px]:text-[50px] min-[1900px]:text-[60px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
            Projects
          </p>
          <Link href="" target="blank">
            <button className="rounded-[12px] bg-[linear-gradient(87.43deg,#090EDB_8.8%,#DA24BB_84.38%)] whitespace-nowrap font-raleway font-semibold text-[10px] sm:text-[22px] min-[1600px]:text-[17px] min-[1900px]:text-[20px] px-6 py-2 mt-3">
              Book a Discovery Call
            </button>
          </Link>
        </div> */}
      </div>
      <div className="flex justify-center relative z-50 items-center mt-8 HD:mt-10 min-[1023px]:hidden">
        <div className="bg-[linear-gradient(80.42deg,rgba(0,0,0,0.16)_25.25%,rgba(83,84,108,0.16)_98.05%)] border-[1px] border-border rounded-[20px] max-[1444px]:w-[90%] py-[20px] px-[40px]">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full min-[1444px]:w-[1300px] bg-[linear-gradient(79.59deg,_rgba(51,51,62,0.16)_6.21%,_rgba(83,84,108,0.16)_98.02%)]  px-6 py-3 rounded-[20px]"
          >
            <CarouselContent className="">
              {cards.map((item, index) => (
                <CarouselItem
                  key={index}
                  className=" md:basis-1/3 lg:basis-1/4"
                >
                  <div className="p-1">
                    <div className="flex justify-center h-full items-center gap-3">
                      <Image
                        src={item.image}
                        className="w-auto h-auto"
                        width={1}
                        height={1}
                        alt="card"
                        priority
                      />
                      <p>{item.title}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] -left-9" />
            <CarouselNext className="bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] -right-9" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeroSection;
