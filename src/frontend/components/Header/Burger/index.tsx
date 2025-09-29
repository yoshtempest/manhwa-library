"use client";

import { useState, useRef} from 'react';
import styles from './styles.module.css';
import ICONS from '@/assets/index';
import Icon from '@/frontend/components/Icon';
import Link from 'next/link';
import { ThemeProvider } from '@/frontend/components/ThemeProvider';



export default function Burger({
  children,
}: {
  children: React.ReactNode;
}) {
    // Estado para controlar a abertura e fechamento do menu
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
                    iconPath={isMenuOpen ? ICONS.burgerClose.src : ICONS.burgerOpen.src}
                    alt={isMenuOpen ? "Close menu" : "Open menu"}
                    width={30}
                    height={30}
                />
            </div>

            {isMenuOpen && (
                <div className={styles.BurgerContent}>
                    <div className='dark'>
                        <ThemeProvider>{children}</ThemeProvider>
                        <div className={styles.BurgerItems}>
                            <Link href='/'>
                                <Icon iconPath={ICONS.home.src}
                                    alt={"Home icon"}
                                    width={24}
                                    height={24}> 
                                </Icon>
                                <h4>home</h4>
                            </Link>

                            <Link href='/favorites'>
                                <Icon iconPath={ICONS.favorites.src}
                                    alt={"Home icon"}
                                    width={24}
                                    height={24}>    
                                </Icon>
                                <h4>Favoritos</h4>
                            </Link>

                            <Link href='/genres'>
                                <Icon iconPath={ICONS.genres.src}
                                    alt={"Home icon"}
                                    width={24}
                                    height={24}>    
                                </Icon>
                                <h4>Gêneros</h4>
                            </Link>

                            <Link href='/trending'>
                                <Icon iconPath={ICONS.trending.src}
                                    alt={"Home icon"}
                                    width={24}
                                    height={24}>    
                                </Icon>
                                <h4>Em Alta</h4>
                            </Link>

                            <Link href="/login">
                                <Icon iconPath={ICONS.login.src}
                                    alt={"Home icon"}
                                    width={24}
                                    height={24}>    
                                </Icon>
                                <h4>Login</h4>
                            </Link>

                            <Link href="/register">
                                <Icon iconPath={ICONS.register.src}
                                    alt={"Home icon"}
                                    width={24}
                                    height={24}>    
                                </Icon>
                                <h4>Cadastro</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}