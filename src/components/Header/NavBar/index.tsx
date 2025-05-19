"use client";

import styles from './styles.module.css'
import Icon from "@/components/Icon";
import SearchIcon from '@/assets/icons/SearchIcon.svg'
import SearchIconWhite from '@/assets/icons/SearchIconWhite.svg'
import { useTheme } from "@/components/ThemeProvider";


const NavBar = () => {
    const { theme } = useTheme();
    
    return (
        <div className={styles.Container}>
            <div className={styles.InputContainer}>
                <input 
                    className={styles.Input}
                    placeholder="Digite aqui"
                />
                <div className={styles.SearchIcon}>
                    <Icon 
                        iconPath={theme === "dark" ? SearchIconWhite.src : SearchIcon.src}
                        alt="Search icon"
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar;