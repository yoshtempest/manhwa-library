import Books from '@/frontend/components/Book/BookList'
import NavBar from '@/frontend/components/NavBar';
import styles from './styles.module.css'
import style from './register/styles.module.css'
import Icon from '@/frontend/components/Icon';
import ICONS from '@/assets';

export default async function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.PaddingLeft}>
        <div className={`${style.HorizontalContainer} ${styles.GapTop}`}>
          <h2 className={styles.DisponibilityBooks}> Livros disponíveis: 135</h2>
          <NavBar />
        </div>

        <div className={styles.GapTop}>
          <Books />
        </div>
      </div>

      <div className={styles.SideBar}>
        <div className={`${style.HorizontalContainer} ${styles.GapTop}`}>
          <Icon iconPath={ICONS.star.src} alt='star' width={30} height={30}></Icon>
          <h3>Em Alta</h3>
        </div>
      </div>
    </div>
  );
}
