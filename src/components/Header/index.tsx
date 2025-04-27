import styles from './styles.module.css';
import Burger from './Burger';
import NavBar from './NavBar';
import { ThemeProvider } from './ThemeProvider';


const Header = () => {
    return(
        <div className={styles.Container}>
            <Burger />
            <NavBar />
            <ThemeProvider />
        </div>
    )
}


export default Header;