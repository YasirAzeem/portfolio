'use client';

import ContactUsMain from "@/components/ContactUs/ContactUsMain";
import PortfolioMain from "@/components/PortfolioComponent/Portfolio";
import SuccessPFSolution from "@/components/PortfolioComponent/SuccessSolution";
import Footer from "@/components/portfolioFooter";
import React, { useEffect } from "react";
import posthog from 'posthog-js';

const ContactPage = () => {


  useEffect(() => {
    posthog.capture('Contact Page Visit');
  }, []);

  return (
    <>
      <ContactUsMain />
      {/* <SuccessPFSolution /> */}
      <Footer />
    </>
  );
};

export default ContactPage;
