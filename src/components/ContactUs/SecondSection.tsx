import React from 'react'
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const SecondSection = () => {
  return (
    <div className='w-full flex justify-center items-center z-[999] mt-[30px] md:mt-[-20px] lg:mt-[90px]'>
        <div className='w-[90%] md:w-[70%]'>
            <div className='w-full flex flex-col justify-center items-center gap-[20px] md:gap-[15px]'>
                <Button
                    className={cn(
                      "hidden md:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[204px] h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway z-[999]"
                    )}
                    onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                  >
                    Book a Call
                </Button>
                <p className='font-raleway text-[20px] md:text-[24px] text-center z-[999] leading-[33px]'>We'll build and manage a dedicated software development team, save you 80% on costs, and ship a new product or feature improvement in 30 days - or we'll work for free until we do.</p>
                <Button
                    className={cn(
                      "md:hidden bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[204px] h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway z-[999]"
                    )}
                    onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                  >
                    Book a Call
                </Button>
            </div>
        </div>
    </div>
  )
}

export default SecondSection