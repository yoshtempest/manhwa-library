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
    // Aplica a classe no elemento <html>
    document.documentElement.className = theme;
    // Salva preferência
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* Botão Toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label={`${theme === "light" ? "escuro" : "claro"}`}
      >
        <Icon 
          iconPath={theme === "light" ? DarkTheme.src : LightTheme.src} 
          alt={`Ícone de tema ${theme === "light" ? "escuro" : "claro"}`} 
        />
      </button>
      
      {/* Conteúdo da aplicação */}
      {children}
    </>
  );
}