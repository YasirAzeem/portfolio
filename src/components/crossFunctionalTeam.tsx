import React from "react";
import Image from "next/image";
import Link from "next/link";
import FigmaImage from "@public/portfolio-assets/figmateam.png";
import ReactImage from "@public/portfolio-assets/reactteam.png";
import CImage from "@public/portfolio-assets/cteam.png";
import NodeImage from "@public/portfolio-assets/nodeteam.png";
import IImage from "@public/portfolio-assets/infinityteam.png";
import JSImage from "@public/portfolio-assets/jsteam.png";
import CSSImage from "@public/portfolio-assets/cssteam.png";
import XDImage from "@public/portfolio-assets/xdteam.png";
import NextImage from "@public/portfolio-assets/nextteam.png";
import GTeamImage from "@public/portfolio-assets/gteam.png";
import AIImage from "@public/portfolio-assets/aiteam.png";
import ExpressImage from "@public/portfolio-assets/expressteam.png";
import MongoImage from "@public/portfolio-assets/mongoteam.png";
import TraiangleImage from "@public/portfolio-assets/right-traiangle-team.png";
import leftShadowImage from "@public/portfolio-assets/left-shadow-team.svg";
import leftArrowImage from "@public/portfolio-assets/left-arrow-team.png";

const CrossFunctionalTeam = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={leftArrowImage}
        alt="left arrow"
        className="absolute top-0 left-0"
      />
      <Image
        src={leftShadowImage}
        alt="left shadow"
        className="absolute -top-96 left-0"
      />
      <Image
        src={TraiangleImage}
        alt="right shadow"
        className="absolute -top-60 right-0"
      />
      <div className="flex flex-col justify-center items-center pb-10 mt-[6rem] HD:mt-[8rem]">
        <div className="font-sans leading-[30px] tracking-[2%] text-center mb-8">
          <h5 className="font-normal text-[24px] max-[1023px]:px-4">
            We are currently looking to join a cross-functional team
          </h5>
          <p className="font-normal text-[17px] max-[1023px]:px-6">
            that values improving people's lives through accessible design
          </p>
        </div>

        <div className="mt-4 space-y-[30px]">
          <div className="flex gap-3 sm:gap-4 flex-wrap max-w-[90%] sm:max-w-[60%] mx-auto justify-center">
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-3">
              <Image src={FigmaImage} alt="Figma Image" />
            </div>
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-1">
              <Image src={ReactImage} alt="React Image" />
            </div>
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-1">
              <Image src={CImage} alt="C Image" />
            </div>
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-1">
              <Image src={NodeImage} alt="Node Image" />
            </div>
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-1">
              <Image src={IImage} alt="I Image" />
            </div>
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-2">
              <Image src={JSImage} alt="JS Image" />
            </div>
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-1">
              <Image src={CSSImage} alt="CSS Image" />
            </div>{" "}
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-2">
              <Image src={XDImage} alt="XD Image" />
            </div>
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-1">
              <Image src={NextImage} alt="Next Image" />
            </div>
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-1">
              <Image src={GTeamImage} alt="G Image" />
            </div>
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-2">
              <Image src={AIImage} alt="AI Image" />
            </div>
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-1">
              <Image src={ExpressImage} alt="Express Image" />
            </div>
            <div className="flex items-center justify-center rounded-[50%] size-[46.27px] sm:size-[80px] bg-[#251C31] p-1">
              <Image src={MongoImage} alt="Mongo Image" />
            </div>
          </div>
          {/* <div className="flex gap-3 sm:gap-4 flex-wrap">
           
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CrossFunctionalTeam;
