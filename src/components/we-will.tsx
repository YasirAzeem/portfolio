import Image from "next/image";
import line from "../../public/art/line3.png";
import recruit from "../../public/art/recruit.png";
import team from "../../public/art/ManageTeam.png";
import kpi from "../../public/art/SetKPIs.png";
import arcUp from "../../public/art/arc-up.png";
import arcDown from "../../public/art/arcc-down.png";
import webArt from "../../public/art/web.png";
import code from "../../public/art/codeImage.svg";
// import code2 from "../../public/art/codeImage.png";
import code2 from "../../public/art/codeImageNew.png";
// import codemobile from "../../public/art/code-image-updated.png";
import codemobile from "../../public/art/codeImageNew.png";
import rightFlow from "../../public/art/right-flow.png";
import leftFlow from "../../public/art/left-flow.png";
import flexlab from "../../public/art/flexlab.png";
import leftBlob from "../../public/art/leftBlob.png";
import web from "../../public/art/web-bottom.png";
import GradientBtn from "./gradient-btn";
import GradiantBg from "../../public/art/hero-img-gradiant.svg";

export default function WeWill() {
  return (
    <div className="relative">
      <img
        src="/art/we-will-mobile-left.png"
        className="lg:hidden absolute top-0 max-[412px]:left-[-40px] max-[500px]:left-[-30px] left-0 opacity-90"
      />
      <img
        src="/art/we-will-bg-mobile.png"
        className="lg:hidden w-full h-full absolute top-0 left-0"
      />
      <div className="mt-[42px] flex justify-center items-center ">
        <p className="max-sm:text-[32px] z-[999] text-[60px] font-saborDisplaySSK text-center font-semibold relative w-fit">
          We Will
          <Image
            src={line}
            width={154}
            height={4}
            alt="line"
            priority
            className="absolute sm:top-[80px] md:left-10"
          />
        </p>
      </div>
      <div className="flex justify-center max-lg:flex-col gap-[35px] lg:gap-16 items-center mt-12">
        <div className="w-[300px] min-[1080px]:w-[300px] min-[1290px]:w-[380px] flex flex-col justify-center items-center gap-2 md:gap-4 relative z-40">
          <Image
            src={recruit}
            width={124}
            height={123}
            alt="line"
            priority
            className="max-[1290px]:w-[100px]"
          />
          <Image
            src={arcUp}
            width={248}
            height={28}
            alt="line"
            priority
            className="absolute top-0 left-[75%] max-[1290px]:w-[200px] max-lg:hidden"
          />
          <p className="text-[20px] md:text-[30px] font-sabor relative">
            Recruit
          </p>
          <p className="text-[15px] md:text-[20px] font-sabor text-center">
            Recruit: To enlist or engage individuals for a job, organization, or
            cause, often through outreach and persuasion.
          </p>
        </div>
        <img
          src="/art/setKipBg.png"
          className="absolute w-full lg:hidden select-none"
        />
        <div className="w-[300px] min-[1080px]:w-[300px] min-[1290px]:w-[380px] z-[999] flex flex-col justify-center items-center gap-2 md:gap-4 relative">
          <Image
            src={recruit}
            width={124}
            height={123}
            alt="line"
            className="max-[1290px]:w-[100px]"
            priority
          />
          <Image
            src={arcDown}
            width={248}
            height={28}
            alt="line"
            priority
            className="absolute top-16 left-[75%] max-[1290px]:w-[200px] max-lg:hidden"
          />
          <p className="text-[20px] md:text-[30px] font-sabor">Set KPIs</p>
          <p className="text-[15px] md:text-[20px] font-sabor text-center">
            Define measurable goals to track and evaluate performance against
            strategic objectives and targets.
          </p>
        </div>
        <div className="w-[300px] min-[1080px]:w-[300px] z-[999] min-[1290px]:w-[380px] flex flex-col justify-center items-center gap-2 md:gap-4">
          <Image
            src={recruit}
            width={124}
            height={123}
            alt="line"
            className="max-[1290px]:w-[100px]"
            priority
          />
          <p className="text-[20px] md:text-[30px] font-sabor">Manage Team</p>
          <p className="text-[15px] md:text-[20px] font-sabor text-center">
            Oversee, coordinate, and support team members to achieve goals,
            enhance collaboration, and ensure productivity.
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          src={leftBlob}
          alt="left"
          width={660}
          height={550}
          className="absolute -top-80 left-0"
        />
      </div>
      <div className="flex flex-col items-center justify-center lg:mt-[-70px] ">
        {/* <div className="relative w-full ">
          <Image
            src={webArt}
            width={1240}
            height={200}
            alt="web"
            className="w-[1240px] h-[200px] -top-28 opacity-50 absolute "
          />
        </div> */}
        <div className="relative w-full overflow-hidden">
          <Image
            src={code2}
            width={902}
            height={546}
            alt="web"
            className="hidden lg:block mx-auto mt-0 w-full lg:w-[80%] md:-mt-[5rem] 2xl:-mt-[7rem] MHD:mt-[-100px] FHD:-mt-[12rem] relative z-50"
          />
          <Image
            src={codemobile}
           /*  width={902}
            height={546} */
            width='auto'
            height='auto'
            alt="web"
            className="mx-auto mt-[-25px] sm:mt-[-100px] md:mt-[-120px]  w-full lg:w-[80%] md:-mt-[5rem] 2xl:-mt-[7rem] FHD:-mt-[12rem] relative z-50 lg:hidden"
          />
          <Image
            src={leftFlow}
            width={350}
            height={660}
            className="max-lg:hidden  absolute top-[14%] left-[0%] z-0 h-full"
            alt="left flow"
            priority
          />
          <Image
            src={rightFlow}
            width={350}
            height={607}
            className=" max-lg:hidden absolute top-[14%] right-[0%] z-0"
            alt="right flow"
            priority
          />
          <Image
            src={flexlab}
            width={400}
            height={400}
            className="absolute top-0 right-44"
            alt="flexlab"
          />

          <div className="relative w-full mt-[-12rem] sm:mt-[-80px] md:mt-[-110px] HD:mt-[-250px] MHD:mb-[20px] pb-14 z-[999] mx-auto text-center max-lg:mt-[-30px]">
            {/* <Image
              src={web}
              width={1240}
              height={200}
              alt="web"
              className="w-[1240px] h-[200px] -top-10  opacity-50 absolute "
            /> */}
            <GradientBtn text="Book a Call" url="https://calendly.com/yasir-programmx/30min" />
          </div>
        </div>
        {/* <div className="relative w-full"> */}
        {/* <Image
            src={leftBlob}
            alt="left"
            width={460}
            height={550}
            className="absolute  z-20 bottom-[-800px] w-[460px]  h-auto "
          /> */}
        {/* <img
              src="/art/hero-img-gradiant.svg"
              className="absolute z-20 bottom-[-490px] max-[856px]:hidden left-1/2 -translate-x-1/2 rotate-90 w-[660px]  h-[850px]"
            /> */}
        {/* </div> */}
      </div>
    </div>
  );
}
