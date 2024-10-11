"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useState, useEffect } from "react";

interface GitHubCalendarProps {
  username: string;
}

export const GitHubCommitStreak: React.FC<GitHubCalendarProps> = ({
  username,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <GitHubCalendar
      username={username}
      blockSize={isMobile ? 12 : 13.8}
      blockMargin={isMobile ? 4 : 4}
      fontSize={isMobile ? 14 : 14}
      colorScheme="dark"
    />
  );
};
