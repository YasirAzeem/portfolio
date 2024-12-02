import React from 'react'

const WebAppServices = () => {
  return (
<div className='flex justify-center items-center'>
        <div className='w-[90%] lg:w-[70%]'>
            <div className='flex flex-col justify-center items-center'>
            <p className='font-inter font-normal text-[25px] leading-[30.6px] text-center'>what we do</p>
            <p className='font-saborDisplaySSK font-normal text-[30px] lg:text-[40px] leading-[33px] lg:leading-[44px] text-center'>Our Services.</p>

                <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-[40px] lg:gap-x-[40px] MHD:gap-x-[50px] lg:gap-y-[50px] mt-[40px]'>
                    <div className='flex flex-col justify-center items-center gap-[25px]'>
                        <img src="/services/UIUXwebappicon.png" alt="line" />
                        <p className='font-saborDisplaySSK fonr-normal text-[25px]  lg:text-[30px] leading-[27px] lg:leading-[33px] text-center'>
                            UI/UX Designing
                        </p>
                        <img src="/portfolio-assets/portfolioLine.svg" alt="line" />
                        <p className='font-sabor fonr-normal  text-[16px] leading-[20px] text-center w-[320px] MHD:w-[400px]'>
                             Designing captivating user interfaces and experiences that elevate brands and engage audiences effectively and aesthetically.
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-[25px]'>
                        <img src="/services/webFullStackicon.png" alt="line" />
                        <p className='font-saborDisplaySSK fonr-normal text-[25px]  lg:text-[30px] leading-[27px] lg:leading-[33px] text-center'>
                        Full Stack Development
                        </p>
                        <img src="/portfolio-assets/portfolioLine.svg" alt="line" />
                        <p className='font-sabor fonr-normal  text-[16px] leading-[20px] text-center w-[340px] MHD:w-[400px]'>
                            End-to-end Full Stack solutions, seamlessly integrating front-end and back-end technologies for robust and dynamic applications.
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-[25px]'>
                        <img src="/services/AIWebicon.png" alt="line" />
                        <p className='font-saborDisplaySSK fonr-normal text-[25px]  lg:text-[30px] leading-[27px] lg:leading-[33px] text-center'>
                            Artificial Intelligence
                        </p>
                        <img src="/portfolio-assets/portfolioLine.svg" alt="line" />
                        <p className='font-sabor fonr-normal  text-[16px] leading-[20px] text-center w-[300px] MHD:w-[400px]'>
                            AI expertise driving innovation, efficiency, and growth; crafting smart solutions for businesses to thrive in the digital age.
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-[25px]'>
                        <img src="/services/BlockchainIcon.png" alt="line" />
                        <p className='font-saborDisplaySSK fonr-normal text-[25px]  lg:text-[30px] leading-[27px] lg:leading-[33px] text-center'>
                        Blockchain Development
                        </p>
                        <img src="/portfolio-assets/portfolioLine.svg" alt="line" />
                        <p className='font-sabor fonr-normal  text-[16px] leading-[20px] text-center w-[300px] MHD:w-[400px]'>
                        Decentralized solutions for security and growth, pioneering innovations to elevate businesses in the digital era.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default WebAppServices