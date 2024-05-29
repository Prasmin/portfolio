import React from "react";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

import me from "../public/Me.jpg";
// import CV from "../public/Prashmin-gurung_CV.pdf";

export default function Hero() {
  return (
    <div className="  flex flex-col sm:flex-row  gap-8 p-4">
      <div className=" flex-1 text-balance pl-12 lg:py-32   ">
        <article>
          <h2 className=" text-2xl font-bold tracking-normal leading-normal sm:leading-normal  sm:text-4xl ">
            Fullstack Developer, Balanced Life Coder, Multicultural
            Collaborator.
          </h2>
          <p className=" text-gray-500 leading-8 tracking-wide mt-6 text-xl  ">
            Hi! I'm Prashmin. A seasoned full-stack developer with a passion for
            turning ideas into polished, high-performance solutions.
          </p>
        </article>

        <div className="flex flex-col p-4 sm:flex-row items-center  text-lg font-medium">
          <Link
            href="#contact"
            className="bg-gray-900 hover:bg-gray-600   text-white px-7 py-3 flex items-center gap-2 rounded-full  "
          >
            Contact me here <BsArrowRight />
          </Link>
          <a
            className="bg-white px-7 py-3 hover:bg-gray-600/30  flex items-center gap-2 rounded-full"
            href="/CV.pdf"
            download={true}
          >
            Download CV <HiDownload />
          </a>
          <Link
            href="https://www.linkedin.com/in/prasmin-gurung/"
            className="bg-white p-4 text-gray-900 hover:bg-gray-600/20   flex items-center gap-2 rounded-full  "
          >
            <BsLinkedin />
          </Link>
          <Link
            href="https://github.com/Prasmin"
            className="bg-white p-4 text-gray-900 hover:bg-gray-600/20 flex items-center gap-2 rounded-full  "
          >
            <FaGithubSquare />
          </Link>
        </div>
      </div>

      <div className="  flex justify-center ">
        <Image src={me} alt="prasmin" width={500} height={500} priority />
      </div>
    </div>
  );
}

// mx-auto  text-center  lg:flex lg:py-32 lg:text-left
