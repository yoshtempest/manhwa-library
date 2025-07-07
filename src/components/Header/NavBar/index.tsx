"use client";

import styles from './styles.module.css'
import Icon from "@/components/Icon";
import ICONS from "@/assets/index"
import { useTheme } from "@/components/ThemeProvider";


const NavBar = () => {
    const { theme } = useTheme();
    console.log("Current theme:", theme); // tá permanente light
    
    return (
        <div className={styles.Container}>
            <div className={styles.InputContainer}>
                <input 
                    className={styles.Input}
                    placeholder="Digite aqui"
                />
                <div className={styles.SearchIcon}>
                    <Icon 
                        iconPath={theme === "dark" ? ICONS.searchIconWhite.src : ICONS.searchIcon.src}
                        alt="Search icon"
                    />
                </div>
            </div>
        </div>
    )
}


export default NavBar;