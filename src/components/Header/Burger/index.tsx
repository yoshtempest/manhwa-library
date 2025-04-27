import styles from './styles.module.css';
import Icon from '../../Icon';
import BurgerDark from '../../../../assets/BurgerDark.svg';


const Burger = () => {
    return(
        <div className={styles.Container}>
            <Icon 
            iconPath={BurgerDark.src}
            alt="Burger"/>
        </div>
    )
}


export default Burger;