import React from 'react'
import '../customstyles.css'

const HowToProvide = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[90%] lg:w-[70%]'>
            <div className='flex flex-col justify-center items-center'>
                <p className='font-saborDisplaySSK text-[30px] lg:text-[40px] leading-[33px] lg:leading-[44px] text-center'>How Do We Provide It?</p>
                
                <div className='mt-[25px] w-full flex flex-col lg:flex-row justify-center items-center lg:flex-wrap gap-[30px] lg:gap-y-[25px]'>
                
                <div className="border-wrapper flex items-center ">
                <div className="slanted-borderCards h-[120px] w-[280px] lg:h-[120px] lg:w-[280px] MHD:w-[300px] flex items-center justify-center">
                    <div className="content-wrapper">
                    <div>
                        <img src="/services/aicardimg.png" alt="icons" className="w-[53px] h-[58px]" />
                    </div>
                    <div className="text-content">
                        <p className="font-saborDisplaySSK text-[25px] leading-[27px]">Preparation</p>
                    </div>
                    </div>
                </div>
                </div>


        <div className="border-wrapper flex justify-center items-center">
          <div className="slanted-borderCards h-[120px] w-[280px] lg:h-[120px] lg:w-[280px] MHD:w-[300px] flex items-center justify-center">
            <div className="content-wrapper">
                    <div className=''>
                        <img src='/services/mobileappimg.png' alt='icons' className='w-[62px] h-[62px]' />
                    </div>
                    <div className='flex flex-col gap-[3px]'>
                     <p className="font-saborDisplaySSK text-[25px] leading-[27px]">Development</p>
                    </div>
            </div>
            </div>
        </div>

            <div className="border-wrapper flex justify-center items-center">
          <div className="slanted-borderCards h-[120px] w-[280px] lg:h-[120px] lg:w-[280px] MHD:w-[300px] flex items-center justify-center">
            <div className="content-wrapper">
                    <div className=''>
                        <img src='/services/webappimg.png' alt='icons' className='w-[53px] h-[58px]' />
                    </div>
                    <div className='flex flex-col gap-[3px]'>
                    <p className="font-saborDisplaySSK text-[25px] leading-[27px]">Deployment</p>
                    </div>
            </div>
            </div>
        </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default HowToProvide