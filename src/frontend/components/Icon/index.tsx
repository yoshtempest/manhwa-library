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
    if (ignoreTheme)  {
        return (
            <img className={styles.IconWhite}
            src={iconPath}
            alt={alt}
            width={width}
            height={height}
        />
        )
    }
    return (
        <img className={styles.Icon}
        src={iconPath}
        alt={alt}
        width={width}
        height={height}
        />
    )
}

export default Icon;