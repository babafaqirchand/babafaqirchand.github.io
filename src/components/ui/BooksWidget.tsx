import React from 'react';
import Book from '../../types/books';

interface BooksWidgetProps {
  books: Book[];
}

const BooksWidget: React.FC<BooksWidgetProps> = ({books}) => {
  
  return (
    <div>
      {books.map((book, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <a href={book.detail_page_url}>
            <img src={book.cover_url} alt={book.title} style={{ width: "200px", float: "left", marginRight: "20px" }} />
          </a>
          {book.title && <p><strong>Title:</strong> {book.title}</p>}
          {book.author && <p><strong>Author:</strong> {book.author}</p>}
          {book.description && <p><strong>Description:</strong> {book.description}</p>}
          {book.pdf_url && 
          <a href={book.pdf_url}>
            <button>Download</button>
          </a>
          }
          <div style={{ clear: "both" }}></div>
        </div>
      ))}
    </div>
  );
};

export default BooksWidget;
