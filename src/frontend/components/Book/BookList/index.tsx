"use client";

import styles from './styles.module.css';
import BookImage from '@/frontend/components/Book/BookImage';
import BookRating from '@/frontend/components/Book/BookNotes';
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

    const toggleFavorite = (id: string) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === id
                    ? { ...book, is_favorite: !book.is_favorite }
                    : book
            )
        );
    };
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
            <p className={styles.Note}>{book.note}</p>
          </div>
          
          <p className={styles.Favorite}
            onClick={() => toggleFavorite(book.id)}>
            {book.is_favorite ? '❤️ Favoritado' : '🤍 Favoritar'}
          </p>
        </div>
      ))}
    </div>
  );
}


export default Books;