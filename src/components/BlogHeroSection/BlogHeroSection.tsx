"use client";

import React, { useState, useEffect } from "react";
import GradientText from "../gradient-text";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import BlogSlider from "./BlogSlider";
import BlogCard from "./BlogCard";
import Footer from "../footer";
import SuccessSolution from "../success-solution";
import ForthSection from "./BlogForthSection";
import CarouselMobile from "./CarousalMobile";
import PortfolioNavDesktop from "./PortfolioNav";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE_DESKTOP = 2;
const ITEMS_PER_PAGE_MOBILE = 2;

const blogData = [
  {
    "id": 1,
    "image": "/art/AI.jpg",
    "imageT": "/art/AI-t.png",
    "date": "AI on Mar 19, 2021",
    "title": "DevOps Best Practices for Blockchain Development Pipelines",
    "description": `DevOps and blockchain—two of the most transformative trends in the tech industry—have great synergy when combined. Ensuring an efficient development pipeline for blockchain applications requires the seamless integration of DevOps best practices. Here’s a dive into the essential practices to get your blockchain development pipeline running like a well-oiled machine.
`,
    "type": "DevOps",
    "mainDescription": (
      <article id="dc3bbc9b-bb54-45ee-84dd-7874694ae627" className="page sans">
        <header>
          <h1 className="page-title">DevOps Best Practices for Blockchain Development Pipelines</h1>
          <p className="page-description" />
        </header>
        <div className="page-body">
          <h3 id="9d72f895-ebef-4c2f-92f8-036154c46bbe" className=" font-bold">
            Continuous Integration (CI)
          </h3>
          <p id="91ecd344-fca5-43a2-92a3-bdac0269f5f1" className="pb-3">
            In the world of blockchain, changes are frequent and need to be handled efficiently. Continuous Integration ensures that every change is automatically tested and integrated with the existing codebase. By using CI tools such as Jenkins or CircleCI, developers can automate the testing of smart contracts, ensuring that any changes do not introduce new bugs or vulnerabilities. This process minimizes integration issues and enhances code quality.
          </p>

          <hr id="01aa6db4-f631-406d-91b2-f7c67517883d" className="py-1" />
          <h3 id="955a26a2-8464-4072-b06b-9e3d90ea1e69" className="font-bold">
            Continuous Deployment (CD)
          </h3>
          <p id="36c41b3a-c7e9-451f-92ad-3e0455f3f773" className="pb-3">
            Given the decentralized nature of blockchain, deploying updates can be tricky. Continuous Deployment automates this process, ensuring that new features or bug fixes are seamlessly integrated into the live environment without manual intervention. Tools like Kubernetes or AWS CodeDeploy can be leveraged to manage deployments, enabling consistent updates across all nodes in the network.
          </p>
          <hr id="01aa6db4-f631-406d-91b2-f7c67517883d" className="py-1" />
          <h3 id="955a26a2-8464-4072-b06b-9e3d90ea1e69" className="font-bold">
            Infrastructure as Code (IaC)

          </h3>
          <p id="36c41b3a-c7e9-451f-92ad-3e0455f3f773" className="pb-3">
            Blockchain networks can be complex, requiring multiple nodes and services. Infrastructure as Code helps in managing this complexity by enabling the definition and management of infrastructure using code. Tools like Terraform or AWS CloudFormation allow for automated provisioning and management of blockchain nodes and related services, ensuring consistency and scalability.
          </p>
          <hr id="01aa6db4-f631-406d-91b2-f7c67517883d" className="py-1" />
          <h3 id="955a26a2-8464-4072-b06b-9e3d90ea1e69" className="font-bold">
            Monitoring and Logging
          </h3>
          <p id="36c41b3a-c7e9-451f-92ad-3e0455f3f773" className="pb-3">
            Effective monitoring and logging are crucial for maintaining the health and performance of a blockchain network. Implementing tools such as Prometheus for monitoring and ELK Stack (Elasticsearch, Logstash, Kibana) for logging can provide real-time insights into the network’s performance. This helps in quickly identifying and resolving issues, ensuring optimal performance.</p>
          <hr id="01aa6db4-f631-406d-91b2-f7c67517883d" />
          <h3 id="955a26a2-8464-4072-b06b-9e3d90ea1e69" className="font-bold">
            Security Best Practices
          </h3>
          <p id="36c41b3a-c7e9-451f-92ad-3e0455f3f773" className="">
            Security in blockchain is paramount. Integrating security into the DevOps pipeline ensures that vulnerabilities are identified and addressed early. Conducting regular code audits, vulnerability scanning using tools like OWASP ZAP, and employing smart contract-specific security tools such as Mythril can help in fortifying the security of blockchain applications. </p>
          <hr id="01aa6db4-f631-406d-91b2-f7c67517883d" className="py-1" />
          <h3 id="955a26a2-8464-4072-b06b-9e3d90ea1e69" className="font-bold">
            Automated Testing
          </h3>
          <p id="36c41b3a-c7e9-451f-92ad-3e0455f3f773" className="pb-3">
            Automated testing is vital in ensuring the reliability of blockchain applications. Smart contracts, being immutable once deployed, need rigorous testing. Utilizing testing frameworks like Truffle or Hardhat can automate the testing process, ensuring that smart contracts perform as expected in various scenarios. </p>
          <hr id="01aa6db4-f631-406d-91b2-f7c67517883d" className="py-1" />
          <h3 id="955a26a2-8464-4072-b06b-9e3d90ea1e69" className="font-bold">
            Collaboration and Communication

          </h3>
          <p id="36c41b3a-c7e9-451f-92ad-3e0455f3f773" className="">
            Lastly, fostering a culture of collaboration and communication within the team is essential. Using tools like Slack or Microsoft Teams for communication and GitHub for code collaboration can streamline the workflow, ensuring everyone is on the same page.
          </p>

          <p id="36c41b3a-c7e9-451f-92ad-3e0455f3f773" className="">
            By integrating these DevOps best practices into your blockchain development pipeline, you can achieve a more efficient, reliable, and secure development process, paving the way for innovation and growth in the blockchain space.
          </p>

        </div>
      </article>
    )
  },
  {
    "id": 2,
    "image": "/art/AI2.jpg",
    "imageT": "/art/AI2-t.png",
    "date": "AI on Oct 20, 2021",
    "title": "Exploring Machine Learning Algorithms for Blockchain Data Insights",
    "description": "In the ever-evolving world of technology, the fusion of blockchain and machine learning is creating waves of innovation. At ProgrammX, we're excited to delve into how machine learning algorithms can unlock valuable insights from blockchain data, driving transformative solutions for businesses.",
    "type": "Machine Learning",
    "mainDescription": (
      <article id="dc3bbc9b-bb54-45ee-84dd-7874694ae627" className="page sans">
        <header>
          <h1 className="page-title">
            <strong>Exploring Machine Learning Algorithms for Blockchain Data Insights</strong>
          </h1>
          <p className="page-description" />
        </header>
        <div className="page-body">
          {/* <p id="8667d52e-1a18-44cb-b225-b8bde01993a0" className="">
            <strong>Artificial Intelligence: Transforming the Future</strong>
          </p>
          <p id="85f7489a-05fe-4913-8477-1bb1d0e36db4" className="">
            Artificial Intelligence (AI) is more than a buzzword; it's a game-changing technology that has become a core part of our everyday lives and numerous industries. From voice-activated assistants like Siri and Alexa to cutting-edge advancements in healthcare, AI is reshaping our world. This article delves into the fundamentals of AI, its diverse applications, potential benefits, challenges, and how it is poised to revolutionize our future.
          </p> */}
          <h3 id="90f9f7ca-6de7-446a-b881-c053c42ebf00" className="">
            <strong>The Power of Blockchain and Machine Learning</strong>
          </h3>
          <p id="f1b26d53-2fa0-4aa6-931a-a6a0f1b90fa8" className="">
            Blockchain technology is known for its decentralized, transparent, and immutable nature. However, the sheer volume of data generated by blockchain networks can be overwhelming. This is where machine learning comes into play, offering powerful tools to analyze and derive meaningful insights from blockchain data.
          </p>

          <h3 id="1d30e29b-29d2-49fa-a6d0-69eee8fd1f5e" className="">
            <strong>Key Machine Learning Algorithms for Blockchain Data</strong>
          </h3>


          <h3 id="b13d201e-f82d-4870-8c10-bc7b42de9a10" className="">
            <strong>1. Supervised Learning Algorithms
            </strong>
          </h3>
          <p id="cc6cae9f-6dff-4fbd-927a-26f43607b062" className="">
            Supervised learning algorithms, such as Linear Regression and Support Vector Machines (SVM), can predict outcomes based on historical blockchain data. These algorithms can identify patterns and trends in transaction data, helping to forecast future blockchain activities and detect anomalies.
          </p>
          <h3 id="9cd6c63a-c347-4c73-af79-5fb27dc4ebe4" className="">
            <strong>2. Unsupervised Learning Algorithms</strong>
          </h3>
          <p id="71888b73-7393-4b00-9114-442391b24ee7" className="">
            Unsupervised learning algorithms, like K-Means Clustering and Principal Component Analysis (PCA), find hidden structures in blockchain data without predefined labels. They can segment blockchain users into distinct groups based on their transaction behaviors, providing valuable insights for targeted marketing and fraud detection.
          </p>
          <h3 id="7c041c8d-8b67-46bf-9f8d-25056f44e4b8" className="">
            <strong>3. Reinforcement Learning Algorithms
            </strong>
          </h3>
          <p id="5da15549-f873-406a-9bca-409011a0cb7a" className="">
            Reinforcement learning algorithms, such as Q-Learning and Deep Q-Networks (DQN), learn optimal actions through trial and error to maximize rewards. These algorithms can optimize blockchain consensus mechanisms, enhancing the efficiency and security of blockchain networks.
          </p>

          <h3 id="7b5edc15-29b4-4651-81d0-8999dcf93531" className="">
            <strong>Benefits of Integrating Machine Learning with Blockchain</strong>
          </h3>
          <h3 id="97ed690a-108c-4d7c-8260-5d61a8c13cce" className="">
            <strong>4.Enhanced Security </strong>
          </h3>
          <p id="239514d8-e951-431c-8f4b-72829b439f1f" className="">
            Machine learning algorithms can detect unusual patterns and potential threats in blockchain transactions, significantly enhancing security measures. By continuously learning from transaction data, these algorithms can adapt and respond to new threats in real time.
          </p>
          <h3 id="6bfe858e-d910-4035-8a1a-1033cf41bb13" className="">
            <strong>5.Fraud Detection </strong>
          </h3>
          <p id="3857f5ce-2db6-492d-b1ff-c10ea5864768" className="">
            With the ability to analyze vast amounts of data, machine learning can identify fraudulent activities that might go unnoticed with traditional methods. Unsupervised learning algorithms are particularly effective in detecting outliers and suspicious behaviors.
          </p>
          <h3 id="206552ad-4434-496d-8e60-d2a3c805332d" className="">
            <strong>6.Predictive Analytics</strong>
          </h3>
          <p id="365e04f7-d28f-4216-813d-f98c74c3b929" className="">
            Machine learning enables predictive analytics, allowing businesses to forecast trends and make data-driven decisions. This is particularly valuable in the blockchain space, where predicting transaction volumes and market trends can offer a competitive advantage.
          </p>
          <h3 id="206552ad-4434-496d-8e60-d2a3c805332d" className="">
            <strong>6:Efficiency Optimization</strong>
          </h3>
          <p id="365e04f7-d28f-4216-813d-f98c74c3b929" className="">
            Reinforcement learning can optimize blockchain processes, such as transaction verification and consensus mechanisms, leading to faster and more efficient networks. This results in reduced energy consumption and lower operational costs.
          </p>
          <h3 id="7b5edc15-29b4-4651-81d0-8999dcf93531" className="">
            <strong>Real-World Applications </strong>
          </h3>
          <p id="cfb2a63a-9627-44da-90f7-daa4ed7e01a5" className="">
            Supply Chain Management: Machine learning can analyze blockchain data to track the movement of goods, detect inefficiencies, and ensure the authenticity of products, leading to more transparent and efficient supply chains.
          </p>

          <h3 id="896e9e54-0b21-4f5c-8744-79b9275bdb5c" className="">
            <strong>Healthcare</strong>
          </h3>
          <p id="41880125-4c96-47fc-8667-2c6aa54055fc" className="">
            By leveraging machine learning, healthcare providers can analyze patient data stored on blockchains to improve diagnosis accuracy, personalize treatments, and enhance patient outcomes.
          </p>
          <h3 id="896e9e54-0b21-4f5c-8744-79b9275bdb5c" className="">
            <strong>Financial Services: </strong>
          </h3>
          <p id="41880125-4c96-47fc-8667-2c6aa54055fc" className="">
            In the financial sector, machine learning can help detect fraudulent transactions, predict market trends, and automate compliance processes, driving greater efficiency and security.</p>
          <p id="7e6a9c2d-8f38-4c1e-81c2-ec849d091885" className="">
            At ProgrammX, we're committed to harnessing the power of machine learning and blockchain to deliver innovative solutions that drive business success. Stay tuned to our blog for more expert insights and strategies in the ever-evolving world of technology. </p>
        </div>
      </article>
    )
  },
  {
    id: 3,
    image: "/art/B1.jpg",
    imageT: "/art/B1-T.png",
    date: "Blockchain Sep 25, 2022",
    title: "Current Trends in Blockchain Technology",
    description: `In recent years, blockchain technology has experienced significant growth and continues to transform various industries worldwide.`,
    type: "Web Development",
    mainDescription: (
      <article id="dc3bbc9b-bb54-45ee-84dd-7874694ae627" className="page sans">
        <header>
          <h1 className="page-title">
            <strong>Blockchain </strong>
          </h1>
          <p className="page-description" />
        </header>
        <div className="page-body">
          <h1 id="2748a960-20e7-4bfb-809c-d3c058a29d2b" className="">
            <strong>Current Developments in the Blockchain Sector</strong>
          </h1>
          <figure id="452b4adf-b375-4656-a063-0074e2ffc569" className="image">
            <a href="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdG3zZ_AAG-YvLANGYn6DrF9Lf4sH_cQBKOiOxwotg3mFZjr7pns9cozH8s0BrOmM5pO8ZZ1qmll4KMiWYEQhXA5cmcI3MMFPzT9RBftU_nXNk90dfX0rcrAINvuunlOmGYSMrQeQ7idq67ArptzuKlJBpL?key=_QR0H7xyDCbbr6lfMj6tqw">
              <img
                style={{ width: 624 }}
                src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdG3zZ_AAG-YvLANGYn6DrF9Lf4sH_cQBKOiOxwotg3mFZjr7pns9cozH8s0BrOmM5pO8ZZ1qmll4KMiWYEQhXA5cmcI3MMFPzT9RBftU_nXNk90dfX0rcrAINvuunlOmGYSMrQeQ7idq67ArptzuKlJBpL?key=_QR0H7xyDCbbr6lfMj6tqw"
              />
            </a>
          </figure>
          <p id="cc4827b9-7ae7-42af-bef2-fc5887a72a94" className="">
            <a href="https://bigdataanalyticsnews.com/decoding-blockchain-buzz/">
              Image source
            </a>
          </p>
          <p id="8e6eabcd-7299-4629-be72-4d0250ad9989" className="">
            The growth of blockchain technology has been remarkable in recent years, continuing to impact various sectors globally. The rising interest in <strong>blockchain</strong> has spurred innovations that are revolutionizing business processes. This blog will explore the <strong>most recent blockchain trends and their implications</strong> in the digital landscape.
          </p>
          <ul
            id="a3724965-def5-4293-908b-c5cc170d6fbb"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <strong>DeFi (Decentralized Finance)</strong>
            </li>
          </ul>
          <p id="0425e72b-ebfb-4fbd-a97a-43e006d15306" className="">
            One of the most exciting trends in blockchain is DeFi, or decentralized finance. DeFi platforms utilize blockchain technology to offer financial services without relying on traditional banks or intermediaries. This sector includes lending, borrowing, and trading services, empowering users to have greater control over their assets. The transparency and accessibility of DeFi have contributed to its growing popularity, with the total value locked (TVL) in DeFi protocols surpassing $50 billion as of early 2024. For example, Aave, a leading DeFi platform, reported over
            <a href="https://www.cryptometer.io/news/aave-hits-record-high-in-weekly-borrowers-as-defi-rebounds/">
              $10 billion in TVL
            </a>
            and experienced a 120% increase in user adoption compared to the previous year.
          </p>
          <ul
            id="becabc3d-0d87-462a-af3c-159dc8714952"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <strong>NFTs (Non-Fungible Tokens)</strong>
            </li>
          </ul>
          <p id="d4130e40-f735-4c45-98bd-c3cf248bbd60" className="">
            NFTs have emerged as a significant application of blockchain technology, representing unique digital assets like art, music, and collectibles. Unlike cryptocurrencies, NFTs are one-of-a-kind and verified through blockchain, ensuring their authenticity and ownership. The NFT market has experienced rapid growth, with sales exceeding $10 billion in 2023.
          </p>
          <p id="e9b0b400-0056-4d87-9b42-5e1cc49308c7" className="">
            Prominent brands such as Nike and Gucci have ventured into the NFT arena, utilizing blockchain for product authentication and customer engagement. For instance,
            <a href="https://medialist.info/en/2019/12/20/cryptokick-how-nike-wants-to-bring-the-blockchain-into-the-running-shoe/">
              Nike's "Cryptokicks" patent
            </a>
            allows for the digital authentication of sneakers, blending physical and digital asset management.
          </p>
          <p id="81a30d71-5348-47ee-abf9-7b29b1a176ea" className="">
            <em>
              <strong>Read more about</strong>
            </em>
            <em> </em>
            <em>
              <a href="https://dev.flexlab.io/blog">
                Blockchain and Sustainable Development
              </a>
            </em>
            <em>.</em>
          </p>
          <ul
            id="71132b1a-6c3b-4d4e-bea5-978af94c68b6"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <strong>Sustainable Blockchain</strong>
            </li>
          </ul>
          <p id="0481a4fd-65a1-417b-bb0f-a0ff092bac8f" className="">
            As blockchain technology gains traction, its environmental impact has become a pressing issue, particularly concerning energy-intensive networks like Bitcoin. This concern has led to the emergence of sustainable blockchain solutions focused on minimizing energy consumption. A notable trend is the transition from Proof of Work (PoW) to Proof of Stake (PoS), which is a more environmentally friendly consensus mechanism.
          </p>
          <p id="9d630401-8422-4ece-9d31-9e06b2418135" className="">
            Ethereum's shift to PoS with Ethereum 2.0 is a leading example, <a href="https://aibc.world/learn-crypto-hub/ethereum-2-0-explained/">aiming to reduce energy consumption by 99.95%</a>. Companies are increasingly investing in sustainable blockchain solutions to promote eco-friendly development.
          </p>
          <ul
            id="66b4e18e-4e87-4831-903f-37cc6be0e497"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <strong>Blockchain in Supply Chain Management</strong>
            </li>
          </ul>
          <p id="70b40f44-9424-4845-b4bb-2577084d0234" className="">
            Another significant trend in the <strong>blockchain sector</strong> is its application in <strong>supply chain management</strong>. By enabling businesses to monitor goods and services in real-time, <strong>blockchain technology</strong> enhances transparency and traceability throughout the supply chain. This trend is particularly relevant for industries such as food and pharmaceuticals, where consumers demand assurance regarding the authenticity and safety of products. Implementing <strong>blockchain</strong> can greatly reduce fraud, enhance accountability, and optimize operations.
          </p>
          <ul
            id="b662ce91-0874-4136-a05b-5669d4fd5e0f"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <strong>Blockchain in Healthcare</strong>
            </li>
          </ul>
          <p id="ba55c127-1d6f-4dbb-bcd8-e892e49ebb23" className="">
            The healthcare industry is also adopting <strong>blockchain technology</strong> to enhance data security and patient privacy. With the rising number of data breaches, <strong>blockchain</strong> offers a decentralized and secure method for managing medical records. This development can lead to improved patient outcomes and increased trust in the healthcare system.
          </p>
          <p id="31423992-1586-4baf-bb94-80e58c726882" className="">
            In conclusion, the advancements in <strong>blockchain technology</strong> continue to reshape industries worldwide. The most recent trends, such as DeFi, NFTs, sustainable solutions, supply chain improvements, and healthcare applications, highlight the technology's potential to revolutionize business practices and create new opportunities.
          </p>
        </div>
      </article>
    )
  },
  {
    id: 4,
    image: "/art/B2.jpg",
    imageT: "art/B2-t.png",
    date: "Blockchain Dec 22, 2022",
    title: "An In-Depth Exploration of Consensus Mechanisms",
    description:
      "Consensus mechanisms play a crucial role in blockchain networks by establishing how network participants agree on the legitimacy of transactions.",
    type: "Ecommerce",
    mainDescription:
      "Blockchain technology's decentralized and transparent nature is leveraged to address challenges in sustainability, social responsibility, and economic development.",
    mainDescription1:
      "In the energy sector, blockchain facilitates decentralized peer-to-peer energy trading, enabling individuals and communities to generate, consume, and exchange renewable energy directly. This innovation fosters the establishment of sustainable and resilient energy systems. Furthermore, blockchain's capacity to eliminate intermediaries can enhance financial inclusion, thereby empowering marginalized communities in developing regions.",
    mainDescription2:
      "Moreover, blockchain can bolster social impact initiatives by offering secure and transparent systems for identity verification and the distribution of aid. Such capabilities are particularly beneficial in humanitarian efforts and projects aimed at extending financial services to unbanked populations.",
    mainDescription3:
      "The convergence of blockchain technology with sustainable development represents an exciting new domain, where technological advancements align with global objectives related to environmental preservation, social well-being, and economic growth. As blockchain technology continues to evolve and gain traction, its potential positive influence on sustainable development initiatives is likely to expand, paving the way for a more equitable and environmentally sustainable future.",
    mainDescription4:
      "With applications ranging from improving supply chain transparency to supporting decentralized energy grids, blockchain technologies are emerging as vital tools for promoting environmental stewardship and fostering inclusive development."
  },
  {
    id: 5,
    image: "/art/B3.jpg",
    imageT: "/art/B3-t.png",
    date: "Blockchain Nov 22, 2023",
    title: "The Role of Blockchain in Promoting Sustainable Development",
    description:
      "The inherent decentralized and transparent characteristics of blockchain technology are being utilized to address various challenges related to sustainability, social responsibility, and economic advancement.",
    type: "Web Development",
    mainDescription:
      "The inherent decentralized and transparent characteristics of blockchain technology are being utilized to address various challenges related to sustainability, social responsibility, and economic advancement.",
    mainDescription1:
      "In the energy sector, blockchain technology facilitates decentralized peer-to-peer energy trading, enabling individuals and communities to generate, consume, and exchange renewable energy directly. This innovation promotes the development of sustainable and resilient energy systems. Moreover, the ability of blockchain to streamline transactions without the need for intermediaries can significantly enhance financial inclusion, empowering marginalized communities in developing areas.",
    mainDescription2:
      "Additionally, blockchain can strengthen social impact initiatives by providing secure and transparent systems for identity verification and the distribution of aid. This functionality is especially crucial in humanitarian efforts and projects aimed at offering financial services to populations lacking access to traditional banking.",
    mainDescription3:
      "The convergence of blockchain technology with sustainable development presents a promising new area where technological advancements align with global objectives for environmental preservation, social equity, and economic growth. As blockchain technology continues to develop and gain acceptance, its beneficial impact on sustainable development initiatives is expected to increase, creating new avenues for a more just and environmentally conscious future.",
    mainDescription4:
      "From improving transparency in supply chains to supporting decentralized energy grids, blockchain technologies are emerging as essential instruments for fostering environmental responsibility and promoting inclusive growth."
  },

];

export default function BlogHeroSection() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [viewMode, setViewMode] = useState("list"); // New state to manage view mode
  const [selectedBlogByUser, setSelectedBlogByUser] = useState(null);

  const handleSelectTab = (tab) => {
    debugger
    setSelectedTab(tab);
  };

  const handleViewDetails = (blog) => {
    
    setSelectedBlogByUser(blog); // Set the selected blog
    setViewMode("details"); // Switch to details view

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const selectedBlog =  selectedBlogByUser; // Use the selected blog from the state
  debugger
  const relatedBlogs = blogData.filter(
    (blog) => blog.type === selectedBlog?.type && blog.id !== selectedBlog?.id
  );

  

  const [pageNo, setPageNo] = useState(1);

  // Detect if it's a mobile view or not
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const itemsPerPage = isMobile
    ? ITEMS_PER_PAGE_MOBILE
    : ITEMS_PER_PAGE_DESKTOP;

  const totalPages = Math.ceil(relatedBlogs.length / itemsPerPage);

  const paginatedBlogs = relatedBlogs.slice(
    (pageNo - 1) * itemsPerPage,
    pageNo * itemsPerPage
  );

  return (
    <>
      {viewMode === "list" ? (
        <div className="relative">
          {/* <img
            src="/img/hero-img-gradiant-circles.png"
            alt="bg"
            className="hidden lg:block absolute inset-0 w-full object-cover z-10  left-0 h-[100vh]"
          /> */}

          <img
            style={{
              position: "absolute",
              right: "0%",
              top: "-60px"
            }}
            src="/img/ecliptic-right.webp"
            alt="bg"
            className="hidden lg:block top-0  h-[70vh] object-contain z-10"
          />

          <img
            style={{
              position: "absolute",
              left: "0",
              top: "200px"
            }}
            src="/img/Auditbg.webp"
            alt="bg"
            className="hidden lg:block top-0  h-[70vh] object-contain z-10"
          />
          {/* <img src='/img/hero-img-gradiant-circles.png' alt='bg'  className="hidden lg:block absolute z-10 top-[2000px] MHD:top-[2500px]" /> */}

          <img
            src="/blogresp/Maskherogroup.png"
            alt="bg"
            className=" lg:hidden absolute h-[800px] XSM:h-[950px] sm:h-[1050px] md:h-[950px] inset-0 w-full object-cover z-10 top-[-95px] left-0"
          />
          <img
            src="/blogresp/bluebg.png"
            alt="bg"
            className=" lg:hidden absolute h-[800px] md:h-[1050px] inset-0 w-full object-cover z-10 top-[500px] XSM:top-[800px] sm:top-[900px] md:mt-[-150px] left-0"
          />
          <img
            src="/blogresp/respbg2.png"
            alt="bg"
            className=" lg:hidden absolute inset-0 w-full object-cover z-20 top-[830px] XSM:top-[920px] sm:top-[1200px] md:top-[1000px] left-0"
          />
          <img
            src="/blogresp/respbg3.png"
            alt="bg"
            className=" lg:hidden opacity-70 absolute inset-0  w-full z-0 top-[1520px] XSM:top-[1550px] md:top-[1900px] left-0"
          />
          {/*         <img src='/blogresp/faqbgresp.png' alt='bg'  className=" md:hidden absolute inset-0  w-full object-cover z-0 sm:h-[1200px] top-[3000px] XSM:top-[3200px] sm:top-[3930px] md:top-[1200px] left-0" />
           */}

          <div className="relative z-10 flex justify-center align-center w-full top-[10px] lg:top-[40px]">
            <div className="w-[100%] md:w-[70%] flex flex-col lg:flex-row ">
              <div className="w-[87%] XSM:w-[70%] sm:w-[50%] md:w-[60%] lg:mt-[20px] MHD:mt-[80px] FHD:mt-[100px] lg:w-auto ml-[10%] XSM:ml-[25%] sm:ml-[30%] md:ml-[30%] lg:ml-[0%] flex  flex-row lg:flex-col flex-wrap lg:flex-nowrap items-center lg:items-start lg:justify-start flex-grow lg:flex-grow-0 lg:basis-[40%] ">
                <p className="mt-[-4%] XSM:mt-[-6%] md:mt-[-4%] lg:mt-[0]  lg:px-0 font-sabor text-[40px]">
                  Where
                </p>
                <p className="mt-[-4%] XSM:mt-[-6%] md:mt-[-4%] lg:mt-[-6%] HD:mt-[-6%] MHD:mt-[-5%] px-1 lg:px-0 lg:p-0 font-sora text-[60px] lg:text-[80px] MHD:text-[100px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)]">
                  Bytes
                </p>
                <p className="mt-[-7%] XSM:mt-[-6%] md:mt-[-6%] lg:mt-[-3%] HD:mt-[-3%] MHD:mt-[-3%] p-0  lg:px-2 font-sabor font-normal text-[40px] ">
                  Become
                </p>
                <p className="mt-[-6%] XSM:mt-[-4%] md:mt-[-5%] lg:mt-[-6%] HD:mt-[-6%] MHD:mt-[-5%] p-0 ml-[-3px] XSM:ml-[0px] lg:px-0 font-sora text-[60px] lg:text-[80px] MHD:text-[100px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#025043_38.43%,_#3a8bf1_60.37%)] z-[999]">
                  Brilliance
                </p>
                <p className="mt-[-5%] XSM:mt-[-5%] md:mt-[-5%] lg:mt-[-6%] HD:mt-[-7%] MHD:mt-[-6%] p-0 font-sabor px-1   lg:px-2 text-[40px]">
                  In Every Blog
                </p>
                <Button
                  className={cn(
                    "hidden lg:block bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[246px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway mt-[0px] HD:mt-[10px] MHD:mt-[10px]"
                  )}
                  onClick={() =>
                    window.open("https://calendly.com/yasir-programmx/30min", "_blank")
                  }
                >
                  Book a Discovery Call
                </Button>
                <div className="hidden  lg:flex justify-end items-end lg:ml-[48%] HD:ml-[43%] MHD:ml-[30%] FHD:ml-[44%] mr-[-30%] lg:mt-[10px] HD:mt-[30px] MHD:mt-[70px] FHD:mt-[70px]">
                  <img
                    src="/img/email.png"
                    alt="blogEmail"
                    className="MHD:w-[300px] "
                  />
                </div>
              </div>
              <img
                src="/img/blogpersonhero.svg"
                alt="blogHero"
                className=" hidden lg:block w-[50%] ml-[-90px] MHD:ml-[-120px] lg:mt-[80px] HD:mt-[60px] MHD:mt-[120px] FHD:mt-[120px] z-20 "
              />
              <img
                src="/img/BlogHeroMobile.png"
                alt="blogHeromobile"
                className="lg:hidden"
              />

              <div className="hidden lg:block z-99  lg:mt-[330px] HD:mt-[350px] MHD:mt-[500px] FHD:mt-[600px] lg:ml-[-30px] HD:ml-[-35px] MHD:ml-[-45px] FHD:ml-[-60px]">
                <img
                  src="/img/phone.png"
                  alt="blogEmail"
                  className="MHD:w-[300px] h-auto "
                />
              </div>
            </div>
          </div>

          <div className="mt-[12%] XSM:mt-[8%] md:mt-[6%] min-[1023px]:hidden">
            <CarouselMobile
              selectedTab={selectedTab}
              onSelectTab={handleSelectTab}
            />
          </div>

          <div className="mt-[4%]">
            <PortfolioNavDesktop
              selectedTab={selectedTab}
              onSelectTab={handleSelectTab}
            />
          </div>

          {/*  <div className="flex justify-center relative z-50 items-center mt-[15%]">
            <BlogSlider />
      </div> */}

          <div className="flex justify-center relative z-50 items-center mt-[-40px] XSM:mt-[-50px] md:mt-[-40px] lg:mt-[140px] HD:mt-[180px] MHD:mt-[250px] FHD:mt-[300px]">
            <BlogCard
              selectedCategory={selectedTab}
              blogData={blogData}
              onViewDetails={handleViewDetails}
            />
          </div>

          {/* <div>
            <ForthSection marginBottom="mb-[-30px] sm:mb-[-100px] md:mb-[-100px] lg:mb-[300px] lgMax:mb-[450px] HD:mb-[360px] HDMAX:mb-[530px] MHD:mb-[600px] FHD:mb-[700px]" />
          </div> */}
        </div>
      ) : (
        <div className="relative">
          <img
            src="/blogresp/bloginnerpagebg.png"
            alt="bg"
            className="hidden lg:block absolute w-full  top-[-107px] left-0 "
          />
          <img
            src="/blogresp/leftinnerimg.png"
            alt="bg"
            className="hidden lg:block absolute top-[650px] left-0 z-[0]"
          />
          <img
            src="/blogresp/blueinner.png"
            alt="bg"
            className="hidden lg:block absolute top-[500px] left-0 z-[0]"
          />
          <img
            src="/blogresp/rightinnerimage.png"
            alt="bg"
            className="hidden lg:block absolute top-[900px] lg:top-[1100px] right-0 z-[0]"
          />
          <img
            src="/blogresp/blueinnerRight.png"
            alt="bg"
            className="hidden lg:block absolute top-[1100px] right-0 z-[0]"
          />
          <img
            src="/blogresp/globinnerimg.png"
            alt="bg"
            className="hidden lg:block absolute top-[1400px] left-0 z-[0]"
          />

          <img
            src="/blogresp/Maskinnergroup.png"
            alt="bg"
            className=" lg:hidden absolute h-[800px] XSM:h-[950px] sm:h-[900px] md:h-[950px] inset-0 w-full object-cover z-10 top-[-95px] left-0"
          />
          <img
            src="/blogresp/respinnerbg2.png"
            alt="bg"
            className=" lg:hidden absolute inset-0 w-full object-cover z-20 top-[830px] XSM:top-[850px] sm:top-[800px] md:top-[700px] left-0"
          />
          <img
            src="/blogresp/respbg3.png"
            alt="bg"
            className=" lg:hidden opacity-70 absolute inset-0  w-full z-10 md:h-[1100px] top-[1700px] XSM:top-[1400px] md:top-[1300px] left-0"
          />
          {/*         <img src='/blogresp/faqbgresp.png' alt='bg'  className=" md:hidden absolute inset-0  w-full object-cover z-0 sm:h-[1200px] top-[3550px] XSM:top-[3300px] sm:top-[3450px] md:top-[1200px] left-0" />
           */}

          <div className="relative flex justify-center items-center z-[20]">
            <div className="w-[90%] lg:w-[70%]">
              <div className="flex flex-col justify-center items-center mt-[15px]">
                <p className=" font-sora text-[50px] XSM:text-[60px] leading-[50px] XSM:leading-[55px] lg:leading-[72px] text-center font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)] z-[999]">
                  {selectedBlog.type}
                </p>
                <p className="font-sabor text-[40px] text-center leading-[42px] z-[999] mt-[15px] lg:mt-[0]">
                  {selectedBlog.title}
                </p>
                <img src={selectedBlog.imageT} alt="hero" className="z-[999]" />
              </div>
              <div className="z-[99999]">
                <p className="font-inter text-[13px] text-[#8A8A8A] mt-[10px] z-[999]">
                  {selectedBlog.date}
                </p>
              </div>
              <div className="z-[99999]">
                <p className="font-inter text-[18px] lg:text-[25px] mb-6  lg:mb-4 leading-[31px] mt-[37px] lg:mt-[10px] z-[999]">
                  {selectedBlog.mainDescription}
                </p>
                <p className="font-inter text-[18px] lg:text-[25px] z-[999] mb-6  lg:mb-4 leading-[31px] mt-[10px]">
                  {selectedBlog.mainDescription1}
                </p>
                <p className="font-inter text-[18px] lg:text-[25px] z-[999] mb-6  lg:mb-4 leading-[31px] mt-[10px]">
                  {selectedBlog.mainDescription2}
                </p>
                <p className="font-inter text-[18px] lg:text-[25px] z-[999] mb-6  lg:mb-4 leading-[31px] mt-[10px]">
                  {selectedBlog.mainDescription3}
                </p>
                <p className="font-inter text-[18px] lg:text-[25px] z-[999] mb-6  lg:mb-4 leading-[31px] mt-[10px]">
                  {selectedBlog.mainDescription4}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center z-[9999] mb-[50px] lg:mb-[50px] mt-[0px] lg:mt-[30px] z-[99999]">
            {/* <p className="font-inter text-[36px] font-bold text-[#F1F1F1] z-[99999]">
              Related Blogs
            </p> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 lg:gap-y-16 w-[90%] lg:w-[70%] mt-[30px] z-[99999]">
              {paginatedBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="flex flex-col gap-[10px] lg:gap-[10px]"
                >
                  <img src={blog.image} alt={`blog${blog.id}`} />
                  <p className="font-inter text-[13px] mt-[10px] lg:mt-[0px] font-normal text-[#8A8A8A] text-left z-[999]">
                    {blog.date}
                  </p>
                  <p className="font-inter MHD:w-[460px] text-[25px] md:text-[36px] font-bold text-[#F1F1F1] text-left z-[999] leading-[27px] md:leading-[43px]">
                    {blog.title}
                  </p>
                  <p className="font-inter text-[18px] font-normal text-[#8c8c8c] text-left z-[999] leading-[24px] md:leading-[30px] mt-[-6px] md:mt-[0px]">
                    {blog.description}
                  </p>
                  <Button
                    className={cn(
                      "bg-gradient-to-r from-teal-800 to-blue-800 hover:from-teal-400 hover:to-blue-500 w-[180px] md:w-[187px] h-[38px] md:h-[44px] rounded-[12px] text-lg md:text-xl font-semibold text-white font-raleway lg:mt-[10px]"
                    )}
                    onClick={() => handleViewDetails(blog)}
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex flex-col items-center">
                <div className=" z-[1000]  mt-8 w-[90%] md:w-[70%]">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          /*  href="#" */
                          onClick={(e) => {
                            e.preventDefault(); // Prevent the default anchor click behavior
                            setPageNo((prev) => Math.max(prev - 1, 1));
                          }}
                          /*  onClick={() => setPageNo((prev) => Math.max(prev - 1, 1))} */
                          aria-disabled={pageNo === 1}
                          className="hover:bg-transparent cursor-pointer"
                        />
                      </PaginationItem>
                      {Array.from({ length: totalPages }, (_, i) => (
                        <PaginationItem key={i + 1}>
                          <PaginationLink
                            onClick={(e) => {
                              e.preventDefault(); // Prevent the default anchor click behavior
                              setPageNo(i + 1);
                            }}
                            /* onClick={() => setPageNo(i + 1)} */
                            className={
                              pageNo === i + 1
                                ? "font-sabor text-[18px] text-blue-500 !important hover:bg-transparent cursor-pointer"
                                : "font-sabor text-[18px] hover:bg-transparent cursor-pointer"
                            }
                          >
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <PaginationNext
                          onClick={(e) => {
                            e.preventDefault(); // Prevent the default anchor click behavior
                            setPageNo((prev) => Math.min(prev + 1, totalPages));
                          }}
                          /* onClick={() => setPageNo((prev) => Math.min(prev + 1, totalPages))} */
                          aria-disabled={pageNo === totalPages}
                          className="hover:bg-transparent cursor-pointer"
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            )}
          </div>

          <div>
            {/* <ForthSection marginBottom="mb-[-50px] sm:mb-[-100px] md:mb-[-100px] lg:mb-[330px] lgMax:mb-[450px] HD:mb-[360px] HDMAX:mb-[530px] MHD:mb-[600px] FHD:mb-[700px]" /> */}
          </div>
        </div>
      )}
    </>
  );
}
