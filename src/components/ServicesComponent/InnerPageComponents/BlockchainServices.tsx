import React from 'react'

const BlockchainServices = () => {
  return (
<div className='flex justify-center items-center'>
        <div className='w-[95%] XXSM:w-[90%] lg:w-[70%]'>
            <div className='flex flex-col justify-center items-center'>
            <p className='font-inter font-normal text-[20px] lg:text-[25px] leading-[30.6px] text-center'>what we do</p>
            <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] leading-[33px] lg:leading-[44px] text-center'>Our Services.</p>
            <p className='lg:hidden font-inter font-normal text-[18px] lg:text-[25px] leading-[30.6px] text-center mt-[10px]'
                style={{ fontWeight: 400 }}>
                    Consultation to see how our AI service can supercharge your business.
                
            </p>

                <div className='flex flex-col lg:flex-row justify-center gap-[25px] MHD:gap-[30px] items-center relative z-10 mt-[20px] lg:mt-[40px] MHD:mt-[40px]'>
                    <div className='flex flex-col justify-center items-center gap-[25px] lg:gap-[15px] MHD:gap-[20px]'>
                        <img src="/services/ICOImage.png" alt="aihero" />
                        <p className='font-saborDisplaySSK text-[25px] lg:text-[17px] HD:text-[20px] HDMAX:text-[25px] leading-[27px] text-center'
                        style={{ fontWeight: 400 }}>ICO or NFT Marketplace</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[25px] lg:gap-[15px] MHD:gap-[20px]'>
                        <img src="/services/AgnosticImage.png" alt="aihero" />
                        <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[20px] HDMAX:text-[25px] leading-[27px] text-center'
                        style={{ fontWeight: 400 }}>Blockchain Agnostic</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[25px] lg:gap-[15px] MHD:gap-[20px]'>
                        <img src="/services/Onborading.png" alt="aihero" />
                        <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[20px] HDMAX:text-[25px] leading-[27px] text-center'
                        style={{ fontWeight: 400 }}>onboarding sessions</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center gap-[20px]  MHD:gap-[30px]  items-center relative z-10 mt-[40px]'>
                    <div className='flex flex-col justify-center items-center gap-[25px] lg:gap-[15px] MHD:gap-[20px]'>
                        <img src="/services/FixedRate.png" alt="aihero" />
                        <p className='font-saborDisplaySSK text-[25px] lg:text-[20px] HDMAX:text-[25px] leading-[27px] text-center'
                        style={{ fontWeight: 400 }}>Fixed Monthly Rate</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[25px] lg:gap-[15px] MHD:gap-[20px]'>
                        <img src="/services/Professional.png" alt="aihero" />
                        <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[20px] HDMAX:text-[25px] leading-[27px] text-center'
                        style={{ fontWeight: 400 }}>Professional Developers</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[25px] lg:gap-[15px] MHD:gap-[20px]'>
                        <img src="/services/BackendEngineer.png" alt="aihero" />
                        <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[20px] HDMAX:text-[25px] leading-[27px] text-center'
                        style={{ fontWeight: 400 }}>Backend Engineering</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default BlockchainServices