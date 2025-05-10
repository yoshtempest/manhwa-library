import styles from './styles.module.css';
import BurgerDark from '@/assets/BurgerDark.svg';
import Icon from '@/components/Icon';
import Link from 'next/link'; // Importação correta para navegação


const Burger = () => {
    return(
        <div className={styles.Container}>
            <div className={styles.BurgerIcon}>
                <Icon 
                iconPath={BurgerDark.src}
                alt="Burger"/>
            </div>

            <div>
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
            </div>
        </div>
    )
}


export default Burger;