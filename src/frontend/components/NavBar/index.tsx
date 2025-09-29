"use client";

import styles from './styles.module.css'
import Icon from "@/frontend/components/Icon";
import ICONS from "@/assets/index"
import { useTheme } from "@/frontend/components/ThemeProvider";


const NavBar = () => {
    const { theme } = useTheme();
    console.log("Current theme:", theme); // tá permanente light
    
    return (
        <div className={styles.Container}>
            <div className={styles.InputContainer}>
                <input 
                    className={styles.Input}
                    placeholder="Buscar Livros"
                />
                <div className={styles.SearchIcon}>
                    <Icon 
                        iconPath={theme === "dark" ? ICONS.searchIconWhite.src : ICONS.searchIcon.src}
                        alt="Search icon"
                        width={32}
                        height={32}
                    />
                </div>
            </div>
        </div>
    )
}


export default NavBar;