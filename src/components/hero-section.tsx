import React from "react";
import { Separator } from "./ui/separator";
import GradientText from "./gradient-text";
import Image from "next/image";
import heroGradient from "../../public/art/hero-gradient.png";
import heroGradient2 from "../../public/art/hero-img-gradiant.svg";
import heroImg from "../../public/art/hero-img.png";
// import HeroSectionImg from "../../public/art/HeroSectionImg.png";
import HeroSectionImg from "../../public/art/ptechHomeNew.png";

import HeroSectionSvg from "../../public/art/HeroSectionImg.svg";
import webBottom from "../../public/art/web-bottom.png";

import { Button } from "./ui/button";
import GradientBtn from "./gradient-btn";
import webArt from "../../public/art/web.png";

export default function HeroSection() {
  return (
    <div className="lg:pt-[100px]  mx-auto bg-black">
      <div className="lg:pt-[20px] md:pt-[20px] relative mx-auto">
        <div className=" z-50 flex flex-col items-center sm:gap-3 md:gap-0">
          <div className=" text-center ">
            <GradientText text="Software Development" />
            <p className="text-[15px] mt-[30px] leading-[24px] lg:leading-[33px] md:text-xl lg:text-2xl text-center font-light font-raleway container tracking-normal">
              Your go-to for cutting-edge solutions in blockchain, AI, ML, and
              DApp development. Tailored, scalable, innovative.
            </p>
          </div>

          <GradientBtn
            text="Book a Call"
            className="mt-15px] lg:mt-[30px] md:mt-[15px]"
            url="https://calendly.com/yasir-programmx/30min"
          />
          <p className="text-[15px] mt-[30px] leading-[24px] lg:leading-[33px] md:text-xl lg:text-2xl text-center font-normal font-raleway container">
            Ready to take your project to the next level? Book a call with us
            today and discover how we can transform your vision into reality
          </p>
        </div>
        <div className="relative max-lg:hidden ">
          <div className="abolute w-full">
            <Image
              className="mx-auto"
              src={HeroSectionImg}
              width={900}
              height={542}
              alt="hero"
              priority
            />
            <div className="absolute w-full bottom-[-185px]">
              <Image
                className="mx-auto"
                src={webBottom}
                width={1270}
                height={206}
                alt="web"
                priority
              />
              <div className="absolute mx-auto text-center w-full bottom-0 space-y-10 ">
                <GradientBtn
                  text="Book a Call"
                  url="https://calendly.com/yasir-programmx/30min"
                />
                <p className="text-2xl  text-center font-normal  font-raleway lg:px-4 lg:text-2xl  max-w-[1080px] mx-auto">
                  Ready to take your project to the next level? Book a call with
                  us today and discover how we can transform your vision into
                  reality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
