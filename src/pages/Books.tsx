import React from 'react';
import Section from '../components/ui/Section';
import TabbedBooks from '../components/ui/TabbedBooks';
import booksData from '../customizations/books.json';
import Book from '../types/books';

const Books: React.FC = () => {  
  const authors = Array.from(new Set(booksData.map(book => book.author)));

  return (
    <main id="skip">
      {authors.map(author => {
        const authorBooks: Book[] = booksData.filter(book => book.author === author);

        return (
          <Section id={`${author.replace(/\s/g, '-')}-books`} key={author}>
            <TabbedBooks books={authorBooks} />
          </Section>
        );
      })}
    </main>
  )
}

export default Books;
