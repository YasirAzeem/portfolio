import React from 'react'
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";

const LovedThisProject = () => {
  return (
    <div className='relative  mt-[50px]'>
        <img src='/portfolio-assets/lovedthisprojectbg.png' alt='bg'  className="hidden lg:block absolute inset-0 w-full h-[230px] lg:h-[140px]  z-10 left-0" />
        <img src='/portfolio-assets/lovedbg.png' alt='bg'  className="lg:hidden absolute inset-0 w-full h-[190px] sm:h-[150px] lg:h-[140px]  z-10 left-0" />
        
        <div className="relative z-10 flex flex-col justify-center items-center  top-[20px]">
            <p className="font-saborDisplaySSK text-[30px] lg:text-[40px] px-[1px] lg:px-0 text-center z-[99999] leading-[44px]">Loved this project? Let’s develop your idea!.</p>
            <Button
                    className={cn(
                      "bg-[linear-gradient(87.43deg,#090EDB_8.8%,#DA24BB_84.38%)] w-[180px] md:w-[204px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[10px]"
                    )}
                    onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                  >
                    Book a Call
            </Button>
        </div>
    </div>
  )
}

export default LovedThisProject