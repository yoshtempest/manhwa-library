"use client";

import styles from './styles.module.css'
import Icon from "@/frontend/components/Icon";
import ICONS from "@/assets/index"


const NavBar = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.InputContainer}>
                <input 
                    className={styles.Input}
                    placeholder="Buscar Livros"
                />
                <div className={styles.SearchIcon}>
                    <Icon 
                        iconPath={ICONS.searchIcon.src}
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