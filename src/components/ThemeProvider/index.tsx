"use client";

import styles from './styles.module.css'
import DarkTheme from '@/assets/icons/DarkTheme.svg'
import Icon from "@/components/Icon";
import LightTheme from '@/assets/icons/LightTheme.svg'
import { useEffect, useState, createContext, useContext } from "react";

// Crie o contexto
export const ThemeContext = createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // 1ª Execução: Verifica preferência do usuário
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    setTheme(storedTheme || (systemPrefersDark ? "dark" : "light"));
  }, []);

  // Sempre que o tema mudar: atualiza HTML e localStorage
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Botão Toggle */}
      <div className={styles.themeToggle}>
        <button
          onClick={toggleTheme}
          aria-label={`${theme === "dark" ? "light" : "dark"}`}
        >
          <Icon 
            iconPath={theme === "dark" ? DarkTheme.src : LightTheme.src} 
            alt={`Theme Icon ${theme === "dark" ? "light" : "dark"}`} 
          />
        </button>
      </div>

      {/* Content of aplication */}
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para usar o tema
export const useTheme = () => useContext(ThemeContext);