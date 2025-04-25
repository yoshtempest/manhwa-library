import styles from './styles.module.css'
import NavBar from './NavBar'
import { ThemeProvider } from './ThemeProvider'


const Header = () => {
    return(
        <div className={styles.Container}>
            <NavBar />
            <ThemeProvider />
        </div>
    )
}


export default Header;