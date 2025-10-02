"use client";

import styles from './styles.module.css';
import { useTheme } from "@/frontend/components/ThemeProvider";

interface Props{
    iconPath: string;
    alt: string;
    width: number;
    height: number;
}

const Icon = ({
    iconPath,
    alt,
    width,
    height,
} : Props ) => {
    if (useTheme().theme === 'dark') {
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