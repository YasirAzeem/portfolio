import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import fairtrader from "../../public/art/fairtrader.svg";
import foundation from "../../public/art/companies/foundation.svg";
import micro1 from "../../public/art/companies/micro1.svg";
import blockhouse from "../../public/art/companies/blockhouse.svg";
import fliteCity from "../../public/art/companies/flite city.svg";
import appraiseall from "../../public/art/companies/appraiseall.svg";
import convrx from "../../public/art/companies/convrx.svg";
import Garuda from "../../public/art/companies/Garuda.svg";

import apesImg from "../../public/art/companies/apes.png";
import billionImg from "../../public/art/companies/billioninvest.png";
import bundleBeeImg from "../../public/art/companies/bundleBee.png";
import laminaImg from "../../public/art/companies/lamina.png";
import rentImg from "../../public/art/companies/rentappLogo.png";
import autogramImg from "../../public/art/companies/autogram.png";
import rahcImg from "../../public/art/companies/rahco.png";

import Image from "next/image";

export default function Slider() {
  const cards = [
    {
      image: billionImg,
      title: "Billio Trust Invest",
    },
    {
      image: bundleBeeImg,
      title: "Bundle Bee",
    },
    {
      image: apesImg,
      title: "APES Trading",
    },
    {
      image: rahcImg,
      title: "RAHCo",
    },
    {
      image: rentImg,
      title: "RENT App",
    },
    {
      image: laminaImg,
      title: "Lamina",
    },
    {
      image: autogramImg,
      title: "Autogram",
    },
    // {
    //   image: Garuda,
    //   title: "",
    // },
  ];

  return (
    <div className="bg-[linear-gradient(80.42deg,rgba(0,0,0,0.16)_25.25%,rgba(83,84,108,0.16)_98.05%)] border-[1px] border-border rounded-[20px] max-[1444px]:w-[70%] py-[20px] px-[40px]">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full min-[1444px]:w-[1300px] bg-[linear-gradient(79.59deg,_rgba(51,51,62,0.16)_6.21%,_rgba(83,84,108,0.16)_98.02%)]  px-6 py-3 rounded-[20px]"
      >
        <CarouselContent className="">
          {cards.map((item, index) => (
            // <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4">
            <CarouselItem key={index} className=" md:basis-2/4 lg:basis-1/3">
              <div className="p-1">
                <div className="flex justify-center h-full items-center gap-3">
                  <Image
                    src={item.image}
                    className="w-auto h-auto"
                    width={50}
                    height={50}
                    alt="card"
                    priority
                  />
                  <p>{item.title}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gradient-to-r from-teal-400 to-blue-500 " />
        <CarouselNext className="bg-gradient-to-r from-teal-400 to-blue-500 " />
      </Carousel>
    </div>
  );
}
