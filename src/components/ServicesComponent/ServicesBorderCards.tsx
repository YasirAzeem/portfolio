import React from 'react';
import './customstyles.css';

const ServicesBorderedCards = () => {
  return (
   <div className='w-full flex justify-center items-center  z-[99999]'>
    <div className='w-[90%] lg:w-[70%] flex justify-center items-center'>
        <div className='w-full flex flex-col lg:flex-row justify-center items-center lg:flex-wrap gap-[30px] lg:gap-[1%] lg:gap-y-[20px]'>

        <div className="border-wrapper flex items-center ">
          <div className="slanted-borderCards h-[120px] w-[280px] lg:h-[120px] lg:w-[250px] MHD:w-[300px] flex items-center justify-center">
            <div className="content-wrapper">
              <div>
                <img src="/services/aicardimg.png" alt="icons" className="w-[53px] h-[58px]" />
              </div>
              <div className="text-content">
                <p className="font-poppins text-[18px]  text-[#0E35E3]">Artificial Intelligence.</p>
                <p className="font-saborDisplaySSK text-[25px] leading-[27px]">Application Development.</p>
              </div>
            </div>
          </div>
        </div>


            {/* <div className='slanted-borderCards rounded-[20px] flex items-center gap-[20px] bg-[linear-gradient(105.29deg, #0E0C15 19.16%, rgba(14, 12, 21, 0) 122.84%)]'>
                    <div className=''>
                        <img src='/services/aicardimg.png' alt='icons' className='w-[53px] h-[58px]' />
                    </div>
                    <div className='flex flex-col gap-[3px]'>
                        <p className="font-poppins text-[18px] text-[#0E35E3]">Artificial Intelligence.</p>
                        <p className="font-saborDisplaySSK text-[25px]  leading-[27px]">Application Development.</p>
                    </div>
            </div> */}

<div className="border-wrapper flex justify-center items-center">
          <div className="slanted-borderCards h-[120px] w-[280px] lg:h-[120px] lg:w-[250px] MHD:w-[300px] flex items-center justify-center">
            <div className="content-wrapper">
                    <div className=''>
                        <img src='/services/mobileappimg.png' alt='icons' className='w-[62px] h-[62px]' />
                    </div>
                    <div className='flex flex-col gap-[3px]'>
                        <p className="font-saborDisplaySSK text-[25px]  leading-[27px]">Mobile Application</p>
                        <p className="font-poppins text-[18px]  text-[#0E35E3]">Development</p>

                    </div>
            </div>
            </div>
        </div>

            <div className="border-wrapper flex justify-center items-center">
          <div className="slanted-borderCards h-[120px] w-[280px] lg:h-[120px] lg:w-[250px] MHD:w-[300px] flex items-center justify-center">
            <div className="content-wrapper">
                    <div className=''>
                        <img src='/services/webappimg.png' alt='icons' className='w-[53px] h-[58px]' />
                    </div>
                    <div className='flex flex-col gap-[3px]'>
                        <p className="font-saborDisplaySSK text-[25px]  leading-[27px]">Web Application</p>
                        <p className="font-poppins text-[18px]  text-[#0E35E3]">Development</p>
                    </div>
            </div>
            </div>
        </div>

            <div className="border-wrapper flex justify-center items-center">
          <div className="slanted-borderCards h-[120px] w-[280px] lg:h-[120px] lg:w-[250px] MHD:w-[300px] flex items-center justify-center">
            <div className="content-wrapper">
                    <div className=''>
                        <img src='/services/cryptoicom.png' alt='icons' className='w-[62px] h-[62px]' />
                    </div>
                    <div className='flex flex-col gap-[3px]'>
                        <p className="font-saborDisplaySSK text-[25px]  leading-[27px]">Crypto And Blockchain</p>
                        <p className="font-poppins text-[18px]  text-[#0E35E3]">Development</p>

                    </div>
            </div>
            </div>
        </div>
        </div>
    </div>
   </div>
  );
};

export default ServicesBorderedCards;
