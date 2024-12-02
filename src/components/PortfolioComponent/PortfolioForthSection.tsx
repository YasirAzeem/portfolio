import * as React from "react";


export default function PortfolioForthSection({ marginTop, marginBottom, smMarginTop, showImage  }) {
 
  return (
    <div className={`relative z-[999] ${marginTop} ${marginBottom}`}>
      {showImage && (
        <img
            src="/portfolio-assets/worldmap.png"
            alt="Bg Blog"
            className="hidden lg:block absolute inset-0 w-[90%] XSM:w-[80%] md:w-[70%] object-cover z-0"
            style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
        />
        )}

<img src='/portfolio-assets/respsoftwarebg.png' alt='bg'  className="md:hidden absolute w-full z-10 top-[-340px] sm:top-[-400px]" /> 
    <img src='/portfolio-assets/forthPFbg.png' alt='bg'  className="hidden lg:block w-full absolute z-0 lg:top-[-350px] HD:top-[-400px] HDMAX:top-[-450px] MHD:top-[-550px] FHD:top-[-600px] left-0" /> 


      {/* Text positioned at the top of the image */}
      <div className={`absolute ${smMarginTop} left-0 right-0 z-10 flex justify-center items-center w-full`}>
        <div className="flex flex-col mt-[20px] lg:mt-[50px] w-[95%] XSM:w-[80%]">
          <p className="font-preahvihear font-normal text-[24px] text-center">
            We are currently looking to join a cross-functional team
        </p>    
        <p className=" font-preahvihear font-normal text-[17px] text-center">
            that values improving people's lives through accessible design
        </p>
         
        </div>
      </div>


      <div className="relative flex justify-center items-center gap-[10px] z-[9999]">
        <img src="/portfolio-assets/Figma.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
        <img src="/portfolio-assets/React.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
        <img src="/portfolio-assets/Cplus.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
        <img src="/portfolio-assets/node.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
        <img src="/portfolio-assets/purple2.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
        <img src="/portfolio-assets/JS.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
        <img src="/portfolio-assets/CSS.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
      </div>
      <div className="relative flex justify-center items-center gap-[10px] mt-[10px] z-[9999]">
      <img src="/portfolio-assets/XD.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
      <img src="/portfolio-assets/Next.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
        <img src="/portfolio-assets/Group.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
        <img src="/portfolio-assets/Illustrator.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
        <img src="/portfolio-assets/Express.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
        <img src="/portfolio-assets/Mongo.png" alt="Bg Blog" className="w-[41px] h-[41px] XSM:w-[50px] XSM:h-[50px] sm:w-auto sm:h-auto" />
      </div>
    </div>
  );
}
