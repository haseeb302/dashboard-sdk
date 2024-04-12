"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const _links = [
  { name: "Welcome", href: "/" },
  {
    name: "Getting Started",
    href: "/getting-started",
    subMenu: [
      { name: "Installation", href: "/getting-started#Installation" },
      { name: "Usage", href: "/getting-started#Usage" },
    ],
    subMenuOpen: true,
  },
  {
    name: "Blocks",
    href: "/blocks",
    subMenu: [
      { name: "Dashboard", href: "/blocks#Dashboard" },
      { name: "Row", href: "/blocks#Row" },
      { name: "Cell", href: "/blocks#Cell" },
      { name: "BarChart", href: "/blocks#BarChart" },
      { name: "PieChart", href: "/blocks#PieChart" },
    ],
    subMenuOpen: false,
  },
  { name: "Example", href: "/dashboard-example" },
];

export default function Nav() {
  const [links, setLinks] = useState(_links);

  const toggleSubMenu = (link) => {
    let updatedLinks = links.map((l) => {
      if (l.name === link.name) {
        l.subMenuOpen = !l.subMenuOpen;
      }
      return l;
    });

    setLinks([...updatedLinks]);
  };

  return (
    <>
      {links.map((link) => {
        if (link?.subMenu?.length > 0) {
          return (
            <>
              <button
                onClick={() => toggleSubMenu(link)}
                className={
                  "flex h-[32px] grow items-center justify-between gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none"
                }
              >
                <p className="font-bold hidden md:block">{link.name}</p>

                <div className={`flex`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {link?.subMenuOpen && (
                <>
                  {link.subMenu?.map((subItem, idx) => {
                    return (
                      <Link
                        key={idx}
                        href={subItem.href}
                        className={
                          "flex h-[32px] items-center rounded-md bg-gray-50 p-4 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none"
                        }
                      >
                        <p className="hidden md:block">{subItem.name}</p>
                      </Link>
                    );
                  })}
                </>
              )}
            </>
          );
        } else {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={
                "flex h-[32px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              }
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        }
      })}
    </>
  );
}
