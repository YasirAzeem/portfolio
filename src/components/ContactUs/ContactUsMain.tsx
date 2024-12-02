'use client'

import React, {useState} from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import SecondSection from "./SecondSection";
import ContactForm from "./ContactForm";
import { ForthSection } from "./ForthSection";
import FifthIconSection from "./FifthIconSection";
import PortfolioMobileForthSection from "../PortfolioComponent/portfolioMobileForth";
import PortfolioForthSection from "../PortfolioComponent/PortfolioForthSection";

export default function ContactUsMain() {
  

  return (
    <div className="relative">
      <img
            style={{
              position: "absolute",
              right: "0%",
              top: "-160px"
            }}
            src="/img/ecliptic-right.webp"
            alt="bg"
            className="hidden lg:block top-0  h-[70vh] object-contain z-10"
          />

          <img
            style={{
              position: "absolute",
              left: "0",
              top: "200px"
            }}
            src="/img/Auditbg.webp"
            alt="bg"
            className="hidden lg:block top-0  h-[70vh] object-contain z-10"
          />
       {/* <img src='/Contact/ContactHeroBg1.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[600px] XSM:h-[700px] sm:h-[800px]  md:h-auto w-full object-cover z-0 top-[-90px] left-0" /> */}
       <img src='/Contact/digitalHand.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[600px] XSM:h-[700px] sm:h-[800px]  md:h-auto object-cover z-0 top-[650px] left-0" />
       <img src='/Contact/waves.png' alt='bg'  className="absolute right-0 object-cover z-[99] top-[850px] XSM:top-[1000px] md:top-[1300px] lg:top-[850px] HD:top-[950px] MHD:top-[1100px] FHD:top-[1250px]" />
{/*        <img src='/portfolio-assets/forthPFbg.png' alt='bg'  className="hidden lg:block w-full absolute z-10 top-[2750px] XSM:top-[2950px] sm:top-[3200px] md:top-[3000px] lg:top-[1100px] HD:top-[1200px] MHD:top-[1200px]" /> 
 */}
 
       
       <img src='/portfolio-assets/respherobg.png' alt='bg'  className=" lg:hidden absolute inset-0 h-[600px] XSM:h-[750px] sm:h-[800px] md:h-[1000px] w-full object-cover z-10 top-[-40px] sm:top-[-20px] left-0" />
       <img src='/Contact/Ellipse2168.png' alt='bg'  className=" md:hidden absolute inset-0  w-full object-cover z-10 top-[100px] left-0" />
       <img src='/Contact/BlueBgContact.png' alt='bg'  className=" lg:hidden absolute opacity-40 inset-0  w-full object-cover z-0 top-[40px] md:top-[10px] left-0" />
{/*        <img src='/portfolio-assets/faqbgresp.png' alt='bg'  className="md:hidden absolute w-full h-[900px] md:h-[400px] z-10 top-[1700px] XSM:top-[1650px] sm:top-[1700px] md:top-[1000px]" /> 
 */}
       <div className="relative z-10 flex justify-center align-center w-full top-[0px] lg:top-[40px]">
          <div className="w-[100%] lg:w-[68%] flex flex-col lg:flex-row gap-[20px] lg:gap-[8%]">
              <div className="w-[100%] lg:w-[75%] lg:mt-[10px] MHD:mt-[80px] FHD:mt-[110px] lg:w-auto flex flex-col lg:flex-nowrap justify-center lg:items-start  flex-grow lg:flex-grow-0 lg:basis-[40%] ">
                <p className="font-sabor text-[30px] md:text-[40px] text-center lg:text-left lg:px-2">Unlocking</p>
                <p className="mt-[-7px] md:mt-[-20px] lg:mt-[-22px] font-sora text-center lg:text-left text-[45px] md:text-[80px] MHD:text-[100px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)]">
                   Ideas
                </p>
                <p className="mt-[-7px] md:mt-[-20px] lg:mt-[-15px] font-sabor text-[30px] md:text-[40px] text-center lg:text-left lg:px-2">With Intelligent </p>
                <p className="mt-[-7px] md:mt-[-20px] lg:mt-[-25px] font-sora text-center lg:text-left text-[45px] md:text-[80px] MHD:text-[100px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)]">
                 Solutions
                </p>
                <Button
                    className={cn(
                      "hidden lg:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[246px] md:w-[246px] h-[44px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway md:mt-[0px]"
                    )}
                    onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                  >
                    Book a Discovery Call
                </Button>
                <div className="lg:hidden flex w-full justify-center items-center">
                <Button
                    className={cn(
                      "bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[246px] md:w-[246px] h-[44px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway md:mt-[0px]"
                    )}
                    onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                  >
                    Book a Discovery Call
                </Button>
                </div>
              </div>

              <img src='/Contact/HeroImage.svg' alt='blogHero' className=" hidden lg:block w-[45%] z-20 "   />

              <div className="flex justify-center items-center mt-[-4%]">
                  <img src='/Contact/HeroMobile.svg' alt='blogHeromobile' className="lg:hidden w-[80%] h-[80%]"   />
              </div>
            </div>
       </div>

       <div>
            <SecondSection />
       </div>

       <div>
            <ContactForm />
       </div>

       <div>
            <ForthSection />
       </div>

       <div className="">
        <PortfolioForthSection marginTop="mt-[200px] XSM:mt-[180px]" marginBottom="lg:mb-[50px] MHD:mb-[10px]"
         smMarginTop="top-[-200px] XXSM:top-[-180px] XSM:top-[-150%] sm:top-[-90%] md:top-[-80%] MHD:top-[-70%]"
         showImage={false} />
       </div>

       {/* <div className="min-[1023px]:hidden">
        <PortfolioMobileForthSection />
      </div>

       <div className="max-[1023px]:hidden">                
            <FifthIconSection />
       </div>  */}
    </div>
  );
}

 