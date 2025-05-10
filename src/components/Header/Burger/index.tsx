"use client";

import { useState, useRef } from 'react';
import styles from './styles.module.css';
import BurgerDark from '@/assets/BurgerDark.svg';
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
                    iconPath={BurgerDark.src}
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
                        <span>Trending Now📈</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Burger;