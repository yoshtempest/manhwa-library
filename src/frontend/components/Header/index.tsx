import styles from './styles.module.css';
import Burger from './Burger';
import NavBar from './NavBar';
import { IMAGES } from '@/uploads';
import Image from 'next/image';
import Link from 'next/link';

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
            <Link href='/needhelp' className={styles.NeedHelp}>Precisa de ajuda?</Link>
            {/* <div className={styles.NavBarContainer}>
                <NavBar />
            </div> */}
        </div>
    )
}

export default Header;