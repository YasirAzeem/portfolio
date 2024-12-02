"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import memoji from "../../public/art/client1.png";
import memoji1 from "../../public/art/client2.png";
import memoji2 from "../../public/art/client3.png";
import memoji3 from "../../public/art/client4.png";
import memoji4 from "../../public/art/client5.png";
import memoji5 from "../../public/art/client.png";
import memoji6 from "../../public/art/client7.png";
import memoji7 from "../../public/art/client6.png";
import memoji8 from "../../public/art/client8.png";
import memoji9 from "../../public/art/client9.png";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Christie Ross",
      designation: "CEO of you've gotmail again",
      message: `Flexlab Was Always On Time, Always Extremely Communicative, And Always Friendly With A "I
Can Do It" Attitude. Team Worked With My
Schedule And Was Always Extremely
Professional And Trustworthy`,
      image: memoji2,
    },
    {
      name: "Daniella Mercer",
      designation: "Daniella Mercer",
      message: `Flexlab Consistently Surpasses Expectations By Delivering Exceptional Blockchain Development
Services.The team is known for its timely response and competitive pricing, making it a leader in the industry..`,
      image: memoji3,
    },
    {
      name: "Juan Sanjuan-Hernandez",
      designation: "CEO of TodyCoin",
      message: `Revolutionizing Our Full-Stack And Blockchain
Project! The Developers Crafted An Ethereum
And BNB Coin, The Sleek Exchange Site, And The
Dynamic Platform Hosting Multiple Currencies.`,
      image: memoji4,
    },
    {
      name: "Jake white",
      designation: "CEO of Convrtx",
      message: `
Exemplifying Remarkable Dedication And
Unwavering Motivation Are Defining Traits In The
Every Endeavor He Undertakes.`,
      image: memoji1,
    },
    {
      name: "Doug Brooks",
      designation: "CEO of Panama Island",
      message: `Innovative Expertise! With 5+ Years Of
Experience, This Professional Crafts Fast,
Original, And High-Quality Websites And
Applications.`,
      image: memoji,
    },
    {
      name: "Natan Portnoy",
      designation: "CEO of FairTrader",
      message: `Flexlab Provides Ongoing High-Quality
Development Support At An Affordable Price. Their Team Has Been Very Communicative, Proactive,
And Good About Listening`,
      image: memoji5,
    },
    {
      name: "Rcrimi",
      designation: "Entrepreneur",
      message: `Great team for blockchain development and smart contract creation for our GSV project`,
      image: memoji9,
    },
    {
      name: "Mircadollc",
      designation: "Product Designer",
      message: `They are very cooperative and responsible. Appreciate their patience while explaining technical terms to someone non technical like me. Looking forward to work with them in future`,
      image: memoji6,
    },
    {
      name: "Julien",
      designation: "Solo-Entreprenuer",
      message: `I am more than pleased with their work and would recommend to anyone. If you want a well-done project and executed on time, Choose Flexlab`,
      image: memoji7,
    },
    {
      name: "Maurice Carr",
      designation: "Entrepreneur",
      message: `The team was extremely responsiveness and was very open to my edits throughout the project and feedback. They very easy to work with`,
      image: memoji8,
    },
  ];

  // Group testimonials into sets of 3 and handle the last slide
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    let group = testimonials.slice(i, i + 3);
    if (group.length < 3) {
      group = [...group, ...testimonials.slice(0, 3 - group.length)];
    }
    groupedTestimonials.push(group);
  }

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{ loop: true }}
      className="w-full min-[1140px]:max-w-5xl mx-auto"
    >
      <CarouselContent className="ml-0">
        {groupedTestimonials.map((group, index) => (
          <CarouselItem key={index} className="flex flex-col gap-4">
            {group.map((testimonial, index) => (
              <Card key={index} className="p-0 h-fit overflow-hidden">
                <CardContent className="bg-[#3E3C3D80] w-full p-3 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-base grid grid-cols-5 gap-1 w-fit">
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <Star
                            key={index}
                            className="text-yellow-500"
                            fill="currentColor"
                          />
                        ))}
                    </span>
                    <p className="text-base mt-2 text-[#FEF9F6] w-fit">
                      {testimonial.message}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        width={40}
                        height={40}
                        alt="Avatar"
                        className="rounded-full"
                      />
                      <p className="text-sm text-[#BCB9B4]">
                        {testimonial.name}
                      </p>
                    </div>
                    <p className="text-sm text-[#BCB9B4] text-end my-auto">
                      {testimonial.designation}{" "}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:block" />
      <CarouselNext className="hidden lg:block" />
    </Carousel>
  );
}