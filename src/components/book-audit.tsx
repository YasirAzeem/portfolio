import Image from "next/image";
import React, { useRef } from "react";
import lastHero from "../../public/art/last-hero.png";
import line from "../../public/art/line1.png";
import globe from "../../public/art/globe.png";
import ecliptic from "../../public/art/ecliptic.png";
import eclipticRight from "../../public/art/ecliptic-right.png";
import edgyBox from "../../public/art/edgy-box.png";
import trickyImg from "../../public/art/tricky-chat-new1.png";
import GradientBtn from "./gradient-btn";
import globeMoble from "../../public/art/globe-mobile.svg";
import CountUp from "react-countup";
import { useIntersectionObserver } from "./IntersectionObserver/IntersectionObserver";

export default function BookAudit() {
  const ref = useRef();
  const isInView = useIntersectionObserver(ref);

  return (
    <div className="mt-10 lg:mt-48 relative bg-black">
      <Image
        src={lastHero}
        className="mx-auto max-w-[172px]"
        width={262}
        height={201}
        alt="last-hero"
        priority
      />
      <Image
        src={globe}
        className="absolute -top-[200px] max-lg:hidden -right-0"
        width={440}
        height={934}
        alt="last-hero"
        priority
      />
      {/* <Image
        src={ecliptic}
        className="absolute -top-[100px] w-auto left-0"
        width={500}
        height={500}
        alt="last-hero"
        priority
      /> */}

      <Image
        src="/landing/Auditbg.png"
        className="absolute -top-[80px] w-auto left-0 z-0 hidden lg:block"
        width={500}
        height={500}
        alt="last-hero"
        priority
      />
      <div className="flex flex-col items-center justify-center ">
        <div className="md:w-[85%] mt-5 md:mt-0 flex justify-center md:bg-[linear-gradient(to_right,#0059ff3b_0%,transparent_20%,transparent_80%,#0059ff3b_100%)]">
          <p className="text-[25px] sm:text-[45px] lg:text-[60px] font-sora text-center font-semibold relative w-fit">
            Book a Technical <span className="text-[#0E35E3]">Audit</span>
            <Image
              src={line}
              width={311}
              height={8}
              alt="line"
              priority
              className="hidden md:block absolute max-[459px]:left-1/3 max-lg:w-[230px] max-sm:w-[150px] max-sm:top-[45px] max-sm:right-[-30px] max-lg:right-[-50px] top-[75px] -right-20"
            />
          </p>
        </div>
        <p className="text-xl leading-9 md:text-2xl mt-4 md:mt-10 mb-8 font-sabor max-w-[951px] text-center px-4">
          {/* Book a free strategy session with us today and receive a personalized
          roadmap outlining your areas of improvement and potential cost-saving
          measures—no obligation to work with us. */}
          Gain valuable insights into your software's performance and reliability with our expert technical audit services. Let us help you identify gaps and enhance your system's efficiency.
        </p>
        <GradientBtn
          text="Free Consultation"
          url="https://calendly.com/yasir-programmx/30min"
          className="z-[9999]"
        />
        <Image
          src={globeMoble}
          width={261}
          height={381}
          alt="edgy-box"
          priority
          className="w-[261px] h-[381px] md:hidden absolute right-0 mt-48"
        />
      </div>
      <div
        className="flex justify-center flex-wrap items-center gap-6 mt-14 relative"
        ref={ref}
      >
        <div className="  w-[400px] h-[152px] max-sm:w-[300px] max-sm:h-[122px] relative">
          <Image
            src={trickyImg}
            width={400}
            height={152}
            alt="edgy-box"
            priority
            className=" w-[400px] h-[152px] max-sm:w-[300px] max-sm:h-[122px]"
          />
          <div className="absolute max-sm:top-4 inset-0 top-2 z-10 max-sm:text-[30px] text-[32px] sm:text-[40px] font-sabor text-center">
            {/* Trusted by{" "}
            <span className="max-sm:text-[30px] text-[42px] sm:text-[50px] text-[#00B2FF]">
              {isInView && <CountUp start={0} end={200} duration={3} />}+
            </span>{" "}
            <br /> Companies */}
            Trusted by Leading Companies
          </div>
        </div>
        <div className=" max-sm:w-[300px] max-sm:h-[122px] w-[400px] h-[152px] relative">
          <Image
            src={trickyImg}
            width={400}
            height={152}
            alt="edgy-box"
            priority
            className=" w-[400px] h-[152px] max-sm:w-[300px] max-sm:h-[122px]"
          />
          <div className="absolute inset-0 max-sm:top-4 top-2 z-10 max-sm:text-[30px] text-[32px] sm:text-[40px] font-sabor text-center">
            {/* To Nail{" "}
            <span className="max-sm:text-[30px] text-[42px] sm:text-[50px] text-[#00B2FF] font-sans">
              {isInView && <CountUp start={0} end={8000} duration={3} />}+
            </span>{" "}
            <br /> Deliverables */}
            Track our Record with Top Companies
          </div>
        </div>
        <div className=" w-[400px] h-[152px] max-sm:w-[300px] max-sm:h-[122px] relative z-20">
          <Image
            src={trickyImg}
            width={400}
            height={152}
            alt="edgy-box"
            priority
            className=" w-[400px] h-[152px] max-sm:w-[300px] max-sm:h-[122px]"
          />
          <div className="absolute inset-0 max-sm:top-4 top-2 z-10 max-sm:text-[30px] text-[32px] sm:text-[40px] font-sabor text-center">
            {/* Save{" "}
            <span className="text-[30px] sm:text-[50px] text-[#00B2FF]">
              ${isInView && <CountUp start={0} end={5} duration={3} />}
              million
            </span>{" "} */}
            Ensure your Projects Nail Deliverables
          </div>
        </div>
        <Image
          src={eclipticRight}
          className="absolute -bottom-40 w-auto right-0"
          width={500}
          height={500}
          alt="last-hero"
          priority
        />
      </div>
    </div>
  );
}
