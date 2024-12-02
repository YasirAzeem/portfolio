'use client'
import React, {useEffect} from "react";
import BlogHeroSection from "@/components/BlogHeroSection/BlogHeroSection";
import Footer from "@/components/portfolioFooter";
import SuccessSolution from "@/components/successSolutionPortfolio";
import posthog from 'posthog-js';
import SuccessPFSolution from "@/components/PortfolioComponent/SuccessSolution";

export default function Home() {



  return (
    <>
    <BlogHeroSection />
    {/* <SuccessPFSolution /> */}
    <div className="mt-0 mb-0 md:mb-0 lg:mb-0 md:mt-[140px] lg:mt-[0px]">
        <Footer />
    </div>
    </>
  );
}

 