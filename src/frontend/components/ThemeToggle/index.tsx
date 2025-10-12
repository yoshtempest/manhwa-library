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
        aria-label={`Mudar para tema escuro`}
        className={theme === "light" ? styles.activeTheme : undefined}
      >
          <Icon 
            iconPath={ICONS.lightTheme.src} 
            alt={"Light Theme Icon"}
            width={24}
            height={24} 
            ignoreTheme
          />
      </button>

      <button
        onClick={toggleTheme}
        aria-label={`Mudar para tema claro`}
        className={theme === "dark" ? styles.activeTheme : undefined}
      >
          <Icon 
            iconPath={ICONS.darkTheme.src} 
            alt={"Light Theme Icon"}
            width={24}
            height={24}
            ignoreTheme
          />
      </button>
    </div>
  );
}