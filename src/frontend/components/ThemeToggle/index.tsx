"use client";

import styles from './styles.module.css';
import Icon from "@/frontend/components/Icon";
import ICONS from "@/assets/index";
import { useTheme } from "@/frontend/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.themeToggle}>
      <button
        onClick={toggleTheme}
        aria-label={`Mudar para tema ${theme === "dark" ? "light" : "dark"}`}
      >
        <Icon 
          iconPath={theme === "dark" ? ICONS.darkTheme.src : ICONS.lightTheme.src} 
          alt={`Theme Icon ${theme === "dark" ? "light" : "dark"}`}
          width={28}
          height={28} 
        />
      </button>
    </div>
  );
}