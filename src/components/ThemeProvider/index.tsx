// src/components/ThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";

export function ThemeProvider() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Respeita a preferência do sistema apenas na primeira carga
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}