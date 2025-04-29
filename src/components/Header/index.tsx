import styles from './styles.module.css';
import Burger from './Burger';
import NavBar from './NavBar';


const Header = () => {
    return(
        <div className={styles.Container}>
            <Burger />
            <NavBar />
        </div>
    )
}


export default Header;