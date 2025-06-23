"use client";

import { useState, useRef } from 'react';
import styles from './styles.module.css';
import ICONS from '@/assets/index';
import Icon from '@/components/Icon';
import Link from 'next/link';


const Burger = () => {
    // Estado para controlar a abertura e fechamento do menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Array de objetos contendo os dados dos links
    const menuItems = [
        { label: '🏠Home', path: '/' },
        { label: '📚Genres', path: '/genres' },
        { label: '📈Trending', path: '/trending' },
        { label: '💖Favorites', path: '/favorites' },
        { label: '🔑 Login', path: '/login' },
        { label: '📝 Register', path: '/register' }
    ];

    return (
        <div className={styles.Container} ref={menuRef}>
            <div 
                className={styles.BurgerIcon} 
                onClick={toggleMenu}
            >
                <Icon 
                    iconPath={isMenuOpen ? ICONS.burgerClose.src : ICONS.burgerOpen.src}
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