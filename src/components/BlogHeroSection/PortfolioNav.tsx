'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AllBoxBG from "@public/portfolio-assets/herosection-all-box.png";
import BottomBoxBG from "@public/portfolio-assets/hero-bottom-box.png";

import BlockChainBoxBG from "@public/portfolio-assets/herosection-blockchain-box.png";
import EcomBoxBG from "@public/portfolio-assets/herosection-ecom-box.png";
import AIBoxBG from "@public/portfolio-assets/herosection-ai-box.png";
import WebDevBoxBG from "@public/portfolio-assets/herosection-webdev-box.png";
import { portfolioNav } from "@/constants/portfolio";

type Props = {
  selectedTab: string;
  onSelectTab: React.Dispatch<React.SetStateAction<string>>;
};

const PortfolioNavDesktop = ({ selectedTab, onSelectTab }: Props) => {
// debugger
  console.log(selectedTab , onSelectTab);
  
  return (
    <div className="absolute mt-[40px] flex justify-center items-center left-1/2 transform -translate-x-1/2 z-10 w-full max-[1023px]:hidden">
      <Image
        src={BottomBoxBG}
        alt="Hero Bottom Box Background"
        className="w-[70%] h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center gap-6 min-[1366px]:gap-8 min-[1440px]:gap-16 w-full">
        {portfolioNav.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onSelectTab(item.label)}
          >
            <Image /* src={item.src} */
            src={selectedTab === item.label ? item.src.active : item.src.default} alt={item.alt} className="w-[26px] h-[26px]" />
            <p
              className={`font-saborDisplaySSK font-normal text-[20px] ${
                selectedTab === item.label ? "text-[#4349FF]" : ""
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioNavDesktop;
