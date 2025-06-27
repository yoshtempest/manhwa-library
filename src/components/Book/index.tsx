import styles from './styles.module.css';
import BookImage from '@/components/BookImage';
import { getBooks } from '@/app/mocks/books';


async function Books() {
  const books = await getBooks();
  return (
    <div className={styles.Container}>
      {books.map((book) => (
        <div key={book.id}>
          <h2 className={styles.Title}>{book.title}</h2>
          <BookImage
            imagePath={book.image_path} // problema nessa linha
            alt={`Capa do livro ${book.title}`}
          />
          <h2>{book.note}</h2>
        </div>
      ))}
      {/* <div>
        <p> livro clicado e sua descrição,some tudo aqui e mantém apenas o livro clicado na posição em que o magic emperor está</p>
      </div> */}
    </div>
  );
}


export default Books;