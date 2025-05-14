"use client";

import { useState, useRef } from 'react';
import styles from './styles.module.css';
import BurgerDarkOpen from '@/assets/icons/BurgerDarkOpen.svg';
import BurgerDarkClose from '@/assets/icons/BurgerDarkClose.svg'
import Icon from '@/components/Icon';
import Link from 'next/link';

const Burger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.Container} ref={menuRef}>
            <div 
                className={styles.BurgerIcon} 
                onClick={toggleMenu}
            >
                <Icon 
                    iconPath={isMenuOpen ? BurgerDarkClose.src : BurgerDarkOpen.src}
                    alt={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </div>

            {isMenuOpen && (
                <div className={styles.BurgerContent}>
                    <Link href="/" className={styles.NavItem}>
                        <span>Home🏠</span>
                    </Link>

                    <Link href="/genres" className={styles.NavItem}>
                        <span>Genres📚</span>
                    </Link>

                    <Link href="/trending" className={styles.NavItem}>
                        <span>Trending📈</span>
                    </Link>

                    <Link href="/favorites" className={styles.NavItem}>
                        <span>Favorites💖</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Burger;