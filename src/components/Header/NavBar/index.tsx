import styles from './styles.module.css'
import SearchIcon from '../../../../assets/SearchIcon.svg'


const NavBar = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.InputContainer}>
                <input className={styles.Input}></input>
            </div>
            <img></img>
        </div>
    )
}


export default NavBar;