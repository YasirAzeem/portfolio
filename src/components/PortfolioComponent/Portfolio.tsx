'use client'

import React, {useState, useEffect} from "react";
import { useRouter } from 'next/navigation';
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import BlogCard from "./BlogCard";
import CarouselMobile from "../BlogHeroSection/CarousalMobile";
import PortfolioNavDesktop from "../BlogHeroSection/PortfolioNav";
import PortfolioCard from "./PortfolioCard";
import PortfolioForthSection from "./PortfolioForthSection";
import PortfolioMobileForthSection from "./portfolioMobileForth";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import LovedThisProject from "./LovedThisProject/LovedThisProject";

const ITEMS_PER_PAGE_DESKTOP = 2;
const ITEMS_PER_PAGE_MOBILE = 2;


const blogData = [
  {
     id: 1,
    // image: '/portfolio-assets/Portfolio1.svg',
    image:'/portfolioImg/autogram (2).png',
    date: 'February 2023',
    team:'6 Team Members',
    title1: 'Featured Project',
    // title: 'Foundation Internet Organization', 
    title: "Autogram",
    description: "Users can buy and sell cars, with multilingual support and premium ad visibility options.",
    about:"About Autogram",
   type: 'Web Development',
  
  },
  {  id: 2,
    image: '/portfolioImg/goodlink (2).png',
    date: 'March 2022',
    team:'4 Team Members',
    title1: 'Featured Project',
    title: "GudLink",
    description: "NGOs can globally collect donations, donors earn reward points, and visualize transaction histories.",
    about:"About GudLink",
    type: 'Blockchain',
  
  },
  {  id: 3,
    image: '/portfolioImg/Appreviover.png',
    date: 'January 2023',
    team:'3 Team Members',
    title1: 'Featured Project',
    title: "App Reviewers",
    description: "It offers detailed PlayStore and AppStore information, with a user credit system and dynamic dashboard.",
    about:"About App Reviewers",
    type: 'AI',

  },
  {  id: 4,
    image: '/portfolioImg/rahco 1.png',
    date: 'April 2022',
    team:'8 Team Members',
    title1: 'Featured Project',
    title: "RAHCo",
    description: "This system streamlines digital file processing within departments, saving time and costs.",
    about:"About RAHCo",
    type: 'Web Development',
  },
  {  id: 5,
    image: '/portfolioImg/odar.png',
    date: 'February 2024',
    team:'8 Team Members',
    title1: 'Featured Project',
    title: "Odar - POS & e-Commerce",
    description: "A B2B platform with tailored features like sales analytics, order management, and chat.",
    about:"About Odar - POS & e-Commerce",
    type: 'Ecommerce',
  },
  {  id: 6,
    image: '/portfolioImg/rentap.png',
    date: 'Sep 2023',
    team:'4 Team Members',
    title1: 'Featured Project',
    title: "Rent App",
    description: "Users can manage properties, tenants, and rental incomes with a multilingual dashboard.",
    about:"About Rent App",
    type: 'Ecommerce',
  },
  {  id: 7,
    image: '/portfolioImg/minBook.png',
    date: 'August 2023',
    team:'2 Team Members',
    title1: 'Featured Project',
    title: "Minibooks",
    description: "Designed for wholesalers, it offers insights into financial accounts, stocks, and bills.",
    about:"About Minibooks",
    type: 'Web Development',

    
  },
  {  id: 8,
    image: '/portfolioImg/alshorja.png',
    date: 'June 2024',
    team:'6 Team Members',
    title1: 'Featured Project',
    title: "Alshorja",
    description: "A marketplace to buy or sell items, featuring filters, chats, and multilingual support.",
    about:"About Alshorja",
    type: 'Web Development',

  },
  {  id: 9,
    image: '/portfolioImg/filmboard 1.png',
    date: 'December 2023',
    team:'3 Team Members',
    title1: 'Featured Project',
    title: "Filmboard.io",
    description: "A tool for content creators, offering live collaboration, uploads, and client sharing.",
    about:"About Filmboard.io",
    type: 'Web Development',
  },
  {  id: 10,
    image: '/portfolioImg/montells.png',
    date: 'February 2024',
    team:'6 Team Members',
    title1: 'Featured Project',
    title: "Montells",
    description: "An e-Commerce platform with a modern interface, payment gateways, and order history.",
    about:"About Montells",
    type: 'Web Development',

  },
  {  id: 11,
    image: '/portfolioImg/heckarNews.png',
    date: 'August 2023',
    team:'2 Team Members',
    title1: 'Featured Project',
    title: "Hacker News",
    description: "A replica of Hacker News, where users can share stories and comment.",
    about:"About Hacker News",
    type: 'Web Development',

  },
  {  id: 12,
    image: '/portfolioImg/bookKeeping.png',
    date: 'Nov 2023',
    team:'4 Team Members',
    title1: 'Featured Project',
    title: "PR-Bookkeeping",
    description: "A business platform overseeing financials, with features like transaction management.",
    about:"About PR-Bookkeeping",
    type: 'Web Development',

  },

  {  id: 13,
    image: '/portfolioImg/funcept.png',
    date: 'October 2022',
    team:'5 Team Members',
    title1: 'Featured Project',
    title: "FunCept",
    description: "A minimalistic social media platform where users can share posts and follow others.",
    
    about:"About FunCept",
    type: 'Web Development',

   
  },
  {  id: 14,
    image: '/portfolioImg/cosplplayer.png',
    date: 'April 2024',
    team:'5 Team Members',
    title1: 'Featured Project',
    title: "Hypnose",
    description: "An online platform selling audio therapy sessions with a comprehensive admin panel.",
    about:"About Hypnose",
    type: 'Web Development',
  },
  {  id: 15,
    image: '/portfolioImg/Hypnose.png',
    date: 'March 2024',
    team:'3 Team Members',
    title1: 'Featured Project',
    title: "Alshorja - Mobile App",
    description: "A mobile version of Alshorja with features like dark mode and multilingual support.",
    about:"About Alshorja - Mobile App",
    type: 'Web Development',
  },
  {  id: 16,
    image: '/portfolioImg/cosplplayer.png',
    date: 'April 2024',
    team:'4 Team Members',
    title1: 'Featured Project',
    title: "Cosplayeri",
    description: "A marketplace for Cosplayers with features like PayPal integration and chat.",
    about:"About Cosplayeri",
    type: 'Web Development',
  },
  {  id: 17,
    image: '/portfolioImg/LLsocial.png',
    date: 'September 2023',
    team:'4 Team Members',
    title1: 'Featured Project',
    title: "LL Social",
    description: "A social platform for users and organizations to post and manage events.",
    about:"About LL Social",
    type: 'Web Development',
  },

]

export default function BlogHeroSection() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [viewMode, setViewMode] = useState("list"); // New state to manage view mode
  const [selectedBlogByUser, setSelectedBlogByUser] = useState(null); 

  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
    console.log("selected tab in portfolio is",selectedTab)
  };

  const handleViewDetails = (blog) => {
    setSelectedBlogByUser(blog); // Set the selected blog
    setViewMode("details"); // Switch to details view
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedBlog = selectedBlogByUser; // Use the selected blog from the state
  const relatedBlogs = blogData.filter(blog => blog.type === selectedBlog?.type && blog.id !== selectedBlog?.id);

  const [pageNo, setPageNo] = useState(1);
  
    // Detect if it's a mobile view or not
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  
    const itemsPerPage = isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP;

    const totalPages = Math.ceil(relatedBlogs.length / itemsPerPage);

    const paginatedBlogs = relatedBlogs.slice(
      (pageNo - 1) * itemsPerPage,
      pageNo * itemsPerPage
    );

    const router = useRouter();

    useEffect(() => {
      if (router.asPath && router.asPath.includes('#portfolio-nav')) {
        const portfolioNav = document.getElementById('portfolio-nav');
        if (portfolioNav) {
          portfolioNav.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [router.asPath]);

  return (
    <>
    {viewMode === "list" ? (
    <div className="relative">
{/*        <img src='/portfolio-assets/portfoliopagebg.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[650px] md:h-auto w-full object-cover z-10 top-[-80px] left-0" />
 */}       
       {/* <img src='/portfolio-assets/portfoliobgupdated.png' alt='bg'  className="hidden lg:block absolute inset-0 h-[500px] md:h-auto lg:h-[950px] HD:h-[1000px] MHD:h-[1300px] FHD:h-[1400px] w-full  z-10 top-[-80px] left-0" /> */}
      
       <img
            style={{
              position: "absolute",
              right: "0%",
              top: "-60px"
            }}
            src="/img/ecliptic-right.webp"
            alt="bg"
            className="hidden lg:block top-0  h-[70vh] object-contain z-10"
          />

          <img
            style={{
              position: "absolute",
              left: "0",
              top: "200px"
            }}
            src="/img/Auditbg.webp"
            alt="bg"
            className="hidden lg:block top-0  h-[70vh] object-contain z-10"
          />
       <img src='/portfolio-assets/portfoliosecondimg.png' alt='bg'  className="hidden lg:block absolute w-full z-1 lg:top-[600px] HD:top-[600px] MHD:top-[800px]" /> 
       <img src='/portfolio-assets/Frameportfoliobg.png' alt='bg'  className="hidden lg:block absolute z-1 top-[1120px] HDMAX:top-[1200px] MHD:top-[1400px] FHD:top-[1500px]  left-[21%] MHD:left-[26%] FHD:left-[28%]" /> 
       <img src='/portfolio-assets/Frame1portfoliobg.png' alt='bg'  className="hidden lg:block absolute z-1 top-[1550px] HD:top-[1450px] HDMAX:top-[1550px] MHD:top-[1800px] FHD:top-[2000px] left-[20%] MHD:left-[26%] FHD:left-[28%]" /> 
       {/* <img src='/portfolio-assets/Portfoliobg.png' alt='bg'  className="hidden lg:block absolute z-10 top-[2000px] XSM:top-[2950px] sm:top-[3200px] md:top-[3000px] lg:top-[900px] MHD:top-[1450px] right-0" />  */}
{/*        <img src='/portfolio-assets/forthPFbg.png' alt='bg'  className="hidden lg:block w-full absolute z-10 top-[2750px] XSM:top-[2950px] sm:top-[3200px] md:top-[3000px] lg:top-[1800px] MHD:top-[2300px]" /> 
 */}
       {/* <img src='/portfolio-assets/respherobg.png' alt='bg'  className=" lg:hidden absolute inset-0 h-[690px] XSM:h-[850px] sm:h-[1000px] md:h-[900px] w-full object-cover z-10 top-[-25px] left-0" /> */}
       {/* <img src='/portfolio-assets/respbg2.png' alt='bg'  className=" lg:hidden absolute inset-0  w-full object-cover z-10 top-[1000px] XSM:top-[1100px] md:top-[1200px] left-0" /> */}
       {/* <img src='/portfolio-assets/respbg3.png' alt='bg'  className=" md:hidden absolute inset-0  w-full object-cover z-[99] top-[1690px] XSM:top-[1700px] md:top-[1500px] left-0" /> */}
{/*        <img src='/portfolio-assets/faqbgresp.png' alt='bg'  className="lg:hidden absolute w-full h-[1100px] md:h-[500px] z-10 top-[3100px] XSM:top-[3150px] sm:top-[3500px] md:top-[3500px]" /> 
 */}

       <div className="relative z-10 flex justify-center align-center w-full top-[20px] lg:top-[80px] MHD:top-[50px]">
          <div className="w-[100%] md:w-[70%] MHD:w-[61%] flex flex-col lg:flex-row ">
              <div className="w-[98%] XXSM:w-[90%] XSM:w-[78%] sm:w-[55%] md:w-[63%] lg:mt-[40px] HDMAX:mt-[80px] MHD:mt-[150px] FHD:mt-[150px] lg:w-auto ml-[1%] XXSM:ml-[7%] XSM:ml-[10%] sm:ml-[25%] md:ml-[20%] lg:ml-[0%] flex flex-col flex-wrap lg:flex-nowrap items-center justify-center lg:items-start lg:justify-start flex-grow lg:flex-grow-0 lg:basis-[40%] ">
                  <p className="font-sabor mt-[-5%] px-2 text-[40px] XSM:text-[40px] py-[5px] lg:py-[0px] lg:mb-[35px] text-center lg:text-left">We've delivered</p>
                  <p className="px-1 lg:px-0 mt-[-5%] lg:mt-[-6%] MHD:mt-[-5%] py-[5px] lg:py-[0px] font-sora text-[40px] sm:text-[40px] lg:text-[80px] MHD:text-[100px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)]">
                   200+ <span className="lg:hidden">Successful</span>
                  </p>
                  <p className="hidden lg:block px-1 lg:px-0 mt-[-5%] lg:mt-[-6%]  MHD:mt-[-4%] py-[5px] lg:py-[0px] font-sora text-[40px] sm:text-[40px] lg:text-[50px] MHD:text-[60px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)]">
                   Successful 
                  </p>
                  <p className="px-1 lg:px-0 mt-[-5%] lg:mt-[-5%] MHD:mt-[-4%] py-[5px] lg:py-[0px] font-sora text-[40px] sm:text-[40px] lg:text-[50px] MHD:text-[60px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)]">
                   Projects
                  </p>
                  <Button
                    className={cn(
                      "hidden lg:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[10px]"
                    )}
                    onClick={() => window.open("https://calendly.com/yasir-programmx/30min", "_blank")}
                  >
                    Book a Discovery Call
                  </Button>
                <div className="hidden lg:block absolute transform translate-y-[-100%] lg:ml-[23%] HD:ml-[19%] MHD:ml-[14%] FHD:ml-[14.5%] lg:mt-[48%] HD:mt-[40%] HDMAX:mt-[37%] MHD:mt-[35%] FHD:mt-[36%]">
                  <img src='/img/email.png' alt='blogEmail' className="MHD:w-[300px] "   />
                </div>
              </div>
                <img src='/portfolio-assets/PortfolioPersonHero.svg' alt='blogHero' className=" hidden lg:block w-[60%] HD:w-[50%] lg:mt-[70px] HD:mt-[70px] HDMAX:mt-[70px] MHD:mt-[170px]  FHD:mt-[190px] lg:ml-[-23px] HD:ml-[-100px] HDMAX:ml-[-150px] MHD:ml-[-8%] z-20 "   />
                <div className="flex justify-center items-center">
                  {/* <img src='/portfolio-assets/PortfolioText.png' alt='blogHeromobile' className="lg:hidden mb-[20px]"   /> */}
                </div>
                <div className="flex justify-center items-center">
                  <img src='/portfolio-assets/PortfolioMobilePerson.svg' alt='blogHeromobile' className="lg:hidden w-[90%]"   />
                </div>
                <div className="hidden lg:block absolute z-99  lg:mt-[38%] HD:mt-[31.5%] HDMAX:mt-[31%] MHD:mt-[32%] FHD:mt-[32%] lg:ml-[63%] HD:ml-[53%] HDMAX:ml-[51%] MHD:ml-[47.5%] FHD:ml-[48%]">
                  <img src='/img/phone.png' alt='blogEmail' className="h-auto "   />
                </div>
                {/* <div className="hidden lg:block absolute z-99  lg:mt-[32%] HD:mt-[30%] MHD:mt-[32%] FHD:mt-[32%] lg:ml-[5%] HD:ml-[5%] MHD:ml-[5%] FHD:ml-[5%]">
                  <img src='/portfolio-assets/PenHero.svg' alt='blogEmail' className="h-auto "   />
                </div> */}
          </div>
      </div>

      <div className="mt-[100px] min-[1023px]:hidden">
            <CarouselMobile selectedTab={selectedTab} onSelectTab={handleSelectTab} />
      </div>

      <div className="lg:mt-[100px] MHD:mt-[130px]" >
        <PortfolioNavDesktop  selectedTab={selectedTab} onSelectTab={handleSelectTab} />
      </div> 

      <div className=" mb-[5%] " id="portfolio-nav">
          <PortfolioCard selectedCategory={selectedTab} 
           blogData={blogData} 
           onViewDetails={handleViewDetails}/>
      </div>

      {/* <div className="min-[1023px]:hidden">
        <PortfolioMobileForthSection />
      </div> */}

      <div className="mt-[100px] lg:mt-[10%] ">
        <PortfolioForthSection marginTop="mt-[260px] XSM:mt-[200px] sm:mt-[150px] md:mt-[200px] lg:mt-[150px] MHD:mt-[250px]" 
        marginBottom="mb-[30px] md:mb-[20px] lg:mb-[30px] MHD:mb-[80px]"
        smMarginTop="top-[-220px] XXSM:top-[-200px] XSM:top-[-140%] sm:top-[-70%] md:top-[-80%] MHD:top-[-90%]"
        showImage={true} />
      </div>
      
    </div>
  ) : (
    <div className="relative">

        <img src='/portfolio-assets/portfolioinnerbg.png' alt='bg'  className="hidden lg:block absolute MHD:opacity-[50] inset-0 w-full  z-0 top-[-100px] left-0" />
        <img src='/portfolio-assets/Frame1portfoliobg.png' alt='bg'  className="hidden lg:block absolute z-1 top-[240px] MHD:top-[250px] right-[250px] MHD:right-[520px] FHD:right-[650px] " /> 
        <img src='/blogresp/blueinner.png' alt='bg'  className="hidden lg:block absolute top-[400px] left-0 z-[0]" />
        <img src='/portfolio-assets/waves.png' alt='bg'  className="hidden lg:block absolute lg:top-[1000px] HD:top-[900px] right-0 z-[0]" />
        <img src='/blogresp/blueinnerRight.png' alt='bg'  className="hidden lg:block absolute lg:top-[1100px] HD:top-[1000px] right-0 z-[0]" />
{/*         <img src='/portfolio-assets/forthPFbg.png' alt='bg'  className="hidden lg:block w-full absolute z-10 top-[2100px] HD:top-[1900px] MHD:top-[1900px]" /> 
 */}
        <img src='/portfolio-assets/Maskinnerportfoliogroup.png' alt='bg'  className=" lg:hidden absolute inset-0 h-[750px] XSM:h-[850px] sm:h-[800px] md:h-[900px] w-full object-cover z-10 top-[-100px] left-0" />
        <img src='/portfolio-assets/blueinnerPF.png' alt='bg'  className=" lg:hidden absolute inset-0  w-full object-cover z-10 top-[120px] XSM:top-[200px] md:top-[300px] left-0" />
       <img src='/portfolio-assets/wavesinnerPf.png' alt='bg'  className=" md:hidden absolute inset-0  w-full object-cover z-[99] top-[900px] XSM:top-[800px] md:top-[800px] left-0" />
       <img src='/portfolio-assets/respbg2.png' alt='bg'  className=" lg:hidden absolute inset-0  w-full object-cover z-10 top-[1700px] XSM:top-[1600px] md:top-[1700px] left-0" />
{/*        <img src='/portfolio-assets/faqbgresp.png' alt='bg'  className="lg:hidden absolute w-full h-[1100px] md:h-[500px] z-10 top-[3100px] XSM:top-[3000px] sm:top-[3150px] md:top-[3500px]" /> 
 */}
 
         <div className="flex justify-center items-center z-[20]">
          <div className="w-[90%] lg:w-[70%]">
            <div className="flex flex-col justify-center items-center mt-[20px] MHD:mt-[30px]">
                  <p className=" font-sora text-[50px] XSM:text-[60px] leading-[47px] XSM:leading-[60px]  lg:leading-[72px] text-center font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)] z-[999]">
                    {selectedBlog.type}
                  </p>
                  <p className="font-sabor text-[30px] lg:text-[40px] text-center z-[99999] leading-[32px]  lg:leading-[43px] mt-[10px] lg:mt-[10px] MHD:mt-[15px]"> 
                    {selectedBlog.title}
                  </p>
                  <div className="flex items-center mt-[20px] gap-[20px] lg:mt-[20px] MHD:mt-[20px] lg:gap-[50px] MHD:gap-[80px]">
                    <div className="flex flex-col items-center">
                      <img src="/portfolio-assets/clockicon.svg" alt="clock" className="z-[99999] w-[44px] h-[45px]" />
                      <p className="font-sabor text-[20px] XSM:text-[30px] z-[99999]"> 
                        {selectedBlog.date}
                      </p>
                    </div>

                    <div className="flex flex-col items-center">
                      <img src="/portfolio-assets/members.svg" alt="clock" className="z-[99999] w-[61px] h-[45px]" />
                      <p className="font-sabor text-[20px] XSM:text-[30px] z-[99999]"> 
                        {selectedBlog.team}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center mt-[40px]">
                    <img src={selectedBlog.image} alt={`blog${selectedBlog.id}`} className="w-auto z-[99999]"  />
                </div>

                <p className="font-saborDisplaySSK text-[30px] lg:text-[40px] text-center z-[99999] mt-[40px]"> 
                  About
                </p>
                <p className="font-inter text-[20px] lg:text-[25px] text-center z-[99999] mt-[10px] leading-[31px]"> 
                  {selectedBlog.description}
                </p>
                <p className="font-saborDisplaySSK text-[30px] lg:text-[40px] text-center z-[99999] mt-[30px] lg:mt-[50px]"> 
                  Technologies
                </p>

                <div className="hidden  lg:flex justify-center items-center flex-nowrap mt-[30px] gap-[10px]">
                    <img src='/portfolio-assets/webrtc.svg' alt='icon'  />
                    <img src='/portfolio-assets/aws.png' alt='icon'  />
                    <img src='/portfolio-assets/docker.png' alt='icon'  />
                    <img src='/portfolio-assets/mongodb.svg' alt='icon'  />
                    <img src='/portfolio-assets/redux.png' alt='icon'  />
                    <img src='/portfolio-assets/nodeJs.png' alt='icon'  />
                    <img src='/portfolio-assets/Tailwind.svg' alt='icon' className="mx-[10px]"  />
                    <img src='/portfolio-assets/smartContracts.svg' alt='icon'  />
                </div>
                <div className="hidden lg:flex justify-center items-center flex-nowrap mt-[20px] lg:mt-[30px]">
                    <img src='/portfolio-assets/socialAuth.svg' alt='icon'  />
                    <img src='/portfolio-assets/expressJs.svg' alt='icon'  />
                    <img src='/portfolio-assets/react.svg' alt='icon'  />
                </div>

                <div className="lg:hidden flex justify-center items-center flex-nowrap XSM:gap-[10px] mt-[20px] lg:mt-[30px]">
                    <img src='/portfolio-assets/webrtc.svg' alt='icon' className="w-[71px] h-[61px]" />
                    <img src='/portfolio-assets/aws.png' alt='icon'  className="w-[71px] h-[61px]"/>
                    <img src='/portfolio-assets/docker.png' alt='icon' className="w-[71px] h-[61px]" />
                    <img src='/portfolio-assets/mongodb.svg' alt='icon' className="w-[71px] h-[61px]" />
                </div>
                <div className="lg:hidden flex justify-center items-center flex-nowrap XSM:gap-[10px] mt-[20px] lg:mt-[30px]">
                    <img src='/portfolio-assets/redux.png' alt='icon' className="w-[71px] h-[61px]"  />
                    <img src='/portfolio-assets/nodeJs.png' alt='icon' className="w-[71px] h-[61px]"  />
                    <img src='/portfolio-assets/Tailwind.svg' alt='icon'  className="w-[71px] h-[61px]"  />
                    <img src='/portfolio-assets/smartContracts.svg' alt='icon' className="w-[71px] h-[61px]"  />
                </div>
                <div className="lg:hidden flex justify-center items-center flex-nowrap XSM:gap-[10px] mt-[20px] lg:mt-[30px]">
                    <img src='/portfolio-assets/socialAuth.svg' alt='icon' className="w-[71px] h-[61px]"  />
                    <img src='/portfolio-assets/expressJs.svg' alt='icon' className="w-[71px] h-[61px]"  />
                    <img src='/portfolio-assets/react.svg' alt='icon' className="w-[71px] h-[61px]"  />
                </div>
            </div>
          </div>
        </div>

        <LovedThisProject />

        <div className="flex flex-col items-center z-[999] ">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-x-10 gap-y-10 lg:gap-y-16 w-[90%] md:w-[70%] mt-[100px] sm:mt-[120px] lg:mt-[120px] HD:mt-[120px] MHD:mt-[120px]">
        <p className="hidden lg:block font-saborDisplaySSK text-[40px] text-center z-[99999] leading-[44px]">See More Our Projects</p>
          {paginatedBlogs.map((blog) => (
            <div key={blog.id} className="grid lg:col-span-3 lg:grid-cols-4 gap-[30px] lg:gap-[20px] w-[100%]">
                <div className="flex flex-col justify-center items-center lg:items-start gap-[5px] lg:gap-[0px]  lg:col-span-1">
                    <p className="font-poppins text-[20px] font-normal text-[#0E35E3] text-center lg:text-left  z-[999]">{blog.title1}</p>
                    <p className="font-saborDisplaySSK text-[40px] lg:text-[35px] HD:text-[40px] font-normal text-center lg:text-left leading-[45px] z-[999]">{blog.title}</p>
                    <img src="/portfolio-assets/portfolioLine.svg" alt="line" className="mt-[10px]" />
                    <div className="flex gap-[20px] lg:gap-[10px] HD:gap-[21px] MHD:gap-[25px] z-[999] mt-[10px]">
                         <img src="/portfolio-assets/portfolioIcon1.svg" alt="icon" />
                         <img src="/portfolio-assets/portfolioIcon2.svg" alt="icon" />
                         <img src="/portfolio-assets/portfolioIcon3.svg" alt="icon" />
                         <img src="/portfolio-assets/portfolioIcon4.svg" alt="icon" />
                         <img src="/portfolio-assets/portfolioIcon5.svg" alt="icon" />
                    </div>    
                </div>

                <div className="flex justify-center items-center lg:block lg:col-span-2">
                    <img src={blog.image} alt={`blog${blog.id}`} className="w-auto z-[999]"  />
                </div>

                <div className="flex flex-col justify-center items-center lg:items-start gap-[10px] lg:col-span-1">
                    <p className="font-sabor text-[16px] font-normal text-[#CCD6F6] text-center lg:text-left leading-[19px] z-[999]">{blog.description}</p>
                    <Button
                      className={cn(
                        "bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[187px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway z-[9999] mt-[10px]"
                      )}
                      onClick={() => handleViewDetails(blog)}
                     >
                      View Details
                    </Button>
                </div>
            </div>
          
          ))}
        </div>
  
        {totalPages > 1 && (
          <div className="flex flex-col items-center z-[9999]">
          <div className=" z-[1000]  mt-8 w-[90%] md:w-[70%]">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                   /*  href="#" */
                   onClick={(e) => {
                    e.preventDefault(); // Prevent the default anchor click behavior
                    setPageNo((prev) => Math.max(prev - 1, 1));
                  }}
                   /*  onClick={() => setPageNo((prev) => Math.max(prev - 1, 1))} */
                    aria-disabled={pageNo === 1}
                    className="hover:bg-transparent cursor-pointer"
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      onClick={(e) => {
                        e.preventDefault(); // Prevent the default anchor click behavior
                        setPageNo(i + 1);
                      }}
                      /* onClick={() => setPageNo(i + 1)} */
                      className={pageNo === i + 1 ? "font-sabor text-[18px] text-blue-500 !important hover:bg-transparent cursor-pointer" : "font-sabor text-[18px] hover:bg-transparent cursor-pointer"}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default anchor click behavior
                      setPageNo((prev) => Math.min(prev + 1, totalPages));
                    }}
                    /* onClick={() => setPageNo((prev) => Math.min(prev + 1, totalPages))} */
                    aria-disabled={pageNo === totalPages}
                    className="hover:bg-transparent cursor-pointer"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          </div>
        )}
        </div>

        <div className="mt-[100px] lg:mt-[10%] ">
          <PortfolioForthSection marginTop="mt-[260px] XSM:mt-[200px] sm:mt-[150px] md:mt-[200px] lg:mt-[150px] MHD:mt-[250px]" 
          marginBottom="mb-[30px] md:mb-[20px] lg:mb-[30px] MHD:mb-[80px]"
          smMarginTop="top-[-220px] XXSM:top-[-200px] XSM:top-[-140%] sm:top-[-70%] md:top-[-80%] MHD:top-[-90%]"
          showImage={false} />
       </div>


    </div>
  )
}
</>
  );
}

 