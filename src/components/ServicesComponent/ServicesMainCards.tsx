import React from 'react';
import './customstyles.css';
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ServicesCardProps = {
  onViewDetails: (blog: string) => void;
};

const ServicesBorderedMainCards = ({ onViewDetails  }: ServicesCardProps) => {
  return (
   <div className='w-full flex justify-center items-center'>
    <div className='w-[90%] lg:w-[70%] flex justify-center items-center z-[99999]'>
        <div className='w-full flex flex-col items-center gap-[40px] XSM:gap-[20px] lg:gap-[10px] HD:[0px]'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-[20px] w-full'>
                <div className='lg:hidden'>
                    <img src="/services/aiimgSCard.png" alt="img" className='w-[100%]'/>
                </div>

                <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start w-[50%]'>
                    <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] text-center lg:text-left w-[320px] lg:w-[400px]'>ArtificaI Intelligence.</p>
                    <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] text-center lg:text-left XXSM:w-[400px] lg:w-[500px]'>Application Development.</p>
                    <div className='lg:flex justify-end items-center w-[480px] hidden'>
                        <img src="/portfolio-assets/portfolioLine.svg" alt="line" />
                    </div>
                    <img src="/portfolio-assets/portfolioLine.svg" alt="line" className='lg:hidden' />
                    <p className='font-sabor font-normal text-[16px] lg:text-[16px] text-[#CCD6F6] text-center lg:text-left w-[350px] XSM:w-[360px] MHD:w-[620px] mt-[15px]'>Build cutting edge AI solutions that automate operations, multiply profits, and cut costs. Full-cycle development of intelligent solutions to empower your business.</p>
                    <Button
                    className={cn(
                      " bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[220px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[20px]"
                    )}
                    onClick={() => onViewDetails("AI")}
                  >
                    Book a Discovery Call
                  </Button>
                </div>

                <div className='w-[50%] hidden lg:block'>
                    <img src="/services/aiimgSCard.png" alt="img" className='w-[100%]'/>
                </div>

            </div>

            <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-[10px] HD:gap-[20px] MHD:gap-[40px]'>
                <div className='w-auto lg:w-[50%]'>
                    <img src="/services/mobileappdevimg.png" alt="img" className=''/>
                </div>

                <div className='w-[50%] flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                    <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] text-center lg:text-left w-[300px] lg:w-[400px]'>Mobile Application</p>
                    <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] text-center lg:text-left lg:w-[500px]'>Development.</p>
                    <div className='flex justify-end items-center w-[490px] hidden lg:block'>
                        <img src="/portfolio-assets/portfolioLine.svg" alt="line" className='hidden lg:block' />
                    </div>
                    <img src="/portfolio-assets/portfolioLine.svg" alt="line" className='lg:hidden' />
                    <p className='font-sabor font-normal text-[16px] lg:text-[16px] text-[#CCD6F6] text-center lg:text-left lg:w-[560px] w-[350px] XSM:w-[360px] MHD:w-[620px] mt-[15px]'>Build enterprise grade mobile applications to complement your software solutions. Full-cycle development of software applications to bring your applications to your customers’ fingertips.</p>
                    <Button
                    className={cn(
                      " bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[220px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[20px]"
                    )}
                    onClick={() => onViewDetails("MobileApplication")}
                  >
                    Book a Discovery Call
                  </Button>
                </div>

            </div>

            <div className='w-full flex flex-col lg:flex-row justify-center items-center'>
                <div className='lg:hidden'>
                    <img src="/services/web-app-dev-img.png" alt="img" className='w-[100%]'/>
                </div>

                <div className='w-[50%] flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                    <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] text-center lg:text-left lg:w-[400px] w-[270px]'>Web Application Development.</p>
                    {/* <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] text-center lg:text-left lg:w-[500px]'>Application .</p>
                    <div className='flex justify-end items-center w-[490px] hidden lg:block'>
                        <img src="/portfolio-assets/portfolioLine.svg" alt="line" className='hidden lg:block' />
                    </div> */}
                    <img src="/portfolio-assets/portfolioLine.svg" alt="line" />
                    <p className='font-sabor font-normal text-[16px] lg:text-[16px] text-[#CCD6F6] text-center lg:text-left w-[350px] XSM:w-[360px] MHD:w-[620px] mt-[15px]'>Build enterprise grade software applications at a fraction of the costs of traditional agencies. Full-cycle development of software applications to bring your business into the digital age.</p>
                    <Button
                    className={cn(
                      " bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[220px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[20px]"
                    )}
                    onClick={() => onViewDetails("WebApplication")}
                  >
                    Book a Discovery Call
                  </Button>
                </div>

                <div className='w-[50%] hidden lg:block'>
                    <img src="/services/web-app-dev-img.png" alt="img" className='w-[100%]'/>
                </div>

            </div>

            <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-[10px] HD:gap-[20px] MHD:gap-[40px]'>
                <div className='w-auto lg:w-[50%]'>
                    <img src="/services/crytpblockchainimg.png" alt="img" className=''/>
                </div>

                <div className='w-[50%] flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                    <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] text-center lg:text-left w-[360px] lg:w-[500px]'>Crypto And Blockchain</p>
                    <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] text-center lg:text-left lg:w-[500px]'>Development.</p>
                    <div className='flex justify-end items-center w-[490px] hidden lg:block'>
                        <img src="/portfolio-assets/portfolioLine.svg" alt="line" className='hidden lg:block' />
                    </div>
                    <img src="/portfolio-assets/portfolioLine.svg" alt="line" className='lg:hidden' />
                    <p className='font-sabor font-normal text-[16px] lg:text-[16px] text-[#CCD6F6] text-center lg:text-left lg:w-[560px] w-[350px] XSM:w-[360px] MHD:w-[620px] mt-[15px]'>Build enterprise grade blockchain applications to enter the next generation of the web. Full-cycle development of blockchain applications to strengthen security, cut costs, and improve efficiencies of your operations.</p>
                    <Button
                    className={cn(
                      " bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[220px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[20px]"
                    )}
                    onClick={() => onViewDetails("Blockchain")}
                  >
                    Book a Discovery Call
                  </Button>
                </div>

            </div>          
        </div>
    </div>
   </div>
  );
};

export default ServicesBorderedMainCards;
