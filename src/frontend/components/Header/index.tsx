import styles from './styles.module.css';
import Burger from './Burger';
import { IMAGES } from '@/uploads';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return(
        <header className={styles.Container}>
            <div className={styles.BurgerContainer}>
                <Burger />
            </div>
            <div className={styles.LogoContainer}>
                <Image className={styles.Logo} src={IMAGES.logo} alt={'Logo'}/>
                <p className={styles.Title}>Aether Library</p>
            </div>
            <Link href='/needhelp' className={styles.NeedHelp}>Precisa de ajuda?</Link>
        </header>
    )
}

export default Header;