import Image from "next/image";
import React from "react";
import line from "../../public/art/line2.png";
import { Card, CardContent } from "./ui/card";
import AvatarImg from "./avatar";
import GradientBtn from "./gradient-btn";
import globe from "../../public/art/globe.png";
import TestimonialCarousel from "./testimonial-carousel";
import memoji from "../../public/art/client1.png";
import memoji1 from "../../public/art/client2.png";
import memoji2 from "../../public/art/client3.png";
import memoji3 from "../../public/art/client4.png";
import memoji4 from "../../public/art/client5.png";
import memoji5 from "../../public/art/client.png";
import memoji6 from "../../public/art/client7.png";
import memoji7 from "../../public/art/client6.png";
import memoji8 from "../../public/art/client8.png";
import memoji9 from "../../public/art/client9.png";

export default function OurResult() {
//   const testimonials1 = [
   
//     {
//       name: "Christie Ross",
//       designation: "CEO of you've gotmail again",
//       message: `Flexlab Was Always On Time, Always Extremely Communicative, And Always Friendly With A "I
// Can Do It" Attitude. Team Worked With My
// Schedule And Was Always Extremely
// Professional And Trustworthy`,
//       image: memoji2,
//     },
//     {
//       name: "Daniella Mercer",
//       designation: "Daniella Mercer",
//       message: `Flexlab Consistently Surpasses Expectations By Delivering Exceptional Blockchain Development
// Services.The team is known for its timely response and competitive pricing, making it a leader in the industry..`,
//       image: memoji3,
//     },
//     {
//       name: "Juan Sanjuan-Hernandez",
//       designation: "CEO of TodyCoin",
//       message: `Revolutionizing Our Full-Stack And Blockchain
// Project! The Developers Crafted An Ethereum
// And BNB Coin, The Sleek Exchange Site, And The
// Dynamic Platform Hosting Multiple Currencies.`,
//       image: memoji4,
//     },
//   ];

//   const testimonials2 = [
  
//     {
//       name: "Jake white",
//       designation: "CEO of Convrtx",
//       message: `
// Exemplifying Remarkable Dedication And
// Unwavering Motivation Are Defining Traits In The
// Every Endeavor He Undertakes.`,
//       image: memoji1,
//     },
//     {
//       name: "Doug Brooks",
//       designation: "CEO of Panama Island",
//       message: `Innovative Expertise! With 5+ Years Of
// Experience, This Professional Crafts Fast,
// Original, And High-Quality Websites And
// Applications.`,
//       image: memoji,
//     },
//     {
//       name: "Natan Portnoy",
//       designation: "CEO of FairTrader",
//       message: `Flexlab Provides Ongoing High-Quality
// Development Support At An Affordable Price. Their Team Has Been Very Communicative, Proactive,
// And Good About Listening`,
//       image: memoji5,
//     },
//     {
//       name: "Rcrimi",
//       designation: "Entrepreneur",
//       message: `Great team for blockchain development and smart contract creation for our GSV project`,
//       image: memoji9,
//     },
//   ];

//   const testimonials3 = [
   
//     {
//       name: "Mircadollc",
//       designation: "Product Designer",
//       message: `They are very cooperative and responsible. Appreciate their patience while explaining technical terms to someone non technical like me. Looking forward to work with them in future`,
//       image: memoji6,
//     },
//     {
//       name: "Julien",
//       designation: "Solo-Entreprenuer",
//       message: `I am more than pleased with their work and would recommend to anyone. If you want a well-done project and executed on time, Choose Flexlab`,
//       image: memoji7,
//     },
//     {
//       name: "Maurice Carr",
//       designation: "Entrepreneur",
//       message: `The team was extremely responsiveness and was very open to my edits throughout the project and feedback. They very easy to work with`,
//       image: memoji8,
//     },
//   ];


  const testimonials1 = [
    
    {
      image: memoji8,
      name: "ahmedx721 ",
      designation: "Morocco",
    message:"Working with them was one of the best decisions I took. They are very good in communication and also a good listener. They were very patient with my project and how I explained it. I appreciate hardworking the team of programmX. Thank you!" 
   },
    {
      image: memoji8,
      name: "anamikachauhan",
      designation: "India",
      message: "Outstanding seller. Amazing service. They were very cooperative and worked patiently on solving my issues. Highly recommended. Would love to take their service again.",
    },
    {
      image: memoji8,
      name: "donghua179",
      designation: "Australia",
      message:"The delivery speed is very fast, and communication is very smooth! Excellent partner, looking forward to continuing our cooperation."
    }]
    const testimonials2 = [
      {
        image: memoji8,
        name: "x01zss",
        designation: "Qatar",
        message: "Amazing developer and an excellent communicator. They are very knowledgeable and very patient. They did great work with the trading bot. I will 100% work with them again",
      },
      {
        image: memoji8,
        name: "memeoty1",
        designation: "United Kingdom",
        message: "This seller is not only a very talented developer, using their skills to solve almost any problem you need, but they are also a very friendly person who answered all of my questions and helped me to set up and use the bot they made me. The seller is also very reasonable in terms of price. Overall, I had an amazing experience with them and would recommend them to anyone!",
      },
   
   
    {
      image: memoji8,
      name: "marcosjunca",
      designation: "Spain",
      message: "The seller was professional and a complete expert in the area. They provided me with a very high-quality product and exactly what I needed. I will definitely use this seller again in the future.",
    },
    ]
    const testimonials3 = [
    {
      image: memoji8,
      name: "davidfreedma669",
      designation: "USA",
      message: "They are someone I’d recommend to any of my friends. They are extremely knowledgeable and will take the time to go through everything with you. Very positive experience by P-tech. Highly recommend!",
    },
    
    {
      image: memoji8,
      name: "raj1442",
      designation: "Netherlands",
      message: "They are perfect! They fully understood the intricacies of the project, went above and beyond, and were even willing to do some parts I forgot to put in the original project messageription. I am already hiring them again, which is all I really need to say about them.",
    },
    {
      image: memoji8,
      name: "achrafnl",
      designation: "Morocco",
      message: "Awesome service. Went above and beyond and helped with more than what was required. Great with communication. Very quick. I wasn’t sure if they would be able to do what I wanted, but I communicated with them exactly what I was looking for, and they were able to make it come to life perfectly! I’m going to be using their service again VERY soon! Thanks again programmX team!",
    }
  ]
    const testimonials4 = [
    {
      image: memoji8,
      name: "daffiehans",
      designation: "USA",
      message: "Very knowledgeable with trading and built the trading strategy exactly like I needed within my budget and on time. Very easy to work with and communicates great! Definitely will hire them again for future projects!",
    },
    {
      image: memoji8,
      name: " rghouri93",
      designation: "USA",
      message: "Amazing work at a very reasonable price. They are very knowledgeable and definitely the easiest person I’ve worked. If you’re considering using their services, I promise you will not be disappointed.",
    },
    
    {
      image: memoji8,
      name: "applekid2213",
      designation: "USA",
      message: "One of the most amazing experiences that I have ever had! The seller went above and beyond to create an amazing Python bot. They guided me step by step along the way, and even after they delivered, they continued to improve upon their work! If you need a developer who cares about their work but cares about their customers more, then this is your person! Will be back for sure!",
    },
   
    {
      image: memoji8,
      name: "willis312 ",
      designation: "Bulgaria",
      message: "They are a very good developer. They deploy, understand, and have very good skills. They made our presale bot, and I recommend them, but I will be fully honest—they didn’t follow the timeline. It took 3 up to 10 days for us to receive our delivery. They had to be reminded every time to fix an issue. They don’t work automatically on your order; instead, they wait for your next message—maybe they are very busy with work, but this is not a reason to not respond or not to inform at the beginning about it. In conclusion, they are a very good developer with good skills and very good prices for their services. If I have to use a developer again, I will choose them.",
    },
    {
      image: memoji8,
      name: "drhanslock ",
      designation: "Sweden",
      message:"Highly recommended. If you need someone who can solve your Python requests, then this is the seller to hire. During 3 months prior to hiring this seller, I asked 45+ other sellers, of whom 40+ declined the job for various reasons. Four tried and failed—two of them after spending more than a month. This seller not only succeeded with the Python challenge I gave them but was also very patient, polite, easy to communicate with, and simply didn’t give up. I am very pleased with the team and all, and I have already hired them for a total of 3 projects so far, all relating to a crypto trading algorithm. "
    },
    {
      image: memoji8,
      name: "jankotzorek",
      designation: "Germany",
      message: "GREAT CUSTOMER SUPPORT - What I really liked about them is that they not only worked out the crawler I needed but also did a few iterations that were not exactly part of the requirements but were needed to get it running. They helped me set up Python, this is the most important to me, that you are not left alone. They really care about delivering a working final product for you. GREAT INSTANT FEEDBACK - They respond very fast.",
    },
   
  ];

  return (
    <div className=" overflow-hidden ">
      <div className="w-[85%] flex justify-center mx-auto ">
        <p className="text-[30px] leading-[1.2] lg:leading-normal lg:text-[56px] font-sabor text-center relative w-fit ">
          Our Results Speak for Themselves
          {/* <span className="lg:text-[#0E35E3]">Themselves</span> */}
          <Image
            src={line}
            width={276}
            height={4}
            alt="line"
            priority
            className="hidden lg:block absolute max-[533px]:top-[85px] top-[50px] lg:top-[75px] max-[533px]:right-0 max-[533px]:left-0 m-auto right-[0] lg:right-3 w-[200px] lg:w-[276px]"
          />
        </p>
      </div>
      <div className="pt-[2.5rem] pb-6 relative">
        {/* <Image
          src={globe}
          width={640}
          height={934}
          alt="globe"
          priority
          className="absolute top-[100px] right-0 z-50"
        /> */}
        {/* for desktop ( max-[1400px]:hidden) */}
        <div className="space-y-6 relative z-50 max-[1400px]:hidden">
          <div className="flex justify-center gap-6 items-center ">
            {testimonials1.map((testimonial, index) => (
              <Card
                key={index + "jhjh"}
                className="p-0 max-w-[504px] h-fit overflow-hidden"
              >
                <CardContent className="bg-[#3E3C3D80] p-3 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-base">⭐⭐⭐⭐⭐</p>
                    <p className="text-base mt-3.5 text-[#FEF9F6]">
                      {/* {testimonial.message} */}
                      {testimonial.message.slice(0, 170)}{testimonial.message.length > 170 && '...'}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        width={40}
                        height={40}
                        alt="Avatar"
                        className=" rounded-full"
                      />
                      <p className="text-sm text-[#BCB9B4]">
                        {testimonial.name}
                      </p>
                    </div>
                    <p className="text-sm text-[#BCB9B4]">
                      {testimonial.designation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center gap-6 items-center ">
            {testimonials2.map((testimonial, index) => (
              <Card
                key={index + "jhjh"}
                className="p-0 max-w-[504px] h-fit overflow-hidden"
              >
                <CardContent className="bg-[#3E3C3D80] p-3 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-base">⭐⭐⭐⭐⭐</p>
                    <p className="text-base mt-3.5 text-[#FEF9F6]">
                      {/* {testimonial.message} */}
                      {testimonial.message.slice(0, 170)}{testimonial.message.length > 170 && '...'}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        width={40}
                        height={40}
                        alt="Avatar"
                        className=" rounded-full"
                      />
                      <p className="text-sm text-[#BCB9B4]">
                        {testimonial.name}
                      </p>
                    </div>
                    <p className="text-sm text-[#BCB9B4]">
                      {testimonial.designation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* <div className="grid grid-cols-4 gap-6 items-center max-w-fit mx-auto">
            {testimonials2?.map((testimonial, index) => (
              <Card
                key={index + "jhh"}
                className="p-0 max-w-[504px] h-fit overflow-hidden"
              >
                <CardContent className="bg-[#3E3C3D80] p-3 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-base">⭐⭐⭐⭐⭐</p>
                    <p className="text-base mt-3.5 text-[#FEF9F6]">
                      {testimonial.message}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        width={40}
                        height={40}
                        alt="Avatar"
                        className=" rounded-full"
                      />
                      <p className="text-sm text-[#BCB9B4]">
                        {testimonial.name}
                      </p>
                    </div>
                    <p className="text-sm text-[#BCB9B4]">
                      {testimonial.designation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}
          <div className="flex justify-center gap-6 items-center ">
            {testimonials3.map((testimonial, index) => (
              <Card
                key={index + "jhjh"}
                className="p-0 max-w-[504px] h-fit overflow-hidden"
              >
                <CardContent className="bg-[#3E3C3D80] p-3 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-base">⭐⭐⭐⭐⭐</p>
                    <p className="text-base mt-3.5 text-[#FEF9F6]">
                      {/* {testimonial.message} */}
                      {testimonial.message.slice(0, 170)}{testimonial.message.length > 170 && '...'}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        width={40}
                        height={40}
                        alt="Avatar"
                        className=" rounded-full"
                      />
                      <p className="text-sm text-[#BCB9B4]">
                        {testimonial.name}
                      </p>
                    </div>
                    <p className="text-sm text-[#BCB9B4]">
                      {testimonial.designation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* for mobile  and laptop min-[1400px]:hidden */}
        <div className="max-w-full min-[1400px]:hidden">
          <TestimonialCarousel />
        </div>
        <div className="flex justify-center mt-[18px] HD:mt-[20px] MHD:mt-[70px] relative z-50">
          <GradientBtn
            text="Book a Call"
            url="https://calendly.com/yasir-programmx/30min"
          />
        </div>
      </div>
    </div>
  );
}