import React from 'react'
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import Link from 'next/link';

const ServicesAICards = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[90%] lg:w-[70%]'>
        <div className='flex flex-col justify-center items-center gap-[15px] sm:gap-[0] lg:gap-[30px] HD:gap-[0]'>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-[20px] lg:gap-[40px] HD:gap-[20px]'>
                <div className='w-[60%] lg:w-[50%] MHD:w-[50%]'>
                    <img src="/services/servicesCardImage.png" alt="img" className='MHD:ml-[150px]'/>
                </div>

                <div className='lg:w-[50%] MHD:w-[50%] flex flex-col  gap-[10px] justify-center items-center lg:justify-start lg:items-start'>
                    <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] text-center leading-[33px] lg:leading-[44px] lg:text-left w-[300px] lg:w-[450px] '>Innovate with FlexLab's AI Expertise</p>
                    <div className='flex justify-end items-center w-[490px] hidden lg:block'>
                        <img src="/portfolio-assets/portfolioLine.svg" alt="line" className='hidden lg:block  lg:mt-[20px]' />
                    </div>
                    <img src="/portfolio-assets/portfolioLine.svg" alt="line" className='lg:hidden mt-[5px]' />
                    <p className='font-sabor font-normal text-[16px] lg:text-[16px] text-[#CCD6F6] leading-[20px] text-center lg:text-left w-[350px] XSM:w-[360px] lg:w-[560px] lg:w-auto MHD:w-[700px] mt-[15px]'>
                    FlexLab elevates businesses through cutting-edge AI solutions, driving innovation, efficiency, and growth in the dynamic landscape of artificial intelligence applications.
                    </p>
                    <Button
                    className={cn(
                      "hidden lg:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[220px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[20px]"
                    )}
                  >
                     <Link href="/portfolio#portfolio-nav">
                         See All Projects
                   </Link>
                  </Button>
                  <Button
                    className={cn(
                      " lg:hidden bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[220px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[5px]"
                    )}
                    onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                  >
                     Book a Discovery Call
                  </Button>
                </div>

            </div>

            <div className='w-full flex flex-col lg:flex-row justify-center items-center md:mt-[-60px] lg:mt-[0] gap-[10px] HD:gap-[20px]'>
                <div className='lg:hidden w-[80%]'>
                    <img src="/services/aiimgSCard.png" alt="img" className='w-[100%]'/>
                </div>

                <div className='lg:w-[50%] MHD:w-[50%] flex flex-col justify-center items-center gap-[10px] lg:justify-start lg:items-start'>
                    <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] leading-[33px] lg:leading-[44px] text-center lg:text-left lg:w-[400px] w-[300px]'>Scale faster with
                      Artificial Intelligence.</p>
                    <img src="/portfolio-assets/portfolioLine.svg" alt="line" className='mt-[10px] lg:mt-[20px]' />
                    <p className='font-sabor font-normal text-[16px] lg:text-[16px] text-[#CCD6F6] text-center leading-[20px] lg:text-left w-[350px] XSM:w-[360px] lg:w-auto MHD:w-[650px] mt-[15px]'>
                      FlexLab helps businesses and enterprises, from MVP to IPO, to supercharge their operations using artificial intelligence solutions. Step into the future and leverage AI for your startup.
                    </p>
                    <Button
                    className={cn(
                      "hidden lg:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[220px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[20px]"
                    )}
                  >
                     <Link href="/portfolio#portfolio-nav">
                         See All Projects
                   </Link>
                  </Button>
                  <Button
                    className={cn(
                      " lg:hidden bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[220px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[5px]"
                    )}
                    onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                  >
                     Book a Discovery Call
                  </Button>
                </div>

                <div className='lg:w-[50%] MHD:w-[50%] hidden lg:block'>
                    <img src="/services/aiimgSCard.png" alt="img" className='w-[100%]'/>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesAICards