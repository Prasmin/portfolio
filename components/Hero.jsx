"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";

import me from "../public/Me.jpg";
import Modal from "./modal";
// import CV from "../public/Prashmin-gurung_CV.pdf";

export default function Hero() {
  const [open, setOpen] = useState(false);

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
          <button
            className="bg-gray-900 hover:bg-gray-600   text-white px-7 py-3 flex items-center gap-2 rounded-full"
            onClick={() => setOpen(true)}
          >
            Contact me here <BsArrowRight />
          </button>

          {/* ------Modal--------- */}
          <Modal open={open} onClose={() => setOpen(false)}>
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-gray-800">
                Contact details.
              </h3>
              <p className="text-sm text-gray-500 my-2">
                prashmingrg@gmail.com
              </p>
              <p className="text-sm text-gray-500">0426862304</p>
            </div>
          </Modal>
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
