"use client";

import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface GradientBtnProps {
  text: string;
  url: string;
  className?: string;
}

const GradientBtn: React.FC<GradientBtnProps> = ({ text, url, className }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        // "bg-[linear-gradient(87.43deg,#090EDB_8.8%,#DA24BB_84.38%)] w-[180px] md:w-[204px] h-[38px] md:h-[54px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway",
        "bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[204px] h-[38px] md:h-[54px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway",
        className
      )}
    >
      {text}
    </Button>
  );
};

export default GradientBtn;
