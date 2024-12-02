"use client";

import PortfolioMain from "@/components/PortfolioComponent/Portfolio";
import SuccessPFSolution from "@/components/PortfolioComponent/SuccessSolution";
import Footer from "@/components/portfolioFooter";
import React, { useEffect } from "react";
import posthog from "posthog-js";

const Page = () => {
  useEffect(() => {
    posthog.capture("Portfolio Page Visit");
  }, []);

  return (
    <>
      <PortfolioMain />
      {/* <SuccessPFSolution /> */}
      <Footer />
    </>
  );
};

export default Page;
