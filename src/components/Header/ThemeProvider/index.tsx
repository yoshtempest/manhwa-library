"use client";

import Icon from "../../Icon";
import styles from './styles.module.css'
import LightTheme from '../../../../assets/LightTheme.svg'
import DarkTheme from '../../../../assets/DarkTheme.svg'

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
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    aria-label={`Mudar para tema ${theme === "light" ? "dark" : "light"}`}>
      {theme === "light" ? (
          <Icon iconPath={LightTheme.src} alt="Icon of light theme" />
      ) : (
          <Icon iconPath={DarkTheme.src} alt="Icon of dark theme" />
      )}
    </button>
  );
}