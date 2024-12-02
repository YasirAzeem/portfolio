import * as React from "react";

export default function PortfolioMobileForthSection() {
  return (
    <div className="flex justify-center items-center w-full z-[999]" >
      <div className="w-[98%] XXSM:w-[95%] z-[999]">
        <div className="flex flex-col justify-center items-center">

          {/* Text positioned at the top of the image */}
          <div className="flex justify-center items-start">
            <div className="flex flex-col mt-[20px] text-center">
              <p className="font-preahvihear font-normal text-[24px]">
                We are currently looking to join a cross-functional team
              </p>    
              <p className="font-preahvihear font-normal text-[17px]">
                that values improving people's lives through accessible design
              </p>
            </div>
          </div>

          {/* Images Section */}
          <div className="flex justify-center items-center flex-wrap gap-[10px] mt-[20px] z-[999]">
            <img src="/portfolio-assets/Figma.png" alt="Figma" className="z-[99999]" />
            <img src="/portfolio-assets/Cplus.png" alt="C++" className="z-[99999]"/>
            <img src="/portfolio-assets/node.png" alt="Node.js" className="z-[99999]"/>
            <img src="/portfolio-assets/purple2.png" alt="Bg Blog" className="z-[99999]" />
            <img src="/portfolio-assets/JS.png" alt="JavaScript" className="z-[99999]"/>
            <img src="/portfolio-assets/CSS.png" alt="CSS" className="z-[99999]"/>
            <img src="/portfolio-assets/XD.png" alt="Adobe XD" className="z-[99999]"/>
            <img src="/portfolio-assets/Next.png" alt="Next.js" className="z-[99999]"/>
            <img src="/portfolio-assets/Group.png" alt="Group" className="z-[99999]"/>
            <img src="/portfolio-assets/Illustrator.png" alt="Illustrator" className="z-[99999]"/>
            <img src="/portfolio-assets/Express.png" alt="Express" className="z-[99999]"/>
            <img src="/portfolio-assets/Mongo.png" alt="MongoDB" className="z-[99999]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
