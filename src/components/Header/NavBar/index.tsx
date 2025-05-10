import styles from './styles.module.css'
import Icon from "@/components/Icon";
import SearchIcon from '@/assets/SearchIcon.svg'
import SearchIconWhite from '@/assets/SearchIconWhite.svg'


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
                iconPath={SearchIconWhite.src}
                alt="Search icon"/>
            </div>
        </div>
    )
}


export default NavBar;