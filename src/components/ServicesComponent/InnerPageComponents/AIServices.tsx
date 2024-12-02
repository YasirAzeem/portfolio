import React from 'react'

const AIServices = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[92%] XXSM:w-[90%] lg:w-[70%]'>
            <div className='flex flex-col justify-center items-center'>
                <p className='font-saborDisplaySSK text-[30px] lg:text-[40px] leading-[33px] lg:leading-[44px] text-center'>
                    AI services
                </p>
                <p className='font-inter font-normal text-[18px] lg:text-[25px] leading-[30.6px] text-center mt-[10px]'
                style={{ fontWeight: 400 }}>
                    Consultation to see how our AI service can supercharge your business.
                </p>
                {/* <img src="/services/aiinnersectionbg.png" alt="aihero"
                 className="absolute inset-0 w-full object-cover z-0 top-[600px]" /> */}
                <div className='flex flex-col lg:flex-row justify-center gap-[25px] MHD:gap-[30px] items-center relative z-10 mt-[30px] MHD:mt-[40px]'>
                    <div className='flex flex-col justify-center items-center gap-[15px] MHD:gap-[20px]'>
                        <img src="/services/NLPImage.png" alt="aihero" />
                        <p className='font-saborDisplaySSK text-[25px] lg:text-[17px] HD:text-[20px] HDMAX:text-[25px] leading-[27.65px] text-center'
                        style={{ fontWeight: 400 }}>Natural Language Processing</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[15px] MHD:gap-[20px]'>
                        <img src="/services/Speech.png" alt="aihero" />
                        <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[20px] HDMAX:text-[25px] leading-[27.65px] text-center'
                        style={{ fontWeight: 400 }}>Speech Recognition</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[15px] MHD:gap-[20px]'>
                        <img src="/services/Mlearning.png" alt="aihero" />
                        <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[20px] HDMAX:text-[25px] leading-[27.65px] text-center'
                        style={{ fontWeight: 400 }}>Machine Learning</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center gap-[25px]  MHD:gap-[30px]  items-center relative z-10 mt-[40px]'>
                    <div className='flex flex-col justify-center items-center gap-[15px] MHD:gap-[20px]'>
                        <img src="/services/CVision.png" alt="aihero" />
                        <p className='font-saborDisplaySSK text-[25px] lg:text-[20px] HDMAX:text-[25px] leading-[27.65px] text-center'
                        style={{ fontWeight: 400 }}>Computer Vision</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[15px] MHD:gap-[20px]'>
                        <img src="/services/VAssistant.png" alt="aihero" />
                        <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[20px] HDMAX:text-[25px] leading-[27.65px] text-center'
                        style={{ fontWeight: 400 }}>Virtual Assistant</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[15px] MHD:gap-[20px]'>
                        <img src="/services/API.png" alt="aihero" />
                        <p className='font-saborDisplaySSK font-normal text-[25px] lg:text-[20px] HDMAX:text-[25px] leading-[27.65px] text-center'
                        style={{ fontWeight: 400 }}>AI Development and APIs</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AIServices