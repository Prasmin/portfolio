import React from "react";
import skillsData from "../lib/data";

export default function Skills() {
  return (
    <section>
      <div>
        <h2 className="text-3xl font-bold sm:leading-normal  sm:text-4xl">
          Tech Stack{" "}
        </h2>

        <div className="grid grid-cols-4 gap-4">
          {skillsData.map((item) => (
            <div key={item.id}>{item.icon}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
