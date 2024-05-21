import React from "react";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

import me from "../public/Me.jpg";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center mx-auto justify-center gap-8 p-4">
        <div className="flex-1 ">
          <article>
            <h2 className=" text-3xl font-bold tracking-normal leading-normal sm:leading-normal  sm:text-4xl ">
              Fullstack Developer, Balanced Life Coder, Multicultural
              Collaborator.
            </h2>
            <p className=" text-gray-500 leading-8 tracking-wide mt-6 text-xl  ">
              Hi! I'm Prashmin. A seasoned full-stack developer with a passion
              for turning ideas into polished, high-performance solutions.
            </p>
          </article>

          <div className="flex flex-col mt-3 sm:flex-row items-center  gap-2  text-lg font-medium">
            <Link
              href="#contact"
              className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full  "
            >
              Contact me here <BsArrowRight />
            </Link>
            <a className="bg-white px-7 py-3   flex items-center gap-2 rounded-full">
              Download CV <HiDownload />
            </a>
            <Link
              href="https://www.linkedin.com/in/prasmin-gurung/"
              className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full  "
            >
              <BsLinkedin />
            </Link>
            <Link
              href="https://github.com/Prasmin"
              className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full  "
            >
              <FaGithubSquare />
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center ">
          <Image src={me} alt="prasmin" />
        </div>
      </div>
    </>
  );
}

// mx-auto  text-center  lg:flex lg:py-32 lg:text-left
