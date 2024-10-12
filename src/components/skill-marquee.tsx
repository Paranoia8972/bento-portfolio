"use client";
import React, { useRef, useEffect } from "react";
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
  SiGo,
  SiArchlinux,
  SiRaspberrypi,
  SiGnubash,
  SiVercel,
  SiMongodb,
} from "react-icons/si";
import { IconType } from "react-icons";
import { Button } from "@/components/ui/button";

const skills: { icon: IconType; label: string }[] = [
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
  { icon: SiGo, label: "Go" },
  { icon: SiArchlinux, label: "Arch Linux" },
  { icon: SiRaspberrypi, label: "Raspberry Pi" },
  { icon: SiGnubash, label: "Bash" },
  { icon: SiVercel, label: "Vercel" },
  { icon: SiMongodb, label: "MongoDB" },
];

const skillsRow1 = skills.slice(0, Math.ceil(skills.length / 2));
const skillsRow2 = skills.slice(Math.ceil(skills.length / 2));

export default function SkillMarquee() {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex flex-col gap-8">
        <MarqueeRow skills={skillsRow1} direction="left" />
        <MarqueeRow skills={skillsRow2} direction="right" />
      </div>
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
    </div>
  );
}

function MarqueeRow({
  skills,
  direction,
}: {
  skills: { icon: IconType; label: string }[];
  direction: "left" | "right";
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rowRef.current) {
      const { width } = rowRef.current.getBoundingClientRect();
      const duration = width / 50;
      rowRef.current.style.setProperty("--duration", `${duration}s`);
    }
  }, []);

  return (
    <div className="flex overflow-hidden group">
      <div
        ref={rowRef}
        className={`flex items-center gap-4 hover:paused ${
          direction === "right" ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:pause-animation`}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <Button
            key={index}
            variant="outline"
            className="flex items-center gap-2 hover:bg-white/5"
          >
            {React.createElement(skill.icon, {
              className: "size-8 px-1 text-gray-100",
            })}
            <span className="text-sm font-medium text-white">
              {skill.label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
