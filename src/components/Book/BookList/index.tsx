import styles from './styles.module.css';
import BookImage from '@/components/Book/BookImage';
import BookRating from '@/components/Book/BookNotes';
import { getBooks } from '@/app/mocks/books';


async function Books() {
  const books = await getBooks();
  return (
    <div className={styles.Container}>
      {books.map((book) => (
        <div key={book.id}>
          <h2 className={styles.Title}>{book.title}</h2>
          <BookImage
            imagePath={book.image_path ?? ''} // fallback to empty string if undefined
            alt={`Capa do livro ${book.title}`}
          />
          <div className={styles.NotesContainer}>
            <BookRating averageRating={book.note}/>
            <h2 className={styles.Note}>{book.note}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Books;