import Books from '@/frontend/components/Book/BookList';
import NavBar from '@/frontend/components/NavBar';
import styles from './styles.module.css';
import Icon from '@/frontend/components/Icon';
import ICONS from '@/assets';

export default function Home() {
  return (
    <main className={styles.Container}>
      <section className={styles.Content}>
        <header className={styles.Header}>
          <h2 className={styles.DisponibilityBooks}>Livros disponíveis: 135</h2>
          <NavBar />
        </header>

        <Books />
      </section>

      <aside className={styles.Sidebar}>
        <header className={styles.SidebarHeader}>
          <Icon iconPath={ICONS.star.src} alt="star" width={30} height={30} />
          <h3>Em Alta</h3>
        </header>
      </aside>
    </main>
  );
}

