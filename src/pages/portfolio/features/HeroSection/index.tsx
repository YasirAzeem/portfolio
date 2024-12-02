import React from "react";
import Image from "next/image";
import Link from "next/link";
import CircleLines from "@public/portfolio-assets/hero-circle-lines-bg.png";
import WavesLines from "@public/portfolio-assets/herosection-waves-lines.png";
import CodeBG from "@public/portfolio-assets/hero-code-bg.png";
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

const HeroSection = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={RightBG}
        alt="Right side"
        className="absolute right-0 -top-24"
      />
      <Image
        src={InnovationBG}
        alt="Innovation Left Side"
        className="absolute left-10 top-24"
      />
      <Image
        src={BottomLinesBG}
        alt="Bottom Lines"
        className="absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="relative w-full h-full">
        <Image
          src={CircleLines}
          alt="Hero Circle Lines Background"
          className="mx-auto"
        />
        <div className="absolute bottom-[34%] left-[28%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src={PenBG}
            alt="Hero Pen Background"
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-[30%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src={EmailBoxBG}
            alt="Hero Email Box Background"
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-[38%] right-[18%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src={PhoneBoxBG}
            alt="Hero Phone Box Background"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-[12%] right-[14%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src={PortfolioBG}
            alt="Hero Portfolio Box Background"
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-[7%] left-1/2 transform -translate-x-1/2 z-10 w-[75%]">
          <Image
            src={BottomBoxBG}
            alt="Hero Bottom Box Background"
            className="w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-16">
            <div className="flex items-center gap-4">
              <Image
                src={AllBoxBG}
                alt="Hero All Box Background"
                className="w-auto h-full"
              />
              <p className="font-saborDisplaySSK font-normal text-[25px] text-[#090EDB]">
                All
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={BlockChainBoxBG}
                alt="Hero Blockchain Box Background"
                className="w-auto h-full"
              />
              <p className="font-saborDisplaySSK font-normal text-[25px]">
                Blockchain
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={AIBoxBG}
                alt="Hero AI Box Background"
                className="w-auto h-full"
              />
              <p className="font-saborDisplaySSK font-normal text-[25px]">AI</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={WebDevBoxBG}
                alt="Hero Web Dev Box Background"
                className="w-auto h-full"
              />
              <p className="font-saborDisplaySSK font-normal text-[25px]">
                Web Development
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={EcomBoxBG}
                alt="Hero Ecom Box Background"
                className="w-auto h-full"
              />
              <p className="font-saborDisplaySSK font-normal text-[25px]">
                Ecommerce
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-[65%]">
          <Image
            src={PersonBG}
            alt="Hero Person Background"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-[25%] left-[23%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <p className="font-sabor font-normal text-[20px] sm:text-[30px] md:text-[40px] text-[#fff]">
            We've delivered
          </p>
          <p className="font-sora text-[40px] sm:text-[50px] md:text-[60px] lg:text-[100px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
            200+
          </p>
          <p className="font-sora text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
            Successful
          </p>
          <p className="font-sora text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
            Projects
          </p>
          <Link href="" target="blank">
            <button className="rounded-[12px] bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 whitespace-nowrap font-raleway font-semibold text-[10px] sm:text-[16px] md:text-[20px] px-6 py-2 mt-3">
              Book a Discovery Call
            </button>
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <Image
            src={WavesLines}
            alt="Hero Waves Lines Background"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={CodeBG}
            alt="Hero Code Background"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
