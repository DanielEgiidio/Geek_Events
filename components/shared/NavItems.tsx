"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between wrapper  justify-center flex w-full flex-col items-start gap-2 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            }  p-medium-12 whitespace-nowrap relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#0d1117] dark:after:bg-[#FFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left `}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
