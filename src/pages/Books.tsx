import React from 'react';
import Section from '../components/ui/Section';
import TabbedBooks from '../components/ui/TabbedBooks';
import booksData from '../customizations/books.json';
import Book from '../types/books';

const Books: React.FC = () => {  
  const mainAuthors = ["Baba Faqir Chand", "Maharishi Shiv Brat Lal Verman"];
  const copiedBooksData = JSON.parse(JSON.stringify(booksData));

  const authorSections = mainAuthors.map(author => {
    const authorBooks: Book[] = booksData.filter(book => book.author === author);

    // remove main authors' books from the copiedBooksData
    authorBooks.forEach(book => {
      const index = copiedBooksData.findIndex(
        (copiedBook: Book) => copiedBook.title === book.title && copiedBook.author === book.author
      );
      if(index > -1){
        copiedBooksData.splice(index, 1);
      }
    });

    return (
      <Section id={`${author.replace(/\s/g, '-')}-books`} key={author}>
        <TabbedBooks books={authorBooks} />
      </Section>
    );
  });

  // remaining copiedBooksData is considered as Other Authors books
  const otherAuthorsBooks: Book[] = copiedBooksData;

  return (
    <main id="skip">
      {authorSections}
      <Section id="Other-Authors-books">
        <TabbedBooks books={otherAuthorsBooks} />
      </Section>
    </main>
  );
};

export default Books;
