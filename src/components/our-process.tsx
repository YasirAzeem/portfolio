// import Image from "next/image";
// import React from "react";
// import line from "../../public/art/line3.png";
// import ourProcess from "../../public/art/our-process.png";
// import process1 from "../../public/art/process1.png";
// import process2 from "../../public/art/process2.png";
// import process3 from "../../public/art/process3.png";
// import process4 from "../../public/art/process4.png";
// import process5 from "../../public/art/process5.png";
// import process6 from "../../public/art/process6.png";
// import process7 from "../../public/art/process7.png";

// export default function OurProcess() {
//   return (
//     <div className="bg-[url('/art/our-process-bg2.png')] bg-cover bg-center relative overflow-hidden FHD:mt-[-100px] HD:mt-[-100px] lg:mt-[50px]">
//       <div className="bg-[url('/art/hero-img-gradiant.svg')] z-10 -top-[10%] translate-y-[25%] object-contain bg-center bg-no-repeat h-[85%] absolute w-full blur-3xl m-auto left-0 right-0 "></div>
//       {/* <div className="bg-[url('/art/our-process-test-bg.png')] select-none z-[1] object-cover bg-center bg-no-repeat opacity-100 h-full absolute min-w-[100vw]"></div> */}
//       {/* <img
//         src="/art/our-process-test-bg.png"
//         className="select-none z-[1] object-cover bg-center bg-no-repeat opacity-100 h-full absolute min-w-[100vw]"
//       /> */}
//       <img
//         src="/art/our-process-mobile.png"
//         className="absolute top-0 left-0 w-full h-auto lg:hidden"
//       />
//       <div className="w-[85%] flex justify-center mx-auto relative z-50 ">
//         <p className="text-[40px] lg:text-[60px] font-sabor text-center  relative w-fit">
//           Our Process
//           <Image
//             src={line}
//             width={174}
//             height={4}
//             alt="line"
//             priority
//             className="absolute left-5 md:left-15 lg:top-[75px] right-1/4"
//           />
//         </p>
//       </div>
//       {/* for desktop & latptop */}
//       <div className="relative gap-[20px] max-lg:hidden flex justify-center  pt-[60px] pb-[140px]">
//         <div className="col-span-3 min-w-fit ms-auto relative z-50">
//           <div className="w-[330px] flex items-end max-lg:items-center  flex-col gap-2 mt-[50%]">
//             <Image
//               src={process2}
//               alt="process1"
//               width={56}
//               height={56}
//               priority
//             />
//             <p className="text-lg text-right leading-tight max-lg:text-center">
//             We then meet with key stakeholders to understand business
//               deliverables.
//             </p>
//           </div>
//           <div className="w-[330px] flex items-end max-lg:items-center flex-col gap-2 mt-[50%]">
//             <Image
//               src={process4}
//               alt="process1"
//               width={56}
//               height={56}
//               priority
//             />
//             <p className="text-lg text-right leading-tight max-lg:text-center">
//               We then meet with key stakeholders to understand business
//               deliverables.
//             </p>
//           </div>
//           <div className="w-[330px] flex items-end max-lg:items-center flex-col gap-2 mt-[47%]">
//             <Image
//               src={process6}
//               alt="process1"
//               width={56}
//               height={56}
//               priority
//             />
//             <p className="text-lg text-right leading-tight max-lg:text-center">
//             We then meet with key stakeholders to understand business
//               deliverables.
//             </p>
//           </div>
//         </div>
//         <div className="col-span-1  min-w-[182px] relative z-50">
//           <Image
//             src={ourProcess}
//             alt="our process"
//             width={182}
//             height={1060}
//             priority
//             className="mx-auto w-[182px] h-[1060px]"
//           />
//         </div>
//         <div className="col-span-3 min-w-fit me-auto relative z-50">
//           <div className="w-[330px] flex items-start max-lg:items-center flex-col gap-2 mt-[10%]">
//             <Image
//               src={process1}
//               alt="process1"
//               width={56}
//               height={56}
//               priority
//             />
//             <p className="text-lg text-left leading-tight max-lg:text-center">
//               We conduct a free technical audit to evaluate your current
//               systems, codebases, and architecture.
//             </p>
//           </div>
//           <div className="w-[330px] flex items-start max-lg:items-center flex-col gap-2 mt-[50%]">
//             <Image
//               src={process3}
//               alt="process1"
//               width={56}
//               height={56}
//               priority
//             />
//             <p className="text-lg text-left leading-tight max-lg:text-center">
//               We conduct a free technical audit to evaluate your current
//               systems, codebases, and architecture.
//             </p>
//           </div>
//           <div className="w-[330px] flex items-start max-lg:items-center flex-col gap-2 mt-[47%]">
//             <Image
//               src={process5}
//               alt="process1"
//               width={56}
//               height={56}
//               priority
//             />
//             <p className="text-lg text-left leading-tight max-lg:text-center">
//               We conduct a free technical audit to evaluate your current
//               systems, codebases, and architecture.
//             </p>
//           </div>
//           <div className="w-[330px] flex items-start max-lg:items-center flex-col gap-2 mt-[43%]">
//             <Image
//               src={process7}
//               alt="process1"
//               width={56}
//               height={56}
//               priority
//             />
//             <p className="text-lg text-left leading-tight max-lg:text-center">
//               We conduct a free technical audit to evaluate your current
//               systems, codebases, and architecture.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* for mobile & tablet */}
//       <div className="container lg:hidden relative z-50 pt-[60px] pb-[60px] max-md:space-y-6">
//         <div className="flex items-start max-lg:items-center flex-col gap-2 ms-auto">
//           <Image
//             src={process1}
//             alt="process1"
//             width={56}
//             height={56}
//             priority
//           />
//           <p className="text-lg max-w-[330px] text-left leading-tight max-lg:text-center">
//           We conduct a free technical audit to evaluate your current
//               systems, codebases, and architecture.
//           </p>
//         </div>
//         <div className="flex items-end max-lg:items-center flex-col gap-2">
//           <Image
//             src={process2}
//             alt="process1"
//             width={56}
//             height={56}
//             priority
//           />
//           <p className="text-lg  max-w-[330px] text-right leading-tight max-lg:text-center">
//             We then meet with key stakeholders to understand business
//             deliverables.
//           </p>
//         </div>
//         <div className="flex items-start max-lg:items-center flex-col gap-2 ms-auto">
//           <Image
//             src={process3}
//             alt="process1"
//             width={56}
//             height={56}
//             priority
//           />
//           <p className="text-lg max-w-[330px] text-left leading-tight max-lg:text-center">
//           We conduct a free technical audit to evaluate your current
//               systems, codebases, and architecture.
//           </p>
//         </div>
//         <div className="flex items-end max-lg:items-center flex-col gap-2">
//           <Image
//             src={process4}
//             alt="process1"
//             width={56}
//             height={56}
//             priority
//           />
//           <p className="text-lg  max-w-[330px] text-right leading-tight max-lg:text-center">
//             We then meet with key stakeholders to understand business
//             deliverables.
//           </p>
//         </div>
//         <div className="flex items-start max-lg:items-center flex-col gap-2 ms-auto">
//           <Image
//             src={process5}
//             alt="process1"
//             width={56}
//             height={56}
//             priority
//           />
//           <p className="text-lg max-w-[330px] text-left leading-tight max-lg:text-center">
//           We conduct a free technical audit to evaluate your current
//               systems, codebases, and architecture.
//           </p>
//         </div>
//         <div className="flex items-end max-lg:items-center flex-col gap-2">
//           <Image
//             src={process6}
//             alt="process1"
//             width={56}
//             height={56}
//             priority
//           />
//           <p className="text-lg max-w-[330px] text-right leading-tight max-lg:text-center">
//             We then meet with key stakeholders to understand business
//             deliverables.
//           </p>
//         </div>
//         <div className="flex items-start max-lg:items-center flex-col gap-2 ms-auto">
//           <Image
//             src={process7}
//             alt="process1"
//             width={56}
//             height={56}
//             priority
//           />
//           <p className="text-lg max-w-[330px] text-left leading-tight max-lg:text-center">
//           We conduct a free technical audit to evaluate your current
//               systems, codebases, and architecture.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from "next/image";
import React from "react";
import line from "../../public/art/line3.png";
import ourProcess from "../../public/art/middle-step.png";
// import ourProcess from "../../public/art/our-process.png";
import process1 from "../../public/art/process1.png";
import process2 from "../../public/art/process2.png";
import process3 from "../../public/art/process3.png";
import process4 from "../../public/art/process4.png";
import process5 from "../../public/art/process5.png";
import process6 from "../../public/art/process6.png";
import process7 from "../../public/art/process7.png";

export default function OurProcess() {
  return (
    <div className=" bg-cover FHD:bg-contain FHD:bg-no-repeat bg-center relative overflow-hidden FHD:mt-[-100px] HD:mt-[-100px] lg:mt-[50px]">
      <div className=" z-10 -top-[10%] translate-y-[25%] object-contain bg-center bg-no-repeat h-[85%] absolute w-full blur-3xl m-auto left-0 right-0 "></div>
      {/* <div className="bg-[url('/art/our-process-test-bg.png')] select-none z-[1] object-cover bg-center bg-no-repeat opacity-100 h-full absolute min-w-[100vw]"></div> */}
      {/* <img
        src="/art/our-process-test-bg.png"
        className="select-none z-[1] object-cover bg-center bg-no-repeat opacity-100 h-full absolute min-w-[100vw]"
      /> */}
      <img
        src="/art/our-process-mobile.png"
        className="absolute top-0 left-0 w-full h-auto lg:hidden"
      />
      <div className="w-[85%] flex justify-center mx-auto relative z-50 ">
        <p className="text-[40px] lg:text-[60px] font-sabor text-center  relative w-fit">
          Our Process
          <Image
            src={line}
            width={174}
            height={4}
            alt="line"
            priority
            className="absolute left-5 md:left-15 lg:top-[75px] right-1/4"
          />
        </p>
      </div>
      {/* for desktop & latptop */}
      <div className="relative gap-[20px] max-lg:hidden flex justify-center  pt-[20px] pb-[20px]">
        <div className="col-span-2 col min-w-fit ms-auto relative z-50">
          <div className="w-[330px] flex items-end max-lg:items-center  flex-col gap-2 mt-[50%]">
            <Image
              src={process2}
              alt="process1"
              width={56}
              height={56}
              priority
            />
            <p className="text-lg text-right leading-tight max-lg:text-center">
            We then meet with key stakeholders to understand business
              deliverables.
            </p>
          </div>
          <div className="w-[330px] flex items-end max-lg:items-center flex-col gap-2 mt-[50%]">
            <Image
              src={process4}
              alt="process1"
              width={56}
              height={56}
              priority
            />
            <p className="text-lg text-right leading-tight max-lg:text-center">
              We then meet with key stakeholders to understand business
              deliverables.
            </p>
          </div>
          <div className="w-[330px] flex items-end max-lg:items-center flex-col gap-2 mt-[47%]">
            <Image
              src={process6}
              alt="process1"
              width={56}
              height={56}
              priority
            />
            <p className="text-lg text-right leading-tight max-lg:text-center">
            We then meet with key stakeholders to understand business
              deliverables.
            </p>
          </div>
        </div>
        <div className="col-span-3  min-w-[182px] relative z-50">
          <Image
            src={ourProcess}
            alt="our process"
            width={352}
            height={1060}
            priority
            className="mx-auto w-[382px] h-[1060px]"
          />
        </div>
        <div className="col-span-3 min-w-fit me-auto relative z-50">
          <div className="w-[330px] flex items-start max-lg:items-center flex-col gap-2 mt-[10%]">
            <Image
              src={process1}
              alt="process1"
              width={56}
              height={56}
              priority
            />
            <p className="text-lg text-left leading-tight max-lg:text-center">
              We conduct a free technical audit to evaluate your current
              systems, codebases, and architecture.
            </p>
          </div>
          <div className="w-[330px] flex items-start max-lg:items-center flex-col gap-2 mt-[50%]">
            <Image
              src={process3}
              alt="process1"
              width={56}
              height={56}
              priority
            />
            <p className="text-lg text-left leading-tight max-lg:text-center">
              We conduct a free technical audit to evaluate your current
              systems, codebases, and architecture.
            </p>
          </div>
          <div className="w-[330px] flex items-start max-lg:items-center flex-col gap-2 mt-[47%]">
            <Image
              src={process5}
              alt="process1"
              width={56}
              height={56}
              priority
            />
            <p className="text-lg text-left leading-tight max-lg:text-center">
              We conduct a free technical audit to evaluate your current
              systems, codebases, and architecture.
            </p>
          </div>
          <div className="w-[330px] flex items-start max-lg:items-center flex-col gap-2 mt-[43%]">
            <Image
              src={process7}
              alt="process1"
              width={56}
              height={56}
              priority
            />
            <p className="text-lg text-left leading-tight max-lg:text-center">
              We conduct a free technical audit to evaluate your current
              systems, codebases, and architecture.
            </p>
          </div>
        </div>
      </div>
      {/* for mobile & tablet */}
      <div className="container lg:hidden relative z-50 pt-[60px] pb-[60px] max-md:space-y-6">
        <div className="flex items-start max-lg:items-center flex-col gap-2 ms-auto">
          <Image
            src={process1}
            alt="process1"
            width={56}
            height={56}
            priority
          />
          <p className="text-lg max-w-[330px] text-left leading-tight max-lg:text-center">
          We conduct a free technical audit to evaluate your current
              systems, codebases, and architecture.
          </p>
        </div>
        <div className="flex items-end max-lg:items-center flex-col gap-2">
          <Image
            src={process2}
            alt="process1"
            width={56}
            height={56}
            priority
          />
          <p className="text-lg  max-w-[330px] text-right leading-tight max-lg:text-center">
            We then meet with key stakeholders to understand business
            deliverables.
          </p>
        </div>
        <div className="flex items-start max-lg:items-center flex-col gap-2 ms-auto">
          <Image
            src={process3}
            alt="process1"
            width={56}
            height={56}
            priority
          />
          <p className="text-lg max-w-[330px] text-left leading-tight max-lg:text-center">
          We conduct a free technical audit to evaluate your current
              systems, codebases, and architecture.
          </p>
        </div>
        <div className="flex items-end max-lg:items-center flex-col gap-2">
          <Image
            src={process4}
            alt="process1"
            width={56}
            height={56}
            priority
          />
          <p className="text-lg  max-w-[330px] text-right leading-tight max-lg:text-center">
            We then meet with key stakeholders to understand business
            deliverables.
          </p>
        </div>
        <div className="flex items-start max-lg:items-center flex-col gap-2 ms-auto">
          <Image
            src={process5}
            alt="process1"
            width={56}
            height={56}
            priority
          />
          <p className="text-lg max-w-[330px] text-left leading-tight max-lg:text-center">
          We conduct a free technical audit to evaluate your current
              systems, codebases, and architecture.
          </p>
        </div>
        <div className="flex items-end max-lg:items-center flex-col gap-2">
          <Image
            src={process6}
            alt="process1"
            width={56}
            height={56}
            priority
          />
          <p className="text-lg max-w-[330px] text-right leading-tight max-lg:text-center">
            We then meet with key stakeholders to understand business
            deliverables.
          </p>
        </div>
        <div className="flex items-start max-lg:items-center flex-col gap-2 ms-auto">
          <Image
            src={process7}
            alt="process1"
            width={56}
            height={56}
            priority
          />
          <p className="text-lg max-w-[330px] text-left leading-tight max-lg:text-center">
          We conduct a free technical audit to evaluate your current
              systems, codebases, and architecture.
          </p>
        </div>
      </div>
    </div>
  );
}