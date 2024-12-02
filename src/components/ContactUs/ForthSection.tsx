import React, {useRef} from 'react'
import Image from "next/image";
import eclipticRight from "../../../public/art/ecliptic-right.png";
// import edgyBox from "../../../public/art/edgy-box.png";
import edgyBox from "../../../public/art/tricky-chat-new1.png";
import CountUp from "react-countup";
import { useIntersectionObserver } from "../IntersectionObserver/IntersectionObserver";

export const ForthSection = () => {
    const ref = useRef();
    const isInView = useIntersectionObserver(ref);
  return (
    <div className='hidden xl:flex flex justify-center iems-center'>
        <div className='w-full lg:w-[70%]' ref={ref}>
         <div className="flex justify-center flex-wrap HD:flex-nowrap items-center gap-1 MHD:gap-3 mt-[15px] relative w-full" >
            <div className="w-[400px] lg:w-[35%] HDMAX:w-[33%] h-[130px] max-sm:w-[300px] max-sm:h-[122px] relative">
            <Image
                src={edgyBox}
                width={400}
                height={130}
                alt="edgy-box"
                priority
                className=" w-[400px] MHD:w-[430px] h-[130px] max-sm:w-[300px] max-sm:h-[122px]"
            />
            <div className="absolute max-sm:top-4 inset-0 top-0 MHD:left-[-50px] z-10 max-sm:text-[30px] text-[32px] sm:text-[40px] font-sabor text-center">
                Trusted by{" "}
                <span className="max-sm:text-[30px] text-[42px] sm:text-[50px] text-[#00B2FF]">
                {isInView && <CountUp start={0} end={200} duration={3} />}+
                </span>{" "}
                {/* <span className='mt-[-10px]'>Companies</span> */}
            </div>
            <div className="absolute max-sm:top-4 inset-0 top-[60px] MHD:left-[-80px] z-10 max-sm:text-[30px] text-[32px] sm:text-[40px] font-sabor text-center">
                <span className='mt-[-10px]'>Companies</span>
            </div>
            </div>

            <div className="max-sm:w-[300px] max-sm:h-[122px] w-[400px] lg:w-[31%] HDMAX:w-[33%] h-[130px] relative">
            <Image
                src={edgyBox}
                width={400}
                height={152}
                alt="edgy-box"
                priority
                className=" w-[400px] MHD:w-[430px] h-[130px] max-sm:w-[300px] max-sm:h-[122px]"
            />
            <div className="absolute inset-0 max-sm:top-4 top-2 MHD:left-[-50px] z-10 max-sm:text-[30px] text-[32px] sm:text-[40px] font-sabor text-center">
                To Nail{" "}
                <span className="max-sm:text-[30px] text-[42px] sm:text-[50px] text-[#00B2FF]">
                {isInView && <CountUp start={0} end={8000} duration={3} />}+
                </span>{" "}
               {/*  <br /> Deliverables */}
            </div>
            <div className="absolute inset-0 max-sm:top-4 top-2 MHD:left-[-50px] lg:top-[60px] z-10 max-sm:text-[30px] text-[32px] sm:text-[40px] font-sabor text-center">
               Deliverables 
            </div>
            </div>
            <div className="w-[400px] h-[130px] max-sm:w-[300px] lg:w-[33%] max-sm:h-[122px] relative z-20">
            <Image
                src={edgyBox}
                width={400}
                height={152}
                alt="edgy-box"
                priority
                className=" w-[400px] MHD:w-[430px] h-[130px] max-sm:w-[300px] max-sm:h-[122px]"
            />
            <div className="absolute top-1/2 -translate-y-1/2 lg:left-1/2  -translate-x-1/2 whitespace-nowrap z-10 text-[30px] sm:text-[40px] font-sabor text-center">
                Save{" "}
                <span className="text-[30px] sm:text-[50px] text-[#00B2FF]">
                ${isInView && <CountUp start={0} end={5} duration={3} />}
              million
                </span>{" "}
            </div>
            </div>
            {/* <Image
            src={eclipticRight}
            className="absolute -bottom-40 left-0"
            width={500}
            height={500}
            alt="last-hero"
            priority
            /> */}
          </div>   
       </div>
    </div>
  )
}
