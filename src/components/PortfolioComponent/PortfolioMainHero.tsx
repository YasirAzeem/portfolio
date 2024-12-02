import React from "react";
import GradientText from "../gradient-text";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import BlogSlider from "./BlogSlider";
import BlogCard from "./BlogCard";
import Footer from "../footer";
import SuccessSolution from "../success-solution";
import ForthSection from "./BlogForthSection";
import CarouselMobile from "./CarousalMobile";
import PortfolioNavDesktop from "./PortfolioNav";



export default function BlogHeroSection() {
  return (
    <div className="relative">
       <img src='/img/blogbg.png' alt='bg'  className="absolute inset-0 w-full object-cover z-10 top-[30px]" />
       <img src='/img/blogleftarrow.png' alt='bg'  className="absolute z-10 top-[2200px]" /> 

       <div className="relative z-10 flex justify-center align-center w-full top-[20px] lg:top-[100px]">
          <div className="w-[100%] md:w-[80%] flex flex-col lg:flex-row ">
              <div className="w-[80%] md:w-[65%] lg:w-auto ml-[20%] md:ml-[30%] lg:ml-[0%] flex  flex-row lg:flex-col flex-wrap lg:flex-nowrap items-center lg:items-start flex-grow lg:flex-grow-0 lg:basis-[40%]">
                  <p className="font-sabor px-2 text-[40px]">Where</p>
                  <p className=" font-sora text-[60px] lg:text-[80px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
                    Bytes 
                  </p>
                  <p className=" font-sabor px-2 text-[40px]">Become</p>
                  <p className=" font-sora text-[60px] lg:text-[80px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
                  Brilliance  
                  </p>
                  <p className=" font-sabor px-2 text-[40px]">In Every Blog</p>
                  <Button
                    className={cn(
                      "hidden lg:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[10px]"
                    )}
                  >
                    Book a Discovery Call
                  </Button>
                <div className="hidden  lg:flex justify-end items-end lg:ml-[50%] HD:ml-[60%] MHD:ml-[65%] FHD:ml-[67%] mr-[-30%] mt-[35px]">
                  <img src='/img/emailcard.png' alt='blogEmail' className=" "   />
                </div>
              </div>
                <img src='/img/BlogHeroImage.png' alt='blogHero' className=" hidden lg:block w-[50%] h-[580px] ml-[-90px] mt-[60px] z-20 "   />
                <img src='/img/BlogHeroMobile.png' alt='blogHeromobile' className="lg:hidden"   />

                <div className="hidden lg:block mt-[330px] ml-[-40px]">
                  <img src='/img/PhoneCard.png' alt='blogEmail' className=" h-auto "   />
                </div>
          </div>
      </div>

      <div className="mt-[18%] min-[1023px]:hidden">
            <CarouselMobile />
      </div>

      <div className="mt-[8%]" >
        <PortfolioNavDesktop />
      </div>
      
     
    </div>
  );
}

 