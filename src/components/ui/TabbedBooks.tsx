import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './TabbedBooks.css';
import BooksWidget from './BooksWidget';
import Book from '../../types/books';

interface TabbedBooksProps {
  books: Book[];
}

const TabbedBooks: React.FC<TabbedBooksProps> = ({ books }) => {
  const languages = Array.from(new Set(books.map(book => book.language)));

  return (
      <Tabs>
        <TabList>
          {languages.map(language => {
            const booksForLanguage = books.filter(book => book.language === language);
            return <Tab disabled={booksForLanguage.length === 0} key={language}>{language}</Tab>
          })}
        </TabList>
        {languages.map(language => {
          const booksForLanguage = books.filter(book => book.language === language);
          return (
            <TabPanel key={language} className="mt-6">
              {booksForLanguage.length > 0 && <BooksWidget books={booksForLanguage} />}
            </TabPanel>
          )
        })}
      </Tabs>
  );
};

export default TabbedBooks;