import Image from "next/image";
import React from "react";
import beforeProcess from "../../public/art/before-processs.png";
import illustration from "../../public/art/illustration 2.svg";
import illustration2 from "../../public/art/illustration-2.svg";

import trickyChat from "../../public/art/tricky-chat.png";
import chat1 from "../../public/art/chat1.png";
import chat2 from "../../public/art/chat2.png";
import chat3 from "../../public/art/chat3.png";
import chat4 from "../../public/art/chat4.png";
import chat5 from "../../public/art/chat5.png";
import line from "../../public/art/line3.png";
import { Separator } from "./ui/separator";

export default function BeforeProcess() {
  const data = [
    {
      icon: chat1,
      text: "We build custom teams tailored to your specific technical and cultural needs, ensuring perfect integration with your existing team and company culture.",
    },
    {
      icon: chat2,
      text: "You can choose your level of involvement, from hands-on management to daily updates, allowing you to focus on your core business operations.",
    },
    {
      icon: chat3,
      text: "Our teams integrate into your workflows, communication tools, and management structures, guaranteeing you immediate value.",
    },
    {
      icon: chat4,
      text: "We guarantee to ship a new feature or improvement within the first 30 days or continue working for free, offering you a risk-free way to test our services.",
    },
    {
      icon: chat5,
      text: "We proactively manage technology trends and adapt your team to stay at the cutting edge, helping you maintain a competitive advantage without constant oversight.",
    },
  ];

  return (
    <div className="relative min-h-[800px] max-lg:mb-[20px] -mt-[6rem] lg:mt-0">
      <Image
        src={illustration}
        alt="before process"
        width={500}
        height={500}
        className="hidden lg:block FHD:absolute HD:absolute inset-0 m-auto max-sm:-mb-20 sm:max-lg:-mb-36 z-50 select-none"
      />
       <Image
        src={illustration}
        alt="before process"
        width={846}
        height={400}
        className="hidden HD:block FHD:absolute HD:absolute inset-0 m-auto max-sm:-mb-20 sm:max-lg:-mb-36 z-50 select-none"
      />
      <Image
        src={illustration2}
        alt="before process"
       /*  width={846}
        height={400} */
        width='400px'
        height='300px'
        className="block lg:hidden FHD:absolute HD:absolute inset-0 m-auto max-sm:-mb-20 sm:max-lg:-mb-36 z-50 select-none"
      />
      {/* <img
        src="/art/ecliptic.png"
        className="absolute left-1/2 -translate-x-1/2 top-[-30px]  rotate-[90deg] blur w-1/2 select-none"
      /> */}
      {/* <img
        src="/art/ecliptic.png"
        className="absolute left-1/2 -translate-x-1/2 bottom-0  rotate-[90deg] blur w-1/2"
      /> */}
      <div className="-mt-[23rem] lg:mt-0 container grid max-lg:justify-center lg:grid-cols-2 justify-between gap-y-8 relative z-[999]">
        {data.map((item, index) => (
          <TrickyChat key={index} icon={item.icon} text={item.text} />
        ))}
        <div className="relative even:ms-auto">
          <img src={"/art/tricky-chat-new1.png"} alt="tricky chat" className="" />
          <div className="absolute inset-0 m-auto flex p-3.5 items-center justify-center ">
            <p className="text-[28px] lg:text-[35px] font-sabor text-center">
              Unlocking Ideas with <br /> Intelligent Solutions
            </p>
            <Image
              src={line}
              alt="line"
              width={154}
              height={4}
              className="absolute bottom-[15%] right-[13%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrickyChat({ icon, text }: { icon: any; text: string }) {
  return (
    <div className="relative even:ms-auto ">
      <img
        src={"/art/tricky-chat-new1.png"}
        alt="tricky chat"
        className="max-sm:w-full max-[420px]:h-[160px]"
      />
      <div className="absolute inset-0 m-auto flex p-3.5 ">
        <Image
          src={icon}
          alt="chat1"
          width={48}
          height={48}
          className="w-12 h-12 mx-1 mt-3 md:ms-5 md:mt-5 object-scale-down"
        />
        <Separator
          className="h-[113px] mx-2 md:mx-4 my-auto "
          orientation="vertical"
        />
        <p className="text-[12px] min-[430px]:text-[15px]  sm:text-lg font-sabor w-[300px] leading-[24px] my-auto ">
          {text}
        </p>
      </div>
    </div>
  );
}
