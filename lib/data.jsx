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

const SkillsData = [
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

export default SkillsData;
