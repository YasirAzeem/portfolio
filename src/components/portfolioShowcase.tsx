import Image from "next/image";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import LeftEllipse from "@public/portfolio-assets/left-Ellipse-showcase.png";
import CurvedLines from "@public/portfolio-assets/curvedline-showcase.png";
import RightLinesImage from "@public/portfolio-assets/right-lines-showcase.png";
import RightEllipseImage from "@public/portfolio-assets/right-Ellipse-under-lines-showcase.png";
import { projects } from "@/constants/portfolio";

type Props = {
  selectedTab: string;
  pageNo: number;
};

const ITEMS_PER_PAGE = 3;

const PortfolioShowcase = ({ selectedTab, pageNo }: Props) => {
  const filteredProjects =
    selectedTab === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === selectedTab.toLowerCase()
        );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (pageNo - 1) * ITEMS_PER_PAGE,
    pageNo * ITEMS_PER_PAGE
  );

  return (
    <div className="relative w-full h-full">
      <Image
        src={LeftEllipse}
        alt="left-shadow"
        className="absolute left-0 -top-96"
      />
      <Image
        src={RightLinesImage}
        alt="right-lines"
        className="absolute right-0 top-0 max-[1023px]:hidden"
      />
      <Image
        src={RightEllipseImage}
        alt="right-Ellipse"
        className="absolute right-0 top-0 hidden sm:block"
      />

      <div className="flex flex-col gap-16 w-full max-w-[1280px] mx-auto">
        {paginatedProjects.map((project) => (
          <div
            key={project.id}
            className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8"
          >
            <div className="relative max-[1023px]:text-center max-w-[260px]">
              <Image
                src={project.leftImg!}
                alt="Ecom Services"
                className="absolute left-36 bottom-8 max-[1023px]:hidden"
              />
              <p className="text-[#0E35E3] font-['Poppins'] font-semibold text-[20px]">
                {project.category}
              </p>
              <h2 className="font-saborDisplaySSK font-normal text-[40px]">
                {project.title}
              </h2>
              <Image src={CurvedLines} alt="Curved Line" className="" />
              <div className="flex gap-6 mt-4 max-[1023px]:justify-center">
                {project.icons.map((icon, index) => (
                  <Image key={index} src={icon} alt={`Icon ${index}`} />
                ))}
              </div>
            </div>
            <div className="size-full max-w-[90%] sm:max-w-[45%] z-10">
              <Image
                src={project.image}
                alt={project.title}
                width={6000}
                height={600}
              />
            </div>
            <div className="max-w-[85%] sm:max-w-[290px]">
              <p className="text-[#CCD6F6] font-sabor font-normal text-[16px] max-[1023px]:text-center">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="blank"
                className="max-[1023px]:flex max-[1023px]:justify-center"
              >
                <button className="rounded-[12px] bg-[linear-gradient(87.43deg,#090EDB_8.8%,#DA24BB_84.38%)] whitespace-nowrap font-raleway font-semibold text-[20px] sm:text-[16px] md:text-[20px] px-6 py-2 mt-3 w-full max-w-[204px]">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 mb-8 z-[1000] left-1/2 transform -translate-x-1/2 absolute">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={`/portfolio?pageNo=${pageNo - 1}`}
                  aria-disabled={pageNo === 1}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    href={`/portfolio?pageNo=${i + 1}`}
                    className={pageNo === i + 1 ? "text-blue-500" : ""}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href={`/portfolio?pageNo=${pageNo + 1}`}
                  aria-disabled={pageNo === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default PortfolioShowcase;
