"use client"; // Indica que é um componente do lado do cliente (Next.js)

import styles from './styles.module.css'
import DarkTheme from '@/assets/icons/DarkTheme.svg'
import Icon from "@/components/Icon";
import LightTheme from '@/assets/icons/LightTheme.svg'
import { useEffect, useState, createContext, useContext } from "react";


export const ThemeContext = createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
}>({
  // Valores padrões: light ou vazio
  theme: "light",
  toggleTheme: () => {},
});

// É o componente que vai envolver a aplicação para fornecer o tema
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // 1ª Execução: Verifica preferência do usuário
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Se o usuário já escolheu um tema, usa o dele. Caso contrário, usa o do sistema
    setTheme(storedTheme || (systemPrefersDark ? "light" : "dark"));
  }, []);

  // Sempre que o tema mudar: atualiza HTML e localStorage
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // Inverte o tema atual (dark - light)
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
      {/* Renderiza o conteúdo da aplicação */}
      {children}
    </ThemeContext.Provider>
  );
}


// Permite que qualquer componente acesse o tema e a função toggleTheme
export const useTheme = () => useContext(ThemeContext);