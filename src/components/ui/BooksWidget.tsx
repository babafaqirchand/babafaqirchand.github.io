import React, { useState, useEffect } from 'react';
import booksData from '../../customizations/books.json';

export interface Book {
  title: string;
  detail_page_url: string;
  thumbnail_url: string;
}

const BooksWidget: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);
  
  return (
    <div>
      {books.map((book, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{book.title}</h2>
          <a href={book.detail_page_url}>
            <img src={book.thumbnail_url} alt={book.title} style={{ width: "100px" }} />
          </a>
          <p><a href={book.detail_page_url}>Read More</a></p>
        </div>
      ))}
    </div>
  );
};

export default BooksWidget;