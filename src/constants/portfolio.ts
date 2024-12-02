import AllBoxBlue from "@public/Carousal/alliconBlue.svg";
import AllBoxWhite from "@public/Carousal/allicon.svg";
/* import BlockChainBoxBG from "@public/portfolio-assets/herosection-blockchain-box.png";
 */
import BlockChainBoxBG from "@public/Carousal/blockchainicon.svg";
import BlockChainBoxBlue from "@public/Carousal/blockchainiconBlue.svg";

/* import AIBoxBG from "@public/portfolio-assets/herosection-ai-box.png";
 */
import AIBoxBG from "@public/Carousal/aiicon.svg";
import AIBoxBlue from "@public/Carousal/aiiconBlue.svg";


import WebDevBoxBG from "@public/Carousal/webdevelopment.svg";
import WebDevBoxBlue from "@public/Carousal/webdevelopmentBlue.svg";

/* import EcomBoxBG from "@public/portfolio-assets/herosection-ecom-box.png"; */

import EcomBoxBg from "@public/Carousal/Ecommerce.svg";
import EcomBoxBlue from "@public/Carousal/EcommerceBlue.svg"

import FeaturedImage from "@public/portfolio-assets/featured-project-showcase.png";
import TailwindIcon from "@public/portfolio-assets/tailwind-showcase.png";
import SocialMediaIcon from "@public/portfolio-assets/socialmedia-showcase.png";
import JSIcon from "@public/portfolio-assets/JS-showcase.png";
import ReactIcon from "@public/portfolio-assets/react-showcase.png";
import SpinIcon from "@public/portfolio-assets/spin-showcase.png";
import CurvedLines from "@public/portfolio-assets/curvedline-showcase.png";
import EcomImage from "@public/portfolio-assets/ecom-platform-showcase.png";
import BlockchainImage from "@public/portfolio-assets/blockchain-consortia-showcase.png";
import BlockBoxesImage from "@public/portfolio-assets/blockchain-boxes-showcase.png";
import EcomServicesImage from "@public/portfolio-assets/ecom-services-showcase.png";

export const portfolioNav = [
  { src: { default: AllBoxWhite, active: AllBoxBlue }, alt: "Hero All Box Background", label: "All" },
  {
    src: { default: BlockChainBoxBG, active: BlockChainBoxBlue },
    alt: "Hero Blockchain Box Background",
    label: "Blockchain",
  },
  { src: { default: AIBoxBG, active: AIBoxBlue }, alt: "Hero AI Box Background", label: "AI" },
  {
    src: { default: WebDevBoxBG, active: WebDevBoxBlue },
    alt: "Hero Web Dev Box Background",
    label: "Web Development",
  },
  { src: { default: EcomBoxBg, active: EcomBoxBlue }, alt: "Hero Ecom Box Background", label: "Ecommerce" },
];

export const projects = [
  {
    id: 1,
    category: "Featured Project",
    title: "Foundation Internet Organization",
    description:
      "At Foundation, we are revolutionizing how people engage with information...",
    icons: [TailwindIcon, SocialMediaIcon, JSIcon, ReactIcon, SpinIcon],
    image: FeaturedImage,
    link: "",
  },
  {
    id: 2,
    category: "Ecommerce",
    title: "Ecommerce Platform",
    description:
      "Elevate your business to new heights with our cutting-edge real-time e-commerce platform...",
    icons: [TailwindIcon, SocialMediaIcon, JSIcon, ReactIcon, SpinIcon],
    image: EcomImage,
    link: "",
    leftImg: EcomServicesImage,
  },
  {
    id: 3,
    category: "Blockchain",
    title: "Consortia",
    description:
      "At Foundation, we are revolutionizing how people engage with information...",
    icons: [TailwindIcon, SocialMediaIcon, JSIcon, ReactIcon, SpinIcon],
    image: BlockchainImage,
    link: "",
    leftImg: BlockBoxesImage,
  },
  {
    id: 4,
    category: "Ecommerce",
    title: "Ecommerce Platform",
    description:
      "Elevate your business to new heights with our cutting-edge real-time e-commerce platform...",
    icons: [TailwindIcon, SocialMediaIcon, JSIcon, ReactIcon, SpinIcon],
    image: EcomImage,
    link: "",
    leftImg: EcomServicesImage,
  },
  {
    id: 5,
    category: "Blockchain",
    title: "Consortia",
    description:
      "At Foundation, we are revolutionizing how people engage with information...",
    icons: [TailwindIcon, SocialMediaIcon, JSIcon, ReactIcon, SpinIcon],
    image: BlockchainImage,
    link: "",
    leftImg: BlockBoxesImage,
  },
];
