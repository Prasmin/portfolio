"use client";

import { EducationsData } from "@/lib/data";
import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Education() {
  const boxStyle = {
    background: "#f3f4f6",
    boxShadow: "none",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    textAlign: "left",
    padding: "1.3rem 2rem",
  };

  return (
    <section className="pt-8  ">
      <h3 className="font-bold text-3xl sm:text-4xl flex justify-center ">
        Education
      </h3>
      <VerticalTimeline lineColor="">
        {EducationsData.map((item) => (
          <VerticalTimelineElement
            contentStyle={{ boxStyle }}
            contentArrowStyle={{ borderRight: " 0.4rem solid #9ca3af" }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "white",

              fontSize: "1.5rem",
            }}
            visible={true}
            key={item.id}
          >
            <div className="hover:bg-gray-100 transition duration-300 p-4 rounded-lg">
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <h4 className="font-normal !mt-0">{item.sub_title}</h4>
              <h4 className="font-normal !mt-0">{item.location}</h4>
              <p className="!mt-1 !font-normal text-gray-700">
                {item.description}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
