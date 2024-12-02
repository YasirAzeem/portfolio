import React from 'react'
import '../customstyles.css'

const MobileServices = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[90%] lg:w-[70%]'>
            <div className='flex flex-col justify-center items-center'>
                <p className='font-inter font-normal text-[25px] leading-[30.6px] text-center'>what we do</p>
                <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] leading-[33px] lg:leading-[44px] text-center'>Our Services.</p>

                <div className='flex flex-col lg:flex-row justify-center items-center gap-[20px] lg:gap-[10px] HD:gap-[35px] mt-[30px] lg:mt-[40px] MHD:mt-[50px]'>
                    <div className='bg-[#00000080] gradientInnerService-border lg:px-[40px] w-[330px] XSM:w-[350px] lg:w-[400px] HD:w-[450px] MHD:w-[640px] h-[161px] rounded-[20px] border-[2px] flex flex-col lg:flex-row justify-center items-center gap-[10px] lg:gap-[20px] '>
                        <img src='services/MobileServiceIcon.png' alt='icon' className='w-[66px] h-[66px] lg:w-auto lg:h-[auto]' />
                        <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[40px] leading-[27px] lg:leading-[44px]'>Mobile Development</p>
                    </div>
                    <div className='bg-[#00000080] gradientInnerService-border  lg:px-[40px] w-[330px] XSM:w-[350px] lg:w-[400px] HD:w-[450px] MHD:w-[640px] h-[161px] rounded-[20px] border-[2px] flex flex-col lg:flex-row justify-center items-center gap-[10px] lg:gap-[20px] '>
                        <img src='services/Frontendicon.png' alt='icon' className='w-[66px] h-[66px] lg:w-auto lg:h-[auto]' />
                        <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[40px] leading-[27px] lg:leading-[44px]'>Front End Development</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center gap-[20px] lg:gap-[10px] HD:gap-[35px] mt-[20px] lg:mt-[40px] w-full'>
                    <div className='bg-[#00000080] gradientInnerService-border lg:px-[40px] w-[330px] XSM:w-[350px] lg:w-[400px] HD:w-[450px] MHD:w-[640px] h-[161px] rounded-[20px] border-[2px] flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-[10px] lg:gap-[20px] '>
                        <img src='services/UIIcon.png' alt='icon' className='w-[66px] h-[66px] lg:w-auto lg:h-[auto]' />
                        <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[40px] leading-[27px] lg:leading-[44px]'>UI/UX Designing</p>
                    </div>
                    <div className='bg-[#00000080] gradientInnerService-border lg:px-[40px] w-[330px] XSM:w-[350px] lg:w-[400px] HD:w-[450px] MHD:w-[640px] h-[161px] rounded-[20px] border-[2px] flex flex-col lg:flex-row justify-center items-center gap-[10px] lg:gap-[20px]'>
                        <img src='services/BackendIcon.png' alt='icon' className='w-[66px] h-[66px] lg:w-auto lg:h-[auto]' />
                        <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[40px] leading-[27px] lg:leading-[44px]'>Backend Development</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MobileServices