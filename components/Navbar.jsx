"use client";

import { useEffect, useState } from "react";
import cn from "@/lib/utils";

import Link from "next/link";
import Image from "next/image";

import profilePic from "../public/prasmin_profile.png";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Team", href: "/team", current: false },
  { name: "Projects", href: "/project", current: false },
  { name: "Uses", href: "/use", current: false },
  { name: "Contact", href: "/contact", current: false },
];

//if i use like object instead ar ray. would i still map methods to sort out the array?

const Navbar = () => {
  // Function to close the mobile navbar
  const closeMobileNavbar = () => {
    setIsMobileNavOpen(false);
  };

  // Effect to listen for screen size changes
  useEffect(() => {
    // Function to handle resize event
    const handleResize = () => {
      // Close the mobile navbar if the screen size is larger than a certain threshold
      if (window.innerWidth > 768) {
        closeMobileNavbar();
      }
    };

    // Add event listener for resize event
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className=" flex justify-around pt-3 lg:justify-evenly items-center">
      <div className="  ">
        <Link href="/">
          <span className="sr-only">Prashmin Gurung</span>
          <Image
            width="192"
            height="192"
            className="h-12 w-12 rounded-full object-cover bg-top  saturate-200 border-white shadow-xl"
            quality="100"
            src={profilePic}
            alt="logo"
          />
        </Link>
      </div>

      <div className="  shadow-xl border-white rounded-full   ">
        {/* Desktop Navigation */}
        <nav className=" hidden lg:flex p-4 m-4 ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn("rounded-md px-3 py-2 text-sm font-bold ", {
                // Apply styles for the current navigation item
                "  hover:text-slate-500": item.current,
                // Apply styles for non-current navigation items
                "text-slate-950 hover:text-slate-500 ": !item.current,
              })}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden ">
          <button
            className="block text-gray-900 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Navigation Menu */}
          {isMobileNavOpen && (
            <div className="absolute top-16 right-0  backdrop-blur-sm bg-white/70 w-full   shadow-xl border rounded-md">
              <nav className="flex flex-col p-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn("px-4 py-2 text-xl font-bold", {
                      "hover:text-slate-500": item.current,
                      "text-slate-950 hover:text-slate-500": !item.current,
                    })}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

{
  /* // <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"><li><a class="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400" href="/about">About<span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span></a></li><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">Articles</a></li><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a></li><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/speaking">Speaking</a></li><li><a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/uses">Uses</a></li></ul> */
}
