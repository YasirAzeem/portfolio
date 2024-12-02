import Image from "next/image";
import React from "react";
import heroRight from "../../public/art/hero-right.png";
import TECHNOLOGY from "../../public/art/TECHNOLOGY.svg";
import background from "../../public/art/background.svg";

export default function ArtShowcase() {
  return (
    <div className="overflow-hidden bg-black">
      <Image
        className="absolute top-28 right-0 max-md:hidden"
        src={heroRight}
        width={450}
        height={686}
        alt="hero"
        priority
      />
      <Image
        className="absolute max-md:hidden top-28 left-[6%] z-10"
        src={TECHNOLOGY}
        width={140}
        height={1280}
        alt="hero"
        priority
      />
    </div>
  );
}
