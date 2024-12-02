"use client";
import React, { useEffect } from "react";
import ArtShowcase from "@/components/ArtShowcase";
import BeforeProcess from "@/components/before-process";
import BookAudit from "@/components/book-audit";
import Clients from "@/components/clients";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import SuccessHomeSolution from "@/components/HomeSuccessSolution";
import LetsTalk from "@/components/lets-talk";
import OurProcess from "@/components/our-process";
import OurResult from "@/components/our-result";
import MyScript from "@/components/script";
import WeWill from "@/components/we-will";
import posthog from "posthog-js";
import * as Sentry from "@sentry/nextjs";

// types.d.ts
interface Reb2b {
  identify: (userId: string) => void;
  collect: (event: string, data: object) => void;
  load: (key: string) => void;
}

declare const reb2b: Reb2b;

export default function Home() {
  /*  useEffect(() => {
    const retryDelay = 1000; // Retry every 1 second
    const maxRetries = 10; // Retry up to 10 times
    let attempts = 0;

    const tryReb2b = () => {
      if (typeof reb2b !== "undefined" && typeof reb2b.identify === "function") {
        reb2b.collect('Page View', { page: '/home' });
        console.log("reb2b fired");
      } else {
        attempts++;
        if (attempts < maxRetries) {
          console.warn("reb2b not ready, retrying...");
          setTimeout(tryReb2b, retryDelay);
        } else {
          console.error("reb2b failed to load after multiple attempts.");
        }
      }
    };

    setTimeout(tryReb2b, retryDelay); // Start the first attempt after 1 second
  }, []); */




  return (
    <main className="bg-black">
      {/* <MyScript /> */}
      <HeroSection />
      <ArtShowcase />
      <BookAudit />
      <Clients />
      <WeWill />
      <BeforeProcess />
      <OurProcess />
      {/* <SuccessHomeSolution /> */}
      {/* <SuccessSolution />   */}
      <OurResult />
      <FAQ />
      <LetsTalk />
      <Footer />
    </main>
  );
}
