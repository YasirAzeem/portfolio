import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import All from '../../../public/img/AllApps.png'
import Blockchain from '../../../public/img/Blockchain.png'
import AI from '../../../public/img/AI.png'
import WebDevelopment from '../../../public/img/WebDevelopment.png'
import Ecommerce from '../../../public/img/Ecommerce.png'

import Image from "next/image";

export default function BlogSlider() {
  const cards = [
    {
      image: All,
      title: "All",
    },
    // {
    //   image: Blockchain,
    //   title: "Blockchain",
    // },
    // {
    //   image: AI,
    //   title: "AI",
    // },
    // {
    //   image: WebDevelopment,
    //   title: "Web Development",
    // },
    // {
    //   image: Ecommerce,
    //   title: "Ecommerce",
    // },
  ];

  return (
    <div className="bg-[linear-gradient(80.42deg,rgba(0,0,0,0.16)_25.25%,rgba(83,84,108,0.16)_98.05%)] border-[1px] border-border rounded-[20px] max-[1444px]:w-[70%] py-[20px] px-[40px]">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full min-[1444px]:w-[1300px] bg-[linear-gradient(79.59deg,_rgba(51,51,62,0.16)_6.21%,_rgba(83,84,108,0.16)_98.02%)]  px-10 py-3 rounded-[20px]"
      >
        <CarouselContent className="">
          {cards.map((item, index) => (
            <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/5">
              <div className="p-1">
                <div className="flex justify-center h-full items-center gap-2">
                  <Image
                    src={item.image}
                    className="w-auto h-auto"
                    width={1}
                    height={1}
                    alt="card"
                    priority
                  />
                  <p className="whitespace-nowrap font-saborDisplaySSK font-normal text-[14px]">{item.title}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="min-[1200px]:hidden bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] -left-9" />
        <CarouselNext className="min-[1200px]:hidden bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] -right-9" />
      </Carousel>
    </div>
  );
}
