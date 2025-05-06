import styles from './styles.module.css';
import Icon from '../../Icon';
import BurgerDark from '../../../../assets/BurgerDark.svg';
import HomeDark from '../../../../assets/HomeDark.svg';


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
                    <Icon
                    iconPath={HomeDark.src}
                    alt="Home"/>
                    <p> Home </p>

                    <a> Gêneros📚</a>
                </div>
            </div>
        </div>
    )
}


export default Burger;