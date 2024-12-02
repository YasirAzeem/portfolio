import React from 'react'

const FifthIconSection = () => {
  return (
    <div className="relative mt-[150px] XSM:mt-[200px] sm:mt-[150px] md:mt-[190px] mb-[30px] md:mb-[20px] lg:mb-[120px] HD:mb-[10px] MHD:mb-[0px] z-[999]">
        {/* <img
            src="/portfolio-assets/worldmap.png"
            alt="Bg Blog"
            className="hidden lg:block absolute inset-0 w-[90%] md:w-[70%] object-cover z-0"
            style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
        /> */}

      {/* Text positioned at the top of the image */}
      <div className="absolute top-[-120px] XSM:top-[-140%] sm:top-[-70%] md:top-[-60%] MHD:top-[-70%] left-0 right-0 z-10 flex justify-center items-start">
        <div className="flex flex-col mt-[20px]">
          <p className="font-preahvihear font-normal text-[18px] XSM:text-[24px] text-center">
            We are currently looking to join a cross-functional team
        </p>    
        <p className=" font-preahvihear font-normal text-[14px] XSM:text-[17px] text-center">
            that values improving people's lives through accessible design
        </p>
         
        </div>
      </div>


      <div className="relative flex justify-center items-center gap-[10px]">
        <img src="/portfolio-assets/Figma.png" alt="Bg Blog" className="" />
        <img src="/portfolio-assets/Cplus.png" alt="Bg Blog" className="" />
        <img src="/portfolio-assets/node.png" alt="Bg Blog" className="" />
        <img src="/portfolio-assets/purple2.png" alt="Bg Blog" className="" />
        <img src="/portfolio-assets/JS.png" alt="Bg Blog" className="" />
        <img src="/portfolio-assets/CSS.png" alt="Bg Blog" className="" />
        <img src="/portfolio-assets/XD.png" alt="Bg Blog" className="" />
      </div>
      <div className="relative flex justify-center items-center gap-[10px] mt-[10px]">
      <img src="/portfolio-assets/Next.png" alt="Bg Blog" className="" />
        <img src="/portfolio-assets/Group.png" alt="Bg Blog" className="" />
        <img src="/portfolio-assets/Illustrator.png" alt="Bg Blog" className="" />
        <img src="/portfolio-assets/Express.png" alt="Bg Blog" className="" />
        <img src="/portfolio-assets/Mongo.png" alt="Bg Blog" className="" />
      </div>
    </div>
  )
}

export default FifthIconSection