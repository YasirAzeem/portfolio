"use client";
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

const ITEMS_PER_PAGE_DESKTOP = 6;
const ITEMS_PER_PAGE_MOBILE = 4;

/* const blogData = [
    {
      id: 1,
      image: '/img/Blog1.png',
      date: 'Blockchain Mar 19, 2024',
      title: 'Blockchain and Sustainable Development',
      description: "Blockchain's decentralized and transparent features are harnessed to tackle challenges in sustainability, social impact, and economic development.",
      type: 'Blockchain'
    },
    {
      id: 2,
      image: '/img/Blog2.png',
      date: 'Blockchain Mar 20, 2024',
      title: 'Understanding Consensus Mechanisms',
      description: 'Consensus mechanisms are fundamental to blockchain networks, determining how participants agree on the validity of transactions.',
      type: 'AI'
    },
    {
        id: 3,
        image: '/img/Blog1.png',
        date: 'Blockchain Mar 19, 2024',
        title: 'Blockchain and Sustainable Development',
        description: "Blockchain's decentralized and transparent features are harnessed to tackle challenges in sustainability, social impact, and economic development.",
        type: 'Web Development'
      },
      {
        id: 4,
        image: '/img/Blog2.png',
        date: 'Blockchain Mar 20, 2024',
        title: 'Understanding Consensus Mechanisms',
        description: 'Consensus mechanisms are fundamental to blockchain networks, determining how participants agree on the validity of transactions.',
        type: 'Ecommerce'
      },
      {
        id: 5,
        image: '/img/Blog1.png',
        date: 'Blockchain Mar 19, 2024',
        title: 'Blockchain and Sustainable Development',
        description: "Blockchain's decentralized and transparent features are harnessed to tackle challenges in sustainability, social impact, and economic development.",
        type: 'Web Development'
      },
      {
        id: 6,
        image: '/img/Blog2.png',
        date: 'Blockchain Mar 20, 2024',
        title: 'Understanding Consensus Mechanisms',
        description: 'Consensus mechanisms are fundamental to blockchain networks, determining how participants agree on the validity of transactions.',
        type: 'AI'
      },
      {
        id: 7,
        image: '/img/Blog1.png',
        date: 'Blockchain Mar 19, 2024',
        title: 'Blockchain and Sustainable Development',
        description: "Blockchain's decentralized and transparent features are harnessed to tackle challenges in sustainability, social impact, and economic development.",
        type: 'Ecommerce'
      },
      {
        id: 8,
        image: '/img/Blog1.png',
        date: 'Blockchain Mar 19, 2024',
        title: 'Blockchain and Sustainable Development',
        description: "Blockchain's decentralized and transparent features are harnessed to tackle challenges in sustainability, social impact, and economic development.",
        type: 'Blockchain'
      },
      {
        id: 9,
        image: '/img/Blog2.png',
        date: 'Blockchain Mar 20, 2024',
        title: 'Understanding Consensus Mechanisms',
        description: 'Consensus mechanisms are fundamental to blockchain networks, determining how participants agree on the validity of transactions.',
        type: 'Web Development'
      },
      {
        id: 10,
        image: '/img/Blog2.png',
        date: 'Blockchain Mar 20, 2024',
        title: 'Understanding Consensus Mechanisms',
        description: 'Consensus mechanisms are fundamental to blockchain networks, determining how participants agree on the validity of transactions.',
        type: 'AI'
      },
      {
        id: 11,
        image: '/img/Blog2.png',
        date: 'Blockchain Mar 20, 2024',
        title: 'Understanding Consensus Mechanisms',
        description: 'Consensus mechanisms are fundamental to blockchain networks, determining how participants agree on the validity of transactions.',
        type: 'Ecommerce'
      },
      {
        id: 12,
        image: '/img/Blog2.png',
        date: 'Blockchain Mar 20, 2024',
        title: 'Understanding Consensus Mechanisms',
        description: 'Consensus mechanisms are fundamental to blockchain networks, determining how participants agree on the validity of transactions.',
        type: 'Blockchain'
      },
      {
        id: 13,
        image: '/img/Blog2.png',
        date: 'Blockchain Mar 20, 2024',
        title: 'Understanding Consensus Mechanisms',
        description: 'Consensus mechanisms are fundamental to blockchain networks, determining how participants agree on the validity of transactions.',
        type: 'Web Development'
      },
      {
        id: 14,
        image: '/img/Blog2.png',
        date: 'Blockchain Mar 20, 2024',
        title: 'Understanding Consensus Mechanisms',
        description: 'Consensus mechanisms are fundamental to blockchain networks, determining how participants agree on the validity of transactions.',
        type: 'AI'
      },
      {
        id: 15,
        image: '/img/Blog2.png',
        date: 'Blockchain Mar 20, 2024',
        title: 'Understanding Consensus Mechanisms',
        description: 'Consensus mechanisms are fundamental to blockchain networks, determining how participants agree on the validity of transactions.',
        type: 'Ecommerce'
      },
      {
        id: 16,
        image: '/img/Blog2.png',
        date: 'Blockchain Mar 20, 2024',
        title: 'Understanding Consensus Mechanisms',
        description: 'Consensus mechanisms are fundamental to blockchain networks, determining how participants agree on the validity of transactions.',
        type: 'Blockchain'
      },
  ]; */

type BlogCardProps = {
  selectedCategory: string;
  blogData: Blog[]; // Array of Blog objects
  onViewDetails: (blog: string) => void;
};

export default function BlogCard({
  selectedCategory,
  blogData,
  onViewDetails,
}: BlogCardProps) {
  const [pageNo, setPageNo] = useState(1);

  // Detect if it's a mobile view or not
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const itemsPerPage = isMobile
    ? ITEMS_PER_PAGE_MOBILE
    : ITEMS_PER_PAGE_DESKTOP;

  const filteredBlogs = blogData.filter(
    (blog) =>
      selectedCategory === "All" ||
      blog.type.toLowerCase() === selectedCategory.toLowerCase() ||
      (selectedCategory.toLowerCase() === "web" &&
        blog.type.toLowerCase() === "web development")
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
    <div className="relative flex flex-col items-center z-[999] mb-[70px] lg:mb-8">
      <img
        src="/img/blogleftarrow.png"
        alt="bg"
        className="hidden lg:block absolute z-0 left-0 bottom-[-50px]"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 lg:gap-y-16 w-[90%] md:w-[70%] mt-[60px]">
        {paginatedBlogs.map((blog) => (
          <div key={blog.id} className="flex flex-col gap-[10px] lg:gap-[10px]">
            <img
              src={blog.image}
              className="rounded-lg lg:max-h-[200px]"
              alt={`blog${blog.id}`}
            />
            <p className="font-inter text-[13px] mt-[10px] lg:mt-[0px] font-normal text-[#8A8A8A] text-left z-[999]">
              {blog.date}
            </p>
            <p className="font-inter MHD:w-[460px] text-[25px] md:text-[36px] font-bold text-[#F1F1F1] text-left z-[999] leading-[27px] md:leading-[43px]">
              {blog.title}
            </p>
            <p className="font-inter text-[18px] font-normal text-[#8c8c8c] text-left z-[999] leading-[24px] md:leading-[30px] mt-[-8px] md:mt-[0px]">
              {blog.description}
            </p>
            <Button
              className={cn(
                "bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[187px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway lg:mt-[10px]"
              )}
              onClick={() => onViewDetails(blog)}
            >
              View Details
            </Button>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="relative flex flex-col items-center">
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
                      className={
                        pageNo === i + 1
                          ? "font-sabor text-[18px] text-blue-500 !important hover:bg-transparent cursor-pointer"
                          : "font-sabor text-[18px] hover:bg-transparent cursor-pointer"
                      }
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
