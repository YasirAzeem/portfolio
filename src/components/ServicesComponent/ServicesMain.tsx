'use client'

import React, {useState} from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import BorderedBox from "./ServicesCards";
import ServicesBorderedCards from "./ServicesBorderCards";
import ServicesBorderedMainCards from "./ServicesMainCards";
import ForthSection from "../BlogHeroSection/BlogForthSection";
import MeetYourTeam from "./MeetURTeam";
import AIServices from "./InnerPageComponents/AIServices";
import HowToProvide from "./InnerPageComponents/HowToProvide";
import ServicesAICards from "./InnerPageComponents/ServicesAICards";
import MobileServices from "./InnerPageComponents/MobileServices";
import HowWeProvideItMobile from "./InnerPageComponents/HowWeProvideItMobile";
import WebAppServices from "./InnerPageComponents/WebAppServices";
import WebAppProvide from "./InnerPageComponents/WebAppProvide";
import BlockchainServices from "./InnerPageComponents/BlockchainServices";
import BlockchainProvide from "./InnerPageComponents/BlockchainProvide";



export default function ServicesMain() {
  const [viewMode, setViewMode] = useState("list"); // New state to manage view mode

  const handleViewDetails = (mode) => {
    if (mode === "AI") {
      setViewMode("ai");
    } else if (mode === "MobileApplication") {
      setViewMode("mobileapp");
    } else if (mode === "WebApplication") {
      setViewMode("webapp");
    } else if (mode === "Blockchain") {
      setViewMode("blockchain");
    }
  
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  return (
    <>
       {viewMode === "list" && (
      <div className="relative">
        {/* <img src='/services/heroServicesBg.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[600px] XSM:h-[700px] sm:h-[800px]  md:h-[800px] lg:h-auto w-full object-cover z-0 top-[-90px] left-0" /> */}
        <img
            style={{
              position: "absolute",
              right: "0%",
              top: "-60px"
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
       
        <img src='/services/aisectionbg.png' alt='bg'  className="hidden lg:block w-full absolute z-1 object-cover top-[550px] MHD:top-[750px]" /> 
        <img src='/services/mobilandwebapbg.png' alt='bg'  className="hidden w-full lg:block absolute z-1 object-cover top-[1000px] MHD:top-[1350px]" /> 
        <img src='/services/bgimg3.png' alt='bg'  className="hidden lg:block absolute z-1 object-cover top-[1400px] HD:top-[1700px] MHD:top-[2200px]" /> 
        
        {/* <img src='/services/servicesmobileaiimage.png' alt='bg'  className="lg:hidden absolute inset-0  sm:h-[700px]  md:h-[700px] lg:h-auto w-full object-cover z-0 top-[-20px] left-0" /> */}

        <img src='/services/mobileaiimg.png' alt='bg'  className=" lg:hidden absolute z-1 right-0 object-cover top-[490px] XSM:top-[560px] sm:top-[690px] md:top-[650px]" /> 
        <img src='/services/mask-shape1.png' alt='bg'  className=" lg:hidden absolute z-1 object-cover right-0 top-[890px] XSM:top-[950px] sm:top-[1100px] md:top-[1150px]" /> 
        <img src='/services/servicesstepsbg.png' alt='bg'  className=" lg:hidden absolute z-1 object-cover w-full top-[1500px] XSM:top-[1500px] sm:top-[1500px] md:top-[1800px]" /> 
        <img src='/services/Servicesabovebg.svg' alt='bg'  className=" lg:hidden absolute z-1 w-full top-[800px] XSM:top-[800px] sm:top-[900px] md:top-[800px]" /> 

        <img src='/services/leftarowbgservices.png' alt='bg'  className=" lg:hidden absolute z-1 object-cover top-[3000px] XSM:top-[3400px] sm:top-[4000px] md:top-[3800px]" /> 
        <img src='/services/servicesbg.svg' alt='bg'  className=" lg:hidden absolute z-1 w-full top-[2500px] XSM:top-[2700px] sm:top-[2800px] md:top-[3000px]" /> 
{/*         <img src='/blogresp/faqbgresp.png' alt='bg'  className=" md:hidden absolute inset-0  w-full object-cover z-0 sm:h-[1100px] top-[4000px] XSM:top-[4500px] sm:top-[5220px] md:top-[1200px] left-0" />
 */}

      

        <div className="relative z-10 flex justify-center align-center w-full top-[-20px] sm:top-[0px] lg:top-[40px]">
            <div className="w-[90%] md:w-[70%] flex flex-col lg:flex-row ">
                <div className="w-[95%] md:w-[75%] lg:mt-[10px] MHD:mt-[80px] FHD:mt-[110px] lg:w-auto ml-[0%] md:ml-[20%] lg:ml-[0%] hidden  lg:flex flex-col flex-wrap lg:flex-nowrap items-center justify-center lg:items-start lg:justify-start flex-grow lg:flex-grow-0 lg:basis-[40%] ">
                    <p className="hidden lg:block font-sabor px-2 text-[40px] lg:py-[0px] lg:mb-[20px] text-center lg:text-left">We've delivered</p>
                    <p className="px-1 lg:px-0 lg:mt-[-12%] HD:mt-[-7%] MHD:mt-[-4%] FHD:mt-[-2%] lg:py-[0px] font-sora text-[60px] lg:text-[100px] MHD:text-[100px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)]">
                    200+ 
                    </p>
                    <p className="px-1 lg:px-0 lg:mt-[-9%] HD:mt-[-6%]  MHD:mt-[-3%] FHD:mt-[-2%] lg:py-[0px] font-sora text-[30px] lg:text-[60px] MHD:text-[60px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)]">
                    Successful 
                    </p>
                    <p className="px-1 lg:px-0 lg:mt-[-8%] HD:mt-[-6%] MHD:mt-[-3%] FHD:mt-[-2%] lg:py-[0px] font-sora text-[30px] lg:text-[60px] MHD:text-[60px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)]">
                    Projects
                    </p>
                    <Button
                      className={cn(
                        "hidden lg:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[5px]"
                      )}
                      onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                    >
                      Book a Discovery Call
                    </Button>
                </div>
                  <img src='/services/servicesHeromain.png' alt='blogHero' className=" hidden lg:block w-[60%] lg:mt-[-70px] HD:mt-[-70px] MHD:mt-[-60px] FHD:mt-[-70px] lg:ml-[-110px] HD:ml-[-170px] MHD:ml-[-220px] FHD:ml-[-270px] z-20 "   />
                  
                  <div className="w-[100%] XSM:w-[95%] md:w-[75%]  ml-[0%] md:ml-[20%] lg:hidden flex flex-col flex-wrap flex-nowrap items-center justify-center">
                    <p className="px-1 lg:px-0 lg:mt-[-8%] MHD:mt-[-8%] lg:py-[0px] font-sora text-[60px] lg:text-[80px] MHD:text-[100px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)]">
                    200+ 
                    </p>
                    <p className="px-1 lg:px-0 mt-[-6%] XSM:mt-[-4%] sm:mt-[-3%] lg:mt-[-6%]  MHD:mt-[-6%] lg:py-[0px] font-sora text-[30px] XSM:text-[30px] md:text-[30px] lg:text-[50px] MHD:text-[60px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)]">
                    Successful Projects
                    </p>
                </div>

                  <div className="flex justify-center items-center mt-[-4%]">
                    <img src='/services/mobileheromain.png' alt='blogHeromobile' className="lg:hidden"   />
                  </div>

                  <div className="flex justify-center items-center ">
                  <Button
                      className={cn(
                        " lg:hidden bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[220px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[30px]"
                      )}
                      onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                    >
                      Book a Discovery Call
                    </Button>
                  </div>
            </div>
        </div>

      <div className="mt-[80px] lg:mt-[130px]">
          <ServicesBorderedCards />
      </div>

      <div  className="lg:mt-[0px]">
        <ServicesBorderedMainCards   onViewDetails={handleViewDetails} />
      </div>

      <div>
        <MeetYourTeam /> 
      </div>
      </div>
       ) }
       
       {viewMode === "ai" && (
        <div className="relative">

        {/* <img src='/services/aiinnerimgbg.png' alt='bg'  className="hidden lg:block absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[-110px] left-0" /> */}
        <img
            style={{
              position: "absolute",
              right: "0%",
              top: "-60px"
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
       
        <img src='/services/aiinnersection2bg.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[600px] XSM:h-[700px] sm:h-[800px]  md:h-[800px] lg:h-auto w-full object-cover z-0 lg:top-[750px] HD:top-[700px] left-0" />
        <img src='/services/aiinnersection3.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[600px] XSM:h-[700px] sm:h-[800px]  md:h-[800px] lg:h-auto w-full object-cover z-0 top-[1200px] left-0" />
        <img src='/services/aiarrowbg.png' alt='bg'  className="hidden lg:block absolute inset-0 lg:h-auto  z-0 lg:top-[1600px] HD:top-[1500px] MHD:top-[1800px] left-0" />

        <img src='/services/servicesinnerpagherobg.png' alt='bg'  className=" lg:hidden absolute inset-0 sm:h-[900px]  md:h-[1000px] lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[-110px] left-0" />
        <img src='/services/ServicesPen.png' alt='bg'  className=" lg:hidden absolute z-1 left-[10%] XSM:left-[14%] sm:left-[23%] md:left-[26.5%] object-cover top-[450px] XSM:top-[10%] sm:top-[11%] md:top-[10.5%]" /> 

        <img src='/services/bluebginner.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[200px] md:top-[50px] right-0" />
        <img src='/services/wavesinnerbg.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[900px] XSM:top-[1000px] left-0" />
        <img src='/services/servicesinnerbg3.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[1500px] XSM:top-[1700px] left-0" />
        <img src='/services/meetinnerservices.png' alt='bg'  className=" md:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[3500px] XSM:top-[3900px] left-0" />
        <img src='/services/leftarowinnerservices.png' alt='bg'  className=" md:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto z-0 top-[3920px] XXSM:top-[4050px] XSM:top-[4500px] sm:top-[4700px]  left-0" />
{/*         <img src='/blogresp/faqbgresp.png' alt='bg'  className=" md:hidden absolute inset-0  w-full object-cover z-0 sm:h-[1100px] top-[4300px] XSM:top-[4800px] sm:top-[5400px] md:top-[1200px] left-0" />
 */}
          <div className="relative flex justify-center items-center">
            <div className="w-[95%] XXSM:w-[90%] lg:w-[70%]">
              <div className="flex flex-col justify-center items-center lg:mt-[15px]">
                  <p className=" font-sora text-[30px] lg:text-[60px] leading-[36px] lg:leading-[72px] text-center font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)] z-[999]">
                      ArtificaI Intelligence.
                  </p>
                  <p className="font-sabor text-[25px] lg:text-[40px] text-center z-[99999] leading-[27px]  lg:leading-[43px] mt-[15px] lg:mt-[10px] MHD:mt-[15px]"> 
                      Application Development.
                  </p>
                  <p className="font-inter text-[18px] lg:text-[25px] leading-[22px] lg:leading-[31px] text-center mt-[20px] font-normal lg:w-[870px]">
                      Build cutting edge AI solutions that automate operations, multiply profits, and cut costs. Full-cycle development of intelligent solutions to empower your business.
                  </p>
                  <div className="lg:mt-[-20px]">
                    <img src="/services/servicesheroai.png" alt="aihero" className="" />
                  </div>
                  <Button
                    className={cn(
                      "hidden lg:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[292px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[20px]"
                    )}
                    onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                  >
                    Book a Discovery Call
                  </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-[40px] lg:mt-[50px] relative">
            <AIServices />
          </div>

          <div className="mt-[50px] relative">
            <HowToProvide />
          </div>

          <div className="mt-[60px] lg:mt-[100px] MHD:mt-[80px] relative">
            <ServicesAICards />
          </div>

          <div>
            <MeetYourTeam /> 
          </div>
        </div>
       )}

      {viewMode === "mobileapp" && (
              <div className="relative">

              {/* <img src='/services/aiinnerimgbg.png' alt='bg'  className="hidden lg:block absolute inset-0 lg:h-[1200px] HD:h-[1100px] MHD:h-auto w-full object-cover z-0 top-[-110px] left-0" /> */}
              
              <img
            style={{
              position: "absolute",
              right: "0%",
              top: "-60px"
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
              <img src='/services/aiinnersection2bg.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[600px] XSM:h-[700px] sm:h-[800px]  md:h-[800px] lg:h-auto w-full object-cover z-0 lg:top-[750px] HD:top-[700px] MHD:top-[650px] left-0" />
              <img src='/services/aiinnersection3.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[600px] XSM:h-[700px] sm:h-[800px]  md:h-[800px] lg:h-auto w-full object-cover z-0 top-[1200px] left-0" />
              <img src='/services/aiarrowbg.png' alt='bg'  className="hidden lg:block absolute inset-0 lg:h-auto  z-0 lg:top-[1900px] HD:top-[2100px] MHD:top-[2200px] left-0" />

              <img src='/services/servicesinnerpagherobg.png' alt='bg'  className=" lg:hidden absolute inset-0 sm:h-[900px]  md:h-[1000px] lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[-110px] left-0" />
              <img src='/services/bluebginner.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[300px] md:top-[50px] right-0" />
             {/*  <img src='/services/wavesinnerbg.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[900px] XSM:top-[1000px] left-0" /> */}
{/*               <img src='/services/servicesinnerbg3.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[1500px] XSM:top-[1700px] left-0" />
 */}              
              <img src='/services/stepsservicesbg.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[1250px] XSM:top-[1200px] left-0" />
              <img src='/services/meetinnerservices.png' alt='bg'  className=" md:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[2600px] XSM:top-[2700px] left-0" />
              <img src='/services/leftarowinnerservices.png' alt='bg'  className=" md:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto z-0 top-[3120px] XXSM:top-[3180px] XSM:top-[3350px] sm:top-[3430px]  left-0" />
{/*               <img src='/blogresp/faqbgresp.png' alt='bg'  className=" md:hidden absolute inset-0  w-full object-cover z-0 sm:h-[1100px] top-[3300px] XSM:top-[3600px] sm:top-[4100px] md:top-[1200px] left-0" />
 */}
                <div className="relative flex justify-center items-center">
                  <div className="w-[90%] lg:w-[70%]">
                    <div className="flex flex-col justify-center items-center mt-[15px]">
                        <p className=" font-sora text-[30px] lg:text-[60px] leading-[36px] lg:leading-[72px] text-center font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)] z-[999]">
                            Mobile Application
                        </p>
                        <p className="font-sabor text-[25px] lg:text-[40px] text-center z-[99999] leading-[27px]  lg:leading-[43px] mt-[10px] lg:mt-[10px] MHD:mt-[15px]"> 
                        Development.
                        </p>
                        <p className="font-inter text-[18px] lg:text-[25px] leading-[25px] lg:leading-[31px] text-center mt-[20px] font-normal lg:w-[870px]">
                        Build enterprise grade mobile applications to complement your software solutions. Full-cycle development of software applications to bring your applications to your customers’ fingertips.                        </p>
                        <div className="lg:mt-[-60px]">
                          <img src="/services/MobileHero.png" alt="aihero" className="" />
                        </div>
                        <Button
                          className={cn(
                            "hidden lg:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[292px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[-20px]"
                          )}
                          onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                        >
                          Book a Discovery Call
                        </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-[20px] lg:mt-[70px] relative">
                  <MobileServices />
                </div>

                <div className="mt-[50px] lg:mt-[80px] relative">
                  <div className="flex justify-center items-center">
                    <div className="w-[90%] lg:w-[70%]">
                      <div className="flex flex-col justify-center items-center">
                        <p className="hidden lg:block font-saborDisplaySSK font-normal text-[40px] leading-[44px] text-center">How Do We Provide It?</p>
                          <HowWeProvideItMobile />
                    </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[50px] HD:mt-[50px] MHD:mt-[80px] relative">
                  <ServicesAICards />
                </div>

                <div>
                  <MeetYourTeam /> 
                </div>
              </div>
            )}

      {viewMode === "webapp" && (
        <div className="relative">

        {/* <img src='/services/aiinnerimgbg.png' alt='bg'  className="hidden lg:block absolute inset-0 lg:h-[1200px] HD:h-[1100px] MHD:h-auto w-full object-cover z-0 top-[-110px] left-0" /> */}
        
        <img
            style={{
              position: "absolute",
              right: "0%",
              top: "-60px"
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
        <img src='/services/aiinnersection2bg.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[600px] XSM:h-[700px] sm:h-[800px]  md:h-[800px] lg:h-auto w-full object-cover z-0 lg:top-[850px] HD:top-[700px] MHD:top-[650px] left-0" />
        <img src='/services/aiinnersection3.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[600px] XSM:h-[700px] sm:h-[800px]  md:h-[800px] lg:h-auto w-full object-cover z-0 top-[1350px] HD:top-[1200px] left-0" />
        <img src='/services/aiarrowbg.png' alt='bg'  className="hidden lg:block absolute inset-0 lg:h-auto  z-0 lg:top-[1900px] HD:top-[2000px] MHD:top-[2150px] left-0" />

        <img src='/services/servicesinnerpagherobg.png' alt='bg'  className=" lg:hidden absolute inset-0 sm:h-[900px]  md:h-[1000px] lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[-110px] left-0" />
              <img src='/services/bluebginner.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[300px] md:top-[50px] right-0" />
             {/*  <img src='/services/wavesinnerbg.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[900px] XSM:top-[1000px] left-0" /> */}
{/*               <img src='/services/servicesinnerbg3.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[1500px] XSM:top-[1700px] left-0" />
 */}              
              <img src='/services/stepsservicesbg.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[1250px] XSM:top-[1200px] left-0" />
              <img src='/services/meetinnerservices.png' alt='bg'  className=" md:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[3100px] XSM:top-[3200px] left-0" />
              <img src='/services/leftarowinnerservices.png' alt='bg'  className=" md:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto z-0 top-[3450px] XSM:top-[3650px] sm:top-[3900px]  left-0" />
{/*               <img src='/blogresp/faqbgresp.png' alt='bg'  className=" md:hidden absolute inset-0  w-full object-cover z-0 sm:h-[1100px] top-[3800px] XSM:top-[4000px] sm:top-[4680px] md:top-[1200px] left-0" />
 */}
          <div className="relative flex justify-center items-center">
            <div className="w-[90%] lg:w-[70%]">
              <div className="flex flex-col justify-center items-center mt-[15px]">
                  <p className=" font-sora text-[30px] lg:text-[60px] leading-[36px]  lg:leading-[72px] text-center font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)] z-[999]">
                    Web application development
                  </p>
                  <p className="font-sabor text-[25px] lg:text-[40px] text-center z-[99999] leading-[27px]  lg:leading-[43px] mt-[10px] lg:mt-[10px] MHD:mt-[15px]"> 
                  Development.
                  </p>
                  <p className="font-inter text-[18px] lg:text-[25px] leading-[31px] text-center mt-[20px] font-normal lg:w-[870px]">
                  Build enterprise grade software applications at a fraction of the costs of traditional agencies. Full-cycle development of software applications to bring your business into the digital age.
                  </p>
                  <div className="mt-[40px]">
                    <img src="/services/webapphero.png" alt="aihero" className="" />
                  </div>
                  <Button
                    className={cn(
                      "hidden lg:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[292px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[40px] MHD:mt-[50px]"
                    )}
                    onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                  >
                    Book a Discovery Call
                  </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-[50px] lg:mt-[70px] relative">
            <WebAppServices />
          </div>

          <div className="mt-[0px] lg:mt-[80px] relative">
           <WebAppProvide />
          </div>

          <div className="mt-[50px] lg:mt-[100px] HD:mt-[100px] MHD:mt-[100px] relative">
            <ServicesAICards />
          </div>

          <div>
            <MeetYourTeam /> 
          </div>
        </div>
      )}

      {viewMode === "blockchain" && (
        <div className="relative">

        {/* <img src='/services/aiinnerimgbg.png' alt='bg'  className="hidden lg:block absolute inset-0 lg:h-[1200px] HD:h-[1100px] MHD:h-auto w-full object-cover z-0 top-[-110px] left-0" /> */}
        <img
            style={{
              position: "absolute",
              right: "0%",
              top: "-60px"
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
       
        <img src='/services/aiinnersection2bg.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[600px] XSM:h-[700px] sm:h-[800px]  md:h-[800px] lg:h-auto w-full object-cover z-0 lg:top-[800px] HD:top-[750px] MHD:top-[650px] left-0" />
        <img src='/services/aiinnersection3.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[600px] XSM:h-[700px] sm:h-[800px]  md:h-[800px] lg:h-auto w-full object-cover z-0 top-[1150px] HD:top-[1100px] MHD:top-[1150px] left-0" />
        <img src='/services/aiarrowbg.png' alt='bg'  className="hidden lg:block absolute inset-0 lg:h-auto  z-0 lg:top-[1900px] HD:top-[1980px] MHD:top-[2150px] left-0" />

        <img src='/services/servicesinnerpagherobg.png' alt='bg'  className=" lg:hidden absolute inset-0 sm:h-[900px]  md:h-[1000px] lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[-110px] left-0" />
              <img src='/services/bluebginner.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[300px] md:top-[50px] right-0" />
             <img src='/services/wavesinnerbg.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[900px] XSM:top-[1000px] left-0" /> 
              <img src='/services/servicesinnerbg3.png' alt='bg'  className=" lg:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[1500px] XSM:top-[1700px] left-0" />
              <img src='/services/meetinnerservices.png' alt='bg'  className=" md:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto w-full object-cover z-0 top-[3800px] XSM:top-[4000px] left-0" />
              <img src='/services/leftarowinnerservices.png' alt='bg'  className=" md:hidden absolute inset-0 lg:h-[1200px] HD:h-[1200px] MHD:h-auto z-0 top-[4100px] XXSM:top-[4250px] XSM:top-[4500px] sm:top-[4550px]  left-0" />
{/*               <img src='/blogresp/faqbgresp.png' alt='bg'  className=" md:hidden absolute inset-0  w-full object-cover z-0 sm:h-[1100px] top-[4500px] XSM:top-[4750px] sm:top-[5300px] md:top-[1200px] left-0" />
 */}

          <div className="relative flex justify-center items-center">
            <div className="w-[95%] XXSM:w-[90%] lg:w-[70%]">
              <div className="flex flex-col justify-center items-center mt-[5px] lg:mt-[15px]">
                  <p className=" font-sora text-[28px] lg:text-[60px] leading-[33px] lg:leading-[72px] text-center font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)] z-[999]">
                    Crypto and blockchain
                  </p>
                  <p className="font-sabor text-[25px] lg:text-[40px] text-center z-[99999] leading-[27px]  lg:leading-[43px] mt-[10px] lg:mt-[10px] MHD:mt-[15px]"> 
                    Development.
                  </p>
                  <p className="font-inter text-[18px] lg:text-[25px] leading-[20px] lg:leading-[31px] text-center mt-[20px] font-normal lg:w-[870px]">
                    Build enterprise grade blockchain applications to enter the next generation of the web. Full-cycle development of blockchain applications to strengthen security, cut costs, and improve efficiencies of your operations.
                  </p>
                  <div className="mt-[40px]">
                    <img src="/services/heroblockchaininner.png" alt="aihero" className="" />
                  </div>
                  <Button
                    className={cn(
                      "hidden lg:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[292px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[20px] MHD:mt-[50px]"
                    )}
                    onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                  >
                    Book a Discovery Call
                  </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:mt-[50px] relative">
            <BlockchainServices />
          </div>

          <div className="mt-[30px] lg:mt-[70px] MHD:mt-[70px] relative">
            <div className="flex justify-center items-center">
              <div className="w-[90%] lg:w-[70%]">
                <div className="flex flex-col justify-center items-center">
                  <p className="hidden lg:block font-saborDisplaySSK font-normal text-[40px] leading-[44px] text-center">How Do We Provide It?</p>
                    <BlockchainProvide />
              </div>
              </div>
            </div>
          </div>

          <div className=" mt-[100px] XSM:mt-[50px] lg:mt-[100px] HD:mt-[70px] MHD:mt-[100px] relative">
            <ServicesAICards />
          </div>

          <div>
            <MeetYourTeam /> 
          </div>
        </div>
      )}
    </>
  );
}

 