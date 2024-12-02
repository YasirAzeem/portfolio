'use client'

import PortfolioMain from "@/components/PortfolioComponent/Portfolio";
import SuccessPFSolution from "@/components/PortfolioComponent/SuccessSolution";
import Footer from "@/components/portfolioFooter";
import ServicesMain from "@/components/ServicesComponent/ServicesMain";
import React, {useEffect} from "react";
import posthog from 'posthog-js';


const Page = () => {


  return (
    <>
      <ServicesMain />
      {/* <SuccessPFSolution /> */}
      <Footer /> 
    </>
  );
};

export default Page;
