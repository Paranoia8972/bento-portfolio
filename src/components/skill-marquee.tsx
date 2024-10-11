"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiFigma,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiNodedotjs,
  SiPython,
  SiDocker,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";

const skills = [
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiFigma, label: "Figma" },
  { icon: SiReact, label: "React" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiGit, label: "Git" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiPython, label: "Python" },
  { icon: SiDocker, label: "Docker" },
];

export default function InfiniteSkillMarquee() {
  return (
    <div className="w-full overflow-hidden py-1 relative">
      <div className="flex flex-col gap-8">
        <MarqueeRow skills={skills} direction="left" />
        <MarqueeRow skills={skills} direction="right" />
      </div>
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>
    </div>
  );
}

function MarqueeRow({
  skills,
  direction,
}: {
  skills: typeof skills;
  direction: "left" | "right";
}) {
  const [duration, setDuration] = useState(30);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rowRef.current) {
      const { width } = rowRef.current.getBoundingClientRect();
      setDuration(width / 50);
    }
  }, []);

  return (
    <div className="flex overflow-hidden">
      <div
        ref={rowRef}
        className="flex items-center gap-6 animate-infinite-scroll"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <Badge
            key={index}
            className="flex items-center gap-2 flex-shrink-0"
            variant="outline"
          >
            <skill.icon className="size-8 px-1 text-gray-100" />
            <span className="text-sm font-medium text-white">
              {skill.label}
            </span>
          </Badge>
        ))}
      </div>
    </div>
  );
}
