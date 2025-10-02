"use client";

import { useState, useRef} from 'react';
import styles from './styles.module.css';
import ICONS from '@/assets/index';
import Icon from '@/frontend/components/Icon';
import Link from 'next/link';
import ThemeToggle from '@/frontend/components/ThemeToggle';


const menuItems = [
  { href: "/", label: "Home", icon: ICONS.home.src },
  { href: "/favorites", label: "Favoritos", icon: ICONS.favorites.src },
  { href: "/genres", label: "Gêneros", icon: ICONS.genres.src },
  { href: "/trending", label: "Em Alta", icon: ICONS.trending.src },
  { href: "/login", label: "Login", icon: ICONS.login.src },
  { href: "/register", label: "Cadastro", icon: ICONS.register.src },
];

export default function Burger () {
    // Estado para controlar a abertura e fechamento do menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.Container} ref={menuRef}>
            <div className={styles.BurgerIcon} onClick={toggleMenu}>
                <Icon 
                    iconPath={isMenuOpen ? ICONS.burgerClose.src : ICONS.burgerOpen.src}
                    alt={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    width={30}
                    height={30}
                />
            </div>

            {isMenuOpen && (
                <nav className={styles.Content}>
                    <ThemeToggle />
                    <ul>
                        {menuItems.map(({ href, label, icon }) => (
                        <li key={href} className={styles.MenuItems}>
                            <Link href={href}>
                                <div className={styles.HorizontalContainer}>
                                    <Icon
                                        iconPath={icon}
                                        alt={`${label} icon`}
                                        width={28}
                                        height={28}
                                    />
                                    <p className={styles.Label}>{label}</p>
                                </div>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    )
}