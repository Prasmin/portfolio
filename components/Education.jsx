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
    <section>
      <h3>Education</h3>
      <VerticalTimeline>
        {EducationsData.map((item) => (
          <VerticalTimelineElement
            contentStyle={{ boxStyle }}
            arrowStyle={{ borderRight: " 0.4rem solid #9ca3af" }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "white",
              fontSize: "1.5rem",
            }}
            visible={true}
            key={item.id}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <h4 className="font-normal !mt-0">{item.sub_title}</h4>
            <h4 className="font-normal !mt-0">{item.location}</h4>
            <p className="!mt-1 !font-normal text-gray-700">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
