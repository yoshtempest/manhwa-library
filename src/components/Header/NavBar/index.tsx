import styles from './styles.module.css'
import Icon from "../../Icon";
import SearchIcon from '../../../../assets/SearchIcon.svg'


const NavBar = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.InputContainer}>
                <input className={styles.Input}
                placeholder="Digite aqui">
                </input>
            </div>

            <div className={styles.IconContainer}>
                <Icon 
                iconPath={SearchIcon.src}
                alt="Search icon"/>
            </div>
        </div>
    )
}


export default NavBar;