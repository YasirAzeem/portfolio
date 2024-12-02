"use client";
import React, { useState } from "react";
import logoDark from "../../public/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";

export default function TopNav() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown on mouse enter and leave
  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <div>
      {/* for desktop & laptop */}
      <div className="bg-[#0F312A] w-full md:w-[70%] z-[999999] mx-auto sm:px-6 border border-[#454545] rounded-2xl relative max-lg:hidden mt-4 shadow-[0px_4px_15px_#76D7C4]">
        <div className="flex items-center justify-between h-22 relative z-[999999]">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center py-2">
              <Link href="/">
                <Image
                  className="cursor-pointer"
                  src={logoDark}
                  width={280}
                  height={40}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-6 2xl:gap-10">
              <Link
                href="/"
                className={`text-base font-medium cursor-pointer ${pathname === "/" ? "text-[#FFFFFF]" : ""}`}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className={`text-base font-medium cursor-pointer ${pathname === "/blog" ? "text-[#FFFFFF]" : ""}`}
              >
                Blog
              </Link>
              <Link
                href="/Portfolio"
                className={`text-base font-medium cursor-pointer ${pathname === "/portfolio" ? "text-[#FFFFFF]" : ""}`}
              >
                Portfolio
              </Link>
              <Link
                href="/Services"
                className={`text-base font-medium cursor-pointer ${pathname === "/Services" ? "text-[#FFFFFF]" : ""}`}
              >
                Services
              </Link>
              <div 
                className="relative" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
              >
                {/* <button
                  className={`text-base font-medium cursor-pointer ${pathname === "/Services" ? "text-[#FFFFFF]" : ""}`}
                > */}
                <button
                  className={`text-base font-medium cursor-pointer`}
                >
                  Hire a Developer
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-[600px] bg-[#0F312A] border border-[#454545] rounded-md shadow-lg z-10 p-4">
                    <div className="grid grid-cols-3 gap-4 text-white">
                      <div>
                        <h3 className="font-semibold mb-2">Hire Web Developer</h3>
                        <Link
                          href="/Hire-php"
                          className={` block px-4 py-2 hover:bg-[#1A4A3A] rounded-md ${pathname === "/HirePHP" ? "text-[#FFFFFF]" : ""}`}
                        >
                          Hire PHP Developer
                        </Link>
                        <Link
                          href="/Hire-Laravel"
                          className="block px-4 py-2 hover:bg-[#1A4A3A] rounded-md"
                        >
                          Hire Laravel Developer
                        </Link>
                        <Link
                          href="/Hire-SQL"
                          className="block px-4 py-2 hover:bg-[#1A4A3A] rounded-md"
                        >
                          Hire SQL Developer
                        </Link>
                        <Link
                          href="/Hire-Python"
                          className="block px-4 py-2 hover:bg-[#1A4A3A] rounded-md"
                        >
                          Hire Python Developer
                        </Link>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Hire Js Developer</h3>
                        <Link
                          href="/Hire-react"
                          className="block px-4 py-2 hover:bg-[#1A4A3A] rounded-md"
                        >
                          Hire ReactJS Developer
                        </Link>
                        <Link
                          href="/Hire-vuejs"
                          className="block px-4 py-2 hover:bg-[#1A4A3A] rounded-md"
                        >
                          Hire VueJS Developer
                        </Link>
                        <Link
                          href="/Hire-angular"
                          className="block px-4 py-2 hover:bg-[#1A4A3A] rounded-md"
                        >
                          Hire AngularJS Developer
                        </Link>
                        <Link
                          href="/Hire-Nodejs"
                          className="block px-4 py-2 hover:bg-[#1A4A3A] rounded-md"
                        >
                          Hire NodeJS Developer
                        </Link>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Hire CMS Developer</h3>
                        <Link
                          href="/Hire-WP"
                          className="block px-4 py-2 hover:bg-[#1A4A3A] rounded-md"
                        >
                          Hire WordPress Developer
                        </Link>
                        <Link
                          href="/Hire-shopify"
                          className="block px-4 py-2 hover:bg-[#1A4A3A] rounded-md"
                        >
                          Hire Shopify Developer
                        </Link>
                        <Link
                          href="/Hire-wix"
                          className="block px-4 py-2 hover:bg-[#1A4A3A] rounded-md"
                        >
                          Hire WIX Developer
                        </Link>
                        <Link
                          href="/Hire-webflow"
                          className="block px-4 py-2 hover:bg-[#1A4A3A] rounded-md"
                        >
                          Hire Webflow Developer
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/Contact"
                className={`text-base font-medium cursor-pointer ${pathname === "/Contact" ? "text-base font-medium text-[#FFFFFF]" : ""}`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {/* Uncomment and use these components as needed */}
            {/* <ModeToggle /> */}
            {/* <Button
              className="dark:bg-transparent dark:text-white text-[#1936BA] bg-white dark:hover:bg-[#1936BA] text-base border dark:border-[#1936BA] border-white rounded-[10px] w-[140px] h-[34px]"
              onClick={() =>
                window.open("https://calendly.com/yasir-programmx/30min", "_blank")
              }
            >
              Book a Call
            </Button> */}
          </div>
        </div>
      </div>

      {/* for mobile & tablet */}
      <div className="lg:hidden relative z-[999999]">
        <div className="h-[80px] w-full flex items-center mx-auto bg-gray-950/5">
          <div className="ml-4 flex-shrink-0">
            <MobileNav />
          </div>
          <div className="flex-1 flex justify-center pr-12">
            <Link href="/">
              <Image
                src={logoDark}
                alt="Logo"
                objectFit="contain"
                width={150}
                height={20}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}