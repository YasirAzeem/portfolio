'use client'
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE_DESKTOP = 3;
const ITEMS_PER_PAGE_MOBILE = 3;

/* const blogData = [
    {
      id: 1,
      image: '/portfolio-assets/Portfolio1.svg',
      title1: 'Featured Project',
      title: 'Foundation Internet Organization',
      description: "At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.",
      type: 'Web Development'
    },
    {
      id: 2,
      image: '/portfolio-assets/Portfolio2.svg',
      title1: 'Ecommerce',
      title: 'Ecommerce Platform',
      description: 'Elevate your business to new heights with our cutting-edge real-time e-commerce platform. Our robust solution seamlessly integrates advanced technologies to offer a dynamic and personalized shopping experience. Experience the convenience of instantaneous transactions and efficient inventory management',
      type: 'Ecommerce'
    },
    {
        id: 3,
        image: '/portfolio-assets/Portfolio3.svg',
        title1: 'Blockchain',
        title: 'Consortia',
        description: "At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.",
        type: 'Blockchain'
      },
      {
        id: 4,
        image: '/portfolio-assets/Portfolio1.svg',
        title1: 'Featured Project',
        title: 'Foundation Internet Organization',
        description: "At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.",
        type: 'AI'
      },
      {
        id: 5,
        image: '/portfolio-assets/Portfolio3.svg',
        title1: 'Blockchain',
        title: 'Consortia',
        description: "At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.",
        type: 'Blockchain'
      },
      {
          id: 6,
          image: '/portfolio-assets/Portfolio2.svg',
          title1: 'Ecommerce',
          title: 'Ecommerce Platform',
          description: 'Elevate your business to new heights with our cutting-edge real-time e-commerce platform. Our robust solution seamlessly integrates advanced technologies to offer a dynamic and personalized shopping experience. Experience the convenience of instantaneous transactions and efficient inventory management',
          type: 'Ecommerce'
        },
        {
          id: 7,
          image: '/portfolio-assets/Portfolio1.svg',
          title1: 'Featured Project',
          title: 'Foundation Internet Organization',
          description: "At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.",
          type: 'AI'
        },
        {
          id: 8,
          image: '/portfolio-assets/Portfolio3.svg',
          title1: 'Blockchain',
          title: 'Consortia',
          description: "At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.",
          type: 'Blockchain'
        },
        {
            id: 9,
            image: '/portfolio-assets/Portfolio2.svg',
            title1: 'Ecommerce',
            title: 'Ecommerce Platform',
            description: 'Elevate your business to new heights with our cutting-edge real-time e-commerce platform. Our robust solution seamlessly integrates advanced technologies to offer a dynamic and personalized shopping experience. Experience the convenience of instantaneous transactions and efficient inventory management',
            type: 'Ecommerce'
          },
          {
            id: 10,
            image: '/portfolio-assets/Portfolio1.svg',
            title1: 'Featured Project',
            title: 'Foundation Internet Organization',
            description: "At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.",
            type: 'AI'
          },
          {
            id: 11,
            image: '/portfolio-assets/Portfolio1.svg',
            title1: 'Featured Project',
            title: 'Foundation Internet Organization',
            description: "At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.",
            type: 'Web Development'
          },
          {
            id: 12,
            image: '/portfolio-assets/Portfolio1.svg',
            title1: 'Featured Project',
            title: 'Foundation Internet Organization',
            description: "At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.",
            type: 'Web Development'
          },
          {
            id: 13,
            image: '/portfolio-assets/Portfolio3.svg',
            title1: 'Blockchain',
            title: 'Consortia',
            description: "At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.",
            type: 'Blockchain'
          },
          {
            id: 14,
            image: '/portfolio-assets/Portfolio3.svg',
            title1: 'Blockchain',
            title: 'Consortia',
            description: "At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.",
            type: 'Blockchain'
          },
          {
            id: 15,
            image: '/portfolio-assets/Portfolio3.svg',
            title1: 'Blockchain',
            title: 'Consortia',
            description: "At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.",
            type: 'Blockchain'
          },
      
  ]; */

type BlogCardProps = {
  selectedCategory: string;
  blogData: Blog[]; // Array of Blog objects
  onViewDetails: (blog: string) => void;
};

export default function PortfolioCard({ selectedCategory, blogData, onViewDetails }: BlogCardProps) {
  const [pageNo, setPageNo] = useState(1);

  // Detect if it's a mobile view or not
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const itemsPerPage = isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP;


  const filteredBlogs = blogData.filter(blog =>
    selectedCategory === "All" || blog.type.toLowerCase() === selectedCategory.toLowerCase() ||
    (selectedCategory.toLowerCase() === "web" && blog.type.toLowerCase() === "web development")
  );

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);


  const paginatedBlogs = filteredBlogs.slice(
    (pageNo - 1) * itemsPerPage,
    pageNo * itemsPerPage
  );

  useEffect(() => {
    setPageNo(1);
  }, [selectedCategory]);



  return (
    <div className="flex flex-col items-center z-[9999] ">

      <div className="grid grid-cols-1 md:grid-cols-1 gap-x-10 gap-y-10 lg:gap-y-16 w-[90%] md:w-[70%] MHD:w-[65%] mt-[20px] lg:mt-[150px] HD:mt-[180px] MHD:mt-[220px]">
        {paginatedBlogs.map((blog) => (
          <div key={blog.id} className="grid lg:col-span-3 lg:grid-cols-4 gap-[30px] lg:gap-[20px] w-[100%]">
            <div className="flex flex-col justify-center items-center lg:items-start gap-[5px] lg:gap-[10px] MHD:gap-[10px] MHD:pl-[40px] FHD:pl-[30%]  lg:col-span-1">
              <p className="font-poppins text-[20px] font-normal text-[#0E35E3] text-center lg:text-left  z-[999]">{blog.title1}</p>
              <p className="font-saborDisplaySSK text-[40px] lg:text-[35px] HD:text-[40px] font-normal text-center lg:text-left leading-[45px] z-[999]">{blog.title}</p>
              <img src="/portfolio-assets/portfolioLine.svg" alt="line" />
              <div className="flex gap-[20px] lg:gap-[10px] HD:gap-[21px] MHD:gap-[27px] z-[999]">
                <img src="/portfolio-assets/portfolioIcon1.svg" alt="icon" />
                <img src="/portfolio-assets/portfolioIcon2.svg" alt="icon" />
                <img src="/portfolio-assets/portfolioIcon3.svg" alt="icon" />
                <img src="/portfolio-assets/portfolioIcon4.svg" alt="icon" />
                <img src="/portfolio-assets/portfolioIcon5.svg" alt="icon" />
              </div>
            </div>

            <div className="w-full flex justify-center  items-center lg:col-span-2">
              <div>
                <img src={blog.image} alt={`blog${blog.id}`} className="w-[100vw] z-[999]" />
                {/* <img src={blog.image} alt={`blog${blog.id}`} className="w-auto z-[999]" /> */}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start gap-[10px] lg:col-span-1">
              <p className="font-sabor text-[16px] font-normal text-[#CCD6F6] text-center lg:text-left leading-[19px] z-[999]">{blog.description.length > 270 ? blog.description.split(" ").slice(0, 42).join(" ") + "..." : blog.description}</p>
              <Button
                className={cn(
                  "bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[187px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway z-[9999] mt-[10px]"
                )}
                onClick={() => onViewDetails(blog)}
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
  );
}

