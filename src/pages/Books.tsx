import React from 'react';
import Section from '../components/ui/Section';
import BooksWidget from '../components/ui/BooksWidget';

const Books: React.FC = () => {  
  return (
    <main id="skip">
      <Section id="books">
        <BooksWidget />
      </Section>
    </main>
  )
}

export default Books;
