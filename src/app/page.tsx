import BookImage from '@/components/BookImage';
import IMAGES from '@/uploads';
import { getBooks } from './mocks/books';


export default async function Home() {
  const books = await getBooks();
  return (
    <div className="Container">
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <BookImage
            imagePath={book.image_path} // problema nessa linha, a imagem tá sendo string e não imagem
            alt={`Capa do livro ${book.title}`}
          />
        </div>
      ))}
    </div>
  );
}
