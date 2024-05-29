import React from "react";
import skillsData from "../lib/data";

export default function Skills() {
  return (
    <section>
      <div className=" gap-8 items-center py-8 px-4 mx-auto  w-full h-screen  xl:gap-16 md:grid md:grid-cols-2  lg:px-6   ">
        <div className=" grid sm:grid-cols-4 grid-cols-3 gap-12 mt-7 ">
          {skillsData.map((item) => (
            <div key={item.id} className=" sm:text-7xl text-4xl">
              {item.icon}
            </div>
          ))}
        </div>
        <article>
          <h2 className="sm:text-4xl text-2xl font-bold text-center -mt-4   ">
            What I do
          </h2>

          <p className=" text-gray-500 leading-relaxed   text-xl mx-2 mt-3 ">
            With a knack for problem-solving and a passion for web development,
            I have crafted a diverse range of websites, including dynamic
            e-commerce platforms and sleek, professional portfolios.
          </p>
          <ul className="list-disc list-inside leading-relaxed  text-gray-500 text-xl mx-2 mt-4">
            <li>
              Develop SEO friendly and highly interactive Front end / User
              Interfaces for your web applications
            </li>
            <li>Developed a full-stack E-Commerce platform with an Admin </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
