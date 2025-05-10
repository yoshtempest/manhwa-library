import styles from './styles.module.css';
import Burger from './Burger';
import NavBar from './NavBar';

const Header = () => {
    return(
        <div className={styles.Container}>
            <div className={styles.BurgerContainer}>
                <Burger />
            </div>
            <div className={styles.NavBarContainer}>
                <NavBar />
            </div>
        </div>
    )
}

export default Header;