import React from 'react'
import '../customstyles.css'

const WebAppProvide = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='w-[90%] lg:w-[70%]'>
        <div className='flex flex-col justify-center items-center'>
            <p className='hidden lg:block font-saborDisplaySSK text-[40px] leading-[44px] text-center'>How Do We Provide It?</p>
            
            <div className='flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-[10px] HD:gap-[35px] mt-[40px] MHD:mt-[50px]'>
                    <div className='bg-[#00000080] gradientInnerService-border px-[10px] sm:px-[20px] pt-[20px] lg:pt-[0] lg:px-[20px] MHD:pl-[30px] lg:w-[400px] HD:w-[450px] MHD:w-[640px] h-[210px] lg:h-[161px] rounded-[20px] border-[2px] flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[20px] '>
                       <img src='services/webappinnerdesign.png' alt='icon' /> 
                       <div className='flex flex-col justify-center items-center lg:items-start'>
                          <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[40px] leading-[27px] lg:leading-[44px]'>Design</p>
                          <p className='font-sabor font-normal text-[20px] text-center lg:text-left leading-[24px]'>Not just beautiful, but purposeful user experience.</p>
                        </div>
                    </div>

                    <div className='bg-[#00000080] gradientInnerService-border px-[10px] sm:px-[20px] pt-[15px] lg:pt-[0] lg:px-[20px] MHD:pl-[30px] lg:w-[400px] HD:w-[450px] MHD:w-[640px] h-[210px] lg:h-[161px] rounded-[20px] border-[2px] flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[20px] '>
                        <img src='services/deploymentweb.png' alt='icon' /> 
                        <div className='flex flex-col justify-center items-center lg:items-start'>
                          <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[40px] leading-[27px] lg:leading-[44px]'>Development</p>
                          <p className='font-sabor font-normal text-[20px] text-center lg:text-left leading-[24px]'>Our devs are making magic mobile app development.</p>
                        </div>
                    </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default WebAppProvide