"use client";

import { useEffect } from "react";

export function ThemeBoot() {
  useEffect(() => {
    const theme = localStorage.getItem("orbitcare-theme");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return null;
}
