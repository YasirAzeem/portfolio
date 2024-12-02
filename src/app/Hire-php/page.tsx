import React from "react";
import Link from "next/link";
import Image from "next/image";
import EnterpriseImg from "../../../public/img/Enterprise-1.png.png";
import eCommerceImg from "../../../public/img/Online-shopping.png";
import Frontend from "./../../../public/img/Frontend.png.png";
import Migration from "./../../../public/img/Migration.png.png";
import Integration from "./../../../public/img/Integration.png.png";
import Plugin from "./../../../public/img/Plugin-Development.png.png";
import Support from "./../../../public/img/Support-and-Maintenance.png.png";
import Consulting from "./../../../public/img/React-Consulting.png.png";
import "./hire.css";
import backgroundImage11 from "./portfolioinnerbg.png";
import process from "./../../../public/img/process1-1.png.png";
import process2 from "./../../../public/img/process2.png.png";
import process3 from "./../../../public/img/process3.png.png";
import NDA from "./../../../public/img/NDA.png.png";
import process5 from "./../../../public/img/process5.png.png";
import process4 from "./../../../public/img/process4.png.png";
import process7 from "./../../../public/img/process7.png.png";
import process9 from "./../../../public/img/process9.png.png";
import process8 from "./../../../public/img/process8.png.png";
import Footer from "@/components/portfolioFooter";
import PortfolioMain from "@/components/PortfolioComponent/Portfolio";

const Row = [
  {
    text: [
      "Frameworks",
      "CorePHP ",
      "CodeIgniter",
      "Laravel ",
      "Symfony",
      "Yii",
      "CakePHP",
    ],
  },

  { text: ["CMS", "WordPress  ", " Joomla", " Drupal "] },

  { text: ["eCommerce", "WordPress & WooCommerce  ", " Magento", " Shopify "] },

  { text: ["Front-end", "jQuery  ", "React ", "Angular ", "Vue", "Bootstrap"] },

  { text: ["Database", "MYSQL ", "MongoDB ", "MariaDB ", "Oracle"] },

  { text: ["Version Control", "Oracle ", "Bitbucket", "Gitlab ", "SVN"] },

  {
    text: [
      "Cloud & DevOps",
      "Amazon Web Services(AWS)  ",
      "Google Cloud",
      "Docker ",
    ],
  },

  {
    text: [
      "APIs",
      "Facebook API ",
      "Google API",
      "GoogleMap API  ",
      "Twitter API",
      "LinkedIn API",
      "Instagram API",
      "Pinterest API",
      "Reddit API",
    ],
  },

  { text: ["Designer Tool", "Xd Adobe  ", "Invision App"] },

  { text: ["Testing", "phpunit  ", "BrowserStack", "Postman ", "Test Rail"] },

  {
    text: [
      "Communication Tools",
      "Skype ",
      "Slack",
      "Microsoft Team ",
      "Google Chat",
    ],
  },

  { text: ["Meeting", "Zoom ", "Google Meet"] },

  { text: ["Editor", "Visual Studio Code ", "Sublime", " Notepad++"] },

  {
    text: [
      "Project Management Tools",
      "Asana ",
      "Trello",
      "JIRA ",
      " BaseCamp",
    ],
  },
];

const boxes = [
  { imgSrc: process, text: "Requirements Gathering" },
  { imgSrc: process2, text: "Define Resource on Requirements" },
  { imgSrc: process3, text: "Resumes Provide Requirements of Client" },
  { imgSrc: NDA, text: "Signing of NDA" },
  { imgSrc: process5, text: "Finalizing the Team/Resource" },
  { imgSrc: process4, text: "Screening & Interview Process" },
  { imgSrc: process7, text: "Agreement of the Payment Terms" },
  { imgSrc: process8, text: "Kick-Off Meeting" },
  { imgSrc: process9, text: "Initiation of the Project" },
];

const data1 = [
  {
    title: "Experienced Developers",
    desc: "Our PHP team offers extensive expertise serving various industries, transforming your ideas into reality with exceptional performance. We’re committed to excellence, elevating your business to the next level. Trust us to provide the highest quality service.",
  },
  {
    title: "Flexible Hiring Models",
    desc: "Our company offers professional PHP developers on flexible pricing models for your project. Our team can easily scale up or down to meet your deadline, delivering quality work that fits your specific needs. Contact us today to start building your dedicated team.",
  },
  {
    title: "Agile Development Method",
    desc: "Our PHP developers use an agile process to manage development time and costs, understand your requirements, and deliver high-quality solutions aligned with your business needs.",
  },
  {
    title: "Flexible Time Zone",
    desc: "Our skilled PHP developers work across multiple time zones to accommodate clients’ unique needs. We offer flexible work schedules to deliver optimal results for your project. Contact us for assistance.",
  },
  {
    title: "Hassle-Free Hiring",
    desc: "Our skilled PHP developers can take on your project without extra training. We excel in project management and guarantee satisfaction with ongoing support. Expect outstanding results.",
  },
  {
    title: "Flexible Time Zone",
    desc: "We offer customized PHP development services including web app development, custom CMS, e-commerce, and more. Our process includes planning, development, testing, and deployment to achieve your business goals. Trust us with complex projects.",
  },
];

const data = [
  {
    title: "Custom PHP Development",
    desc: "Our experienced PHP team delivers exceptional development solutions for businesses of all sizes. Explore our PHP services.",
    img: EnterpriseImg,
  },
  {
    title: " eCommerce Development",
    desc: "Our skilled developers can create secure and high-performing eCommerce stores with desirable features and visually appealing design. We optimize for faster loading times to create a seamless shopping experience and help achieve your business goals.",
    img: eCommerceImg,
  },
  {
    title: " Open Source CMS Solutions",
    desc: "Our Open Source CMS Solutions provide a comprehensive array of customizable options, powered by top-tier technologies such as WordPress, Drupal, and Laravel, allowing for exceptional performance.",
    img: Frontend,
  },
  {
    title: "Easy API Integration",
    desc: "Our company provides a wide range of API integration services, catering to both simple and complex API development needs. Our approach to API integration helps in cutting down development times and reduces overall project costs.",
    img: Migration,
  },
  {
    title: "PHP Framework Development",
    desc: "Our company specializes in the development of web applications utilizing advanced PHP frameworks such as Laravel and CodeIgniter. Our primary objective is to construct PHP web applications that are adaptable and can be scaled to meet the requirements of our clients.",
    img: Integration,
  },
  {
    title: "PHP Upgradation & Migration",
    desc: "Our PHP developers provide customized solutions tailored to your needs – from migration to the latest frameworks and best practices. We collaborate with you, provide regular updates, and deliver reliable, scalable, and robust solutions that boost user engagement. Let’s take your digital journey to the next level together!",
    img: Plugin,
  },
  {
    title: "Maintenance and Support",
    desc: "Our PHP developers offer expert help in keeping your apps running smoothly and safely. Our team has extensive knowledge and experience and can provide top-quality services to meet your needs, from fixing bugs to upgrading PHP versions. Contact us to learn how we can help you maintain your PHP apps with ease and confidence.",
    img: Support,
  },
  {
    title: "Corporate Website Development",
    desc: "Hire PHP developers to create professional web applications like CRM, ERP, and portals. Experts will work efficiently using the latest tools to meet industry standards. Trust qualified developers to deliver high-quality results that meet your business needs and exceed expectations.",
    img: Consulting,
  },
];

const Array = [{}];

export default function HirePHPDeveloper() {
  return (
    <div className="mx-auto">
      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full hirepageclass">
          <div className="max-w-4xl gap-10 flex ">
            <div className="flex flex-col  items-start md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Hire PHP Developer</h1>
              <p className="text-lg mb-6 text-left max-w-2xl">
                Our PHP developers offer top-quality web development at
                competitive prices. Contact us today to achieve your goals.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary shadow hover:bg-primary/90 px-4 py-2 bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[204px] h-[38px] md:h-[54px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-15px] lg:mt-[30px] md:mt-[15px]"
                >
                  Hire Now
                </Link>
                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary shadow hover:bg-primary/90 px-4 py-2 bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[204px] h-[38px] md:h-[54px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-15px] lg:mt-[30px] md:mt-[15px]"
                >
                  Let's Talk
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/img/Framesg.png"
                alt="PHP Developer"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[120px] flex justify-center">
        <h2 className="text-3xl font-bold">Our Hiring Models</h2>
      </div>
      <p className="flex justify-center">
        Please select from a range of different PHP developer models to best
        suit your project’s requirements and achieve your desired outcome.
      </p>
      <div className="flex justify-center mt-8">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-10">
          <div className="bg-gray-800 p-10 shadow-md w-full flex flex-col md:w-1/3 items-center">
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/img/Figurefixed.png.png"
                alt="Fixed"
                width={50}
                height={50}
                className="rounded-md"
              />
            </div>
            <h1 className="text-[#00B9FA] text-4xl font-bold mb-4">Fixed</h1>
            <p className="flex justify-center text-white">
              Clear project requirements lead to efficient execution.
            </p>
          </div>
          <div className="bg-gray-800 p-10 shadow-md w-full flex flex-col md:w-1/3 items-center">
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/img/Figurehourly-1.png.png"
                alt="Hourly"
                width={60}
                height={60}
                className="rounded-md"
              />
            </div>
            <h1 className="text-[#00B9FA] text-4xl font-bold mb-4">Hourly</h1>
            <p className=" flex justify-center text-white">
              I can help with research tasks promptly and professionally.{" "}
            </p>
          </div>
          <div className="bg-gray-800 p-10 shadow-md w-full flex flex-col md:w-1/3 items-center">
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/img/Figuremonthly.png.png"
                alt="Dedicated"
                width={60}
                height={60}
                className="rounded-md"
              />
            </div>
            <h1 className="text-[#00B9FA] text-4xl font-bold mb-4">
              Dedicated
            </h1>
            <p className="flex justify-center text-white">
              Developer assigned to personalize and meet your requirements.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[120px] flex justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Schedule An Interview & Hire PHP Developers Now
        </h1>
      </div>
      <p className="flex justify-center">
        We offer customized talent solutions with our team of dedicated PHP
        developers available on-demand.
      </p>

      <div className="mt-[120px] flex justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Hire PHP Developers for 360° Web Development Solutions
        </h1>
      </div>
      <p className="flex justify-center">
        Our experienced PHP team delivers exceptional development solutions for
        businesses of all sizes. Explore our PHP services.
      </p>

      <div className="flex justify-center mt-12">
        <div className="flex flex-wrap items-stretch justify-center w-full max-w-5xl gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="border border-white-500 border-primary p-6 w-full md:w-2/5 flex flex-col items-center "
            >
              <div className="w-full flex flex-col items-center h-full">
                <div className="w-1/2 flex justify-center">
                  <Image src={item.img} alt="img" className="object-cover" />
                </div>
                <h1 className="text-white text-3xl font-bold mb-6 mt-4 text-center">
                  {item.title}
                </h1>
                <p className="p-3 text-gray-500 text-center">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-white text-3xl p-20 font-bold mb-6 mt-4 text-center">
        Why Hire PHP Developers from ProgrammX?
      </h1>
      <p className="flex justify-center m-8">
        ProgrammX is a PHP development company that creates customized web
        solutions at competitive prices. Partnering
        <br /> with us maximizes your workflow and optimizes development costs.
        Our developers receive ongoing training for top-
        <br />
        quality projects.
      </p>

      <div className="flex justify-center mt-12">
        <div className="flex flex-wrap items-stretch justify-center w-full max-w-5xl gap-8">
          {data1.map((item, index) => (
            <div
              key={index}
              className="border border-white-500 border-primary p-6 w-full md:w-2/5 flex flex-col items-center "
            >
              <div className="w-full flex flex-col items-center h-full">
                <h1 className="text-white text-3xl font-bold mb-6 mt-4 text-center">
                  {item.title}
                </h1>
                <p className="p-3 text-gray-500 text-center">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-white text-4xl font-bold pt-8 text-center">
        Choose Best Way to Hire React JS Developers
      </h1>
      <div className="table-container mb-4 mt-4">
        <div className="min-w-[600px]">
          <table className="min-w-full border-collapse ">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4"> </th>
                <th className="py-2 px-4">Dedicated Team Model</th>
                <th className="py-2 px-4">Fixed Price Model</th>
                <th className="py-2 px-4">Hourly Price Model</th>
                <th className="py-2 px-4">On-site Team Model</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Suited For:
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Startups, Mid-Size, Enterprises
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Startups, Mid-Size
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Mid-Size, Entrepreneurs
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Enterprises, Organizations
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Size of Project:
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Large
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Small & Medium
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Medium & Large
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Large
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Requirement Type:
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Evolving
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Fixed
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Flexible
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Evolving
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Client’s Involvement:
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Low
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  High
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Medium
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Low
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Time Frame:
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Estimated
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Fixed
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Fixed
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Estimated
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Price:
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Cost-Effective
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Standard
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Standard
                </td>
                <td className="py-2 px-4 border-primary border-blue-500 border">
                  Cost-Effective
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="text-white text-4xl font-bold  mt-2  text-center">
        Process Flow for Hiring PHP Developers
      </h1>
      <p className="flex justify-center ">We got your inquiry, what’s next?</p>

      <div className="grid grid-cols-3 gap-4 p-4 min-w-[600px] mx-auto">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="border border-white rounded-[8px] p-4 text-white flex flex-col items-center justify-center"
          >
            <Image
              src={box.imgSrc}
              alt={box.text}
              width={50}
              height={50}
              className="rounded-md"
            />
            <p className="mt-2">{box.text}</p>
          </div>
        ))}
      </div>
      <h1 className="text-white text-4xl font-bold  mt-2  text-center">
        Technology Expertise Of Our PHP Developers
      </h1>
      <p className="flex justify-center ">
        We offer unparalleled PHP development services with skilled developers
        who can provide high-quality solutions for your enterprise promptly.
      </p>

      <div className="grid grid-cols-1 table-container gap-4 py-4 min-w-[600px] mx-auto ">
        {Row.map((box, index) => (
          <div
            key={index}
            className="flex justify-between border rounded-md border-white"
          >
            <>
            <p key={index} className="mr-2 row_header">
                  {box.text[0]}
                </p>
            </>
            {/* Map over the 'text' array and render items horizontally */}
            {box.text?.slice(1).map((item, itemIndex) => (
              <>
                <p key={itemIndex} className="mr-2">
                  {item} |
                </p>
              </>

            ))}
          
          </div>
        ))}
      </div>

      <h1 className="text-white text-4xl font-bold  mt-6  text-left">
        Our Work
      </h1>
      <PortfolioMain />
      <Footer />
    </div>
  );
}
