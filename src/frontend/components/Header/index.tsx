import styles from './styles.module.css';
import Burger from './Burger';
import NavBar from './NavBar';
import { IMAGES } from '@/uploads';
import Image from 'next/image';

const Header = () => {
    return(
        <div className={styles.Container}>
            <div className={styles.BurgerContainer}>
                <Burger />
            </div>
            <div className={styles.LogoContainer}>
                <Image className={styles.Logo} src={IMAGES.logo} alt={'Logo'}/>
                <p className={styles.Title}>Aether Library</p>
            </div>
            {/* <div className={styles.NavBarContainer}>
                <NavBar />
            </div> */}
        </div>
    )
}

export default Header;