import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import AllBoxBlue from "@public/Carousal/alliconBlue.svg";
import AllBoxWhite from "@public/Carousal/allicon.svg";
import BlockChainBoxBG from "@public/Carousal/blockchainicon.svg";
import BlockChainBoxBlue from "@public/Carousal/blockchainiconBlue.svg";
import AIBoxBG from "@public/Carousal/aiicon.svg";
import AIBoxBlue from "@public/Carousal/aiiconBlue.svg";
import WebDevBoxBG from "@public/Carousal/webdevelopment.svg";
import WebDevBoxBlue from "@public/Carousal/webdevelopmentBlue.svg";
import EcomBoxBg from "@public/Carousal/Ecommerce.svg";
import EcomBoxBlue from "@public/Carousal/EcommerceBlue.svg"

const cards = [
  {
    images: {
      default: AllBoxWhite,
      active: AllBoxBlue,
    },
    title: "All",
  },
  {
    images: {
      default: BlockChainBoxBG,
      active: BlockChainBoxBlue,
    },
    title: "Blockchain",
  },
  {
    images: {
      default: EcomBoxBg,
      active: EcomBoxBlue,
    },
    title: "Ecommerce",
  },
  {
    images: {
      default: AIBoxBG,
      active: AIBoxBlue,
    },
    title: "AI",
  },
  {
    images: {
      default: WebDevBoxBG,
      active: WebDevBoxBlue,
    },
    title: "Web",
  },
];

type Props = {
  selectedTab: string;
  onSelectTab: React.Dispatch<React.SetStateAction<string>>;
};

const CarouselMobile = ({ selectedTab, onSelectTab }: Props) => {
  return (
    <div className="flex justify-center relative z-50 items-center mt-8 HD:mt-10 min-[1023px]:hidden">
      <div className="bg-[linear-gradient(80.42deg,rgba(0,0,0,0.16)_25.25%,rgba(83,84,108,0.16)_98.05%)] border-[1px] border-border rounded-[20px] w-[95%] XSM:w-[90%] py-[9px] px-[0px] XSM:px-[40px]">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-10 XSM:px-6 py-2 rounded-[20px]"
        >
          <CarouselContent>
            {cards.map((item, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className={`p-1 cursor-pointer ${
                    selectedTab === item.title ? "text-[#4349FF]" : ""
                  }`}
                  onClick={() => onSelectTab(item.title)}>
                  <div className="flex justify-center h-full items-center gap-2 md:gap-3">
                    <Image
                     src={selectedTab === item.title ? item.images.active : item.images.default}
                      className={`w-5 h-5 md:w-auto md:h-auto ${
                        selectedTab === item.title ? "filter-blue" : ""
                      }`}
                     /*  className="w-auto h-auto" */
                      width={1}
                      height={1}
                      alt="card"
                      priority
                    />
                    <p className={'font-saborDisplaySSK font-normal text-[15px] XSM:text-[16px]'}>{item.title}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] left-2 XSM:-left-8" />
          <CarouselNext className="bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)] right-2 XSM:-right-8" />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselMobile;
