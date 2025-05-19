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

    // Array de objetos contendo os dados dos links
    const menuItems = [
        { label: 'Home🏠', path: '/' },
        { label: 'Genres📚', path: '/genres' },
        { label: 'Trending📈', path: '/trending' },
        { label: 'Favorites💖', path: '/favorites' }
    ];

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
                    {menuItems.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.path} 
                            className={styles.NavItem}
                        >
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Burger;