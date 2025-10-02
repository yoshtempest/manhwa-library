"use client";

import styles from './styles.module.css';
import BookImage from '@/frontend/components/Book/BookImage';
import BookStars from '@/frontend/components/Book/BookStars';
import { getBooks } from '@/mocks/books';
import React, { useState } from 'react';


async function fetchBooks() {
    return await getBooks();
}

function Books() {
  const [books, setBooks] = useState<any[]>([]);

    React.useEffect(() => {
        fetchBooks().then(setBooks);
    }, []);

    // const toggleFavorite = (id: string) => {
    //     setBooks((prevBooks) =>
    //         prevBooks.map((book) =>
    //             book.id === id
    //                 ? { ...book, is_favorite: !book.is_favorite }
    //                 : book
    //         )
    //     );
    // };
  return (
    <div className={styles.Container}>
      {books.map((book) => (
        <div key={book.id} className={styles.BookCard}>
          <BookImage
            imagePath={book.image_path ?? ''} // fallback to empty string if undefined
            alt={`Capa do livro ${book.title}`}
          />
          <h4 className={styles.Title}>{book.title}</h4>
          <div className={styles.NotesContainer}>
            <BookStars rating={book.note}/>
            <p className={styles.Note}>{book.note}</p>
          </div>
          
          {/* <p className={styles.Favorite}
            onClick={() => toggleFavorite(book.id)}>
            {book.is_favorite ? '❤️ Favoritado' : '🤍 Favoritar'}
          </p> */}
        </div>
      ))}
    </div>
  );
}


export default Books;