import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
// import logoDark from "../../public/logo/logo-dark.svg";
import logoDark from "../../public/logo/logo.png";
import IconBurgerMenu from "../../public/art/icon_burger_menu.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  /* const navList = ["Home", "Blog", "Portfolio", "Services", "Contact"]; */
  const navList = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <Sheet key={"left"}>
      <SheetTrigger asChild>
        <Image src={IconBurgerMenu} alt="Burger Menu" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex-shrink-0 flex items-center">
            <Image
              className=""
              src={logoDark}
              width={150}
              height={20}
              alt="Logo"
            />
          </div>
        </SheetHeader>
        <ul className="mt-6 flex flex-col gap-y-3">
          {navList.map((item, index) => (
            <li key={index}>
               <SheetClose asChild>
                <Link
                  href={item.path}
                  className={`text-base font-sora transition-colors font-medium ${
                    pathname === item.path ? "text-[#1936BA]" : "hover:text-[#1936BA]"
                  }`}

                >
                  {item.name}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
