import React from "react";
import {
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiGithubBadge,
  DiMongodb,
} from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

export const SkillsData = [
  {
    id: 0,
    icon: <DiJsBadge style={{ color: "#FACC15" }} />,
  },
  {
    id: 1,
    icon: <DiReact style={{ color: "#1E3A8A" }} />, // Adjusted to Tailwind CSS color
  },
  {
    id: 2,
    icon: <BiLogoTailwindCss style={{ color: "#1D4ED8" }} />, // Adjusted to Tailwind CSS color
  },
  {
    id: 3,
    icon: <SiNextdotjs />,
  },
  {
    id: 4,
    icon: <DiNodejs style={{ color: "#16A34A" }} />,
  },
  {
    id: 5,
    icon: <DiGithubBadge />,
  },
  {
    id: 6,
    icon: <DiMongodb style={{ color: "#064E3B" }} />, // Adjusted to Tailwind CSS color
  },
  {
    id: 7,
    icon: (
      <i
        className="devicon-express-original-wordmark colored font-bold"
        style={{ color: "#000000" }}
      ></i>
    ),
  },
];

export const EducationsData = [
  {
    id: 0,
    title: "Advance diploma - Information Technology",
    sub_title: "Australasian Internation Academy",
    location: "Sydney, NSW",
    description:
      "It offers a comprehensive education in various IT domains, blending theoretical knowledge with practical skills",
    icon: <FaUserGraduate />,
    date: "2018-2020",
  },
  {
    id: 1,
    title: "Bachelor degree - Information Technology and system",
    sub_title: "Victorian Institute of Technology",
    location: "Sydney, NSW",
    description:
      "Coursework focused on software testing, Java programming, database fundamentals, and software development life cycle.",
    icon: <FaUserGraduate />,
    date: "2020-2022",
  },
  {
    id: 2,
    title: "Full-Stack Development Coding Bootcamp ",
    sub_title: "Dented Code",
    location: "Sydney, NSW",
    description:
      "	Completed intensive training in MERN stack development, including ReactJS, Node.js, MongoDB, and Express.",
    icon: <TbCertificate />,
    date: "2022-2023",
  },
];

export default SkillsData;
