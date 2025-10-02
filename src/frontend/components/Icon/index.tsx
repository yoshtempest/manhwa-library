"use client";

import styles from './styles.module.css';
import { useTheme } from "@/frontend/components/ThemeProvider";

interface Props{
    iconPath: string;
    alt: string;
    width: number;
    height: number;
    ignoreTheme?: boolean;
}

const Icon = ({
    iconPath,
    alt,
    width,
    height,
    ignoreTheme = false
} : Props ) => {
    const { theme } = useTheme();
    
    // Se ignoreTheme for true, SEMPRE usa a classe normal (Icon)
    if (ignoreTheme) {
        return (
            <img 
                className={styles.Icon}
                src={iconPath}
                alt={alt}
                width={width}
                height={height}
            />
        );
    }
    
    // Se ignoreTheme for false, aplica a lógica do tema
    // Tema escuro: IconWhite | Tema claro: Icon
    const className = theme === 'dark' ? styles.IconWhite : styles.Icon;
    
    return (
        <img 
            className={className}
            src={iconPath}
            alt={alt}
            width={width}
            height={height}
        />
    );
}

export default Icon;