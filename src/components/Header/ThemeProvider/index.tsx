"use client";

import Icon from "../../Icon";
import styles from './styles.module.css'
import LightTheme from '../../../../assets/LightTheme.svg'
import DarkTheme from '../../../../assets/DarkTheme.svg'

import { useEffect, useState } from "react";

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
    // Primeiro remove todas as classes de tema
    document.documentElement.classList.remove("light", "dark");
    
    // Depois adiciona a classe do tema atual
    document.documentElement.classList.add(theme);
    
    // Salva preferência
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* Botão Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={`${theme === "dark" ? "light" : "dark"}`}
      >
        <Icon 
          iconPath={theme === "dark" ? DarkTheme.src : LightTheme.src} 
          alt={`Theme Icon ${theme === "dark" ? "light" : "dark"}`} 
        />
      </button>
      
      {/* Content of aplication */}
      {children}
    </>
  );
}