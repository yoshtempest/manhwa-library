import Books from '@/frontend/components/Book/BookList'
import NavBar from '@/frontend/components/NavBar';
import styles from './styles.module.css'
import style from './register/styles.module.css'

export default async function Home() {
  return (
    <div>
      <div className={`${style.HorizontalContainer} ${styles.GapTop}`}>
        <h2 className={styles.DisponibilityBooks}> Livros disponíveis: 135</h2>
        <NavBar />
      </div>
      <Books />
    </div>

  );
}
