import React from "react";
import GradientBtn from "./gradient-btn";
import FaqAccordion from "./faq-accordion";
import Image from "next/image";
import globe from "../../public/art/globe.png";

export default function FAQ() {
  return (
    <div className="relative">
      <img
        src="/art/faq-and-calender-bg.png"
        className="absolute w-full h-[200vh] top-[-140px] lg:top-0 lg:hidden left-0"
      />
      <Image
        src={globe}
        width={450}
        height={686}
        alt="bottom"
        priority
        className="hidden lg:block absolute w-[254px] md:w-[450px] h-[371px] md:h-[686px] top-[38rem] md:-top-96 right-0 "
      />
      <div className="container lg:mt-[80px] relative z-50">
        <div className="flex flex-col gap-y-6 lg:flex-row justify-center lg:gap-[112px]">
          <div className="space-y-4 col-span-4 max-md:text-center">
            <h1 className="min-[1280px]:w-[392px] text-[36px] lg:text-[50px] xl:text-[68px] font-sabor max-lg:leading-tight lg:leading-[77px] ">
              Frequently Asked <span className="">Questions</span>
            </h1>
            <GradientBtn text="Free Consultation" url="https://calendly.com/yasir-programmx/30min" />
          </div>
          <div className="w-full max-w-[646px]">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}
