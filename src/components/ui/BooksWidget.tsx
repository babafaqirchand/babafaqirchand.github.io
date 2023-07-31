import React, { useState, useEffect } from 'react';
import booksData from '../../customizations/books.json';
import Book from '../../types/books';

const BooksWidget: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);
  
  return (
    <div>
      {books.map((book, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <a href={book.detail_page_url}>
            <img src={book.cover_url} alt={book.title} style={{ width: "200px", float: "left", marginRight: "20px" }} />
          </a>
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <a href={book.pdf_url}>
            <button>Download</button>
          </a>
          <div style={{ clear: "both" }}></div>
        </div>
      ))}
    </div>
  );
};

export default BooksWidget;
