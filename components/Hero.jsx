import React from "react";

import Image from "next/image";

import profilePic from "../public/prasmin_profile.png";

export default function Hero() {
  return (
    <div className=" flex text-left items-center justify-center  mt-5">
      <article className=" max-w-screen-md   text-wrap">
        <h3 className="  text-3xl font-black">
          Fullstack Developer: Experienced Innovator Delivering Value to Your
          Team.
        </h3>
        <p className="font-normal text-gray-500 tracking-wide py-6 text-2xl ">
          Hi! I'm Prashmin. A seasoned full-stack developer with a passion for
          turning ideas into polished, high-performance solutions.
        </p>
      </article>

      <Image
        src={profilePic}
        alt="prasmin"
        // style={{
        //   maxWidth: "100%",
        //   height: "auto",
        // }}
      />
    </div>
  );
}
