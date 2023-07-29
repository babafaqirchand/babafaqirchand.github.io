import React from 'react';
import './Home.css';
import Pitch from '../components/ui/Pitch';
import Services from '../components/ui/Services';
import BooksWidget from '../components/ui/BooksWidget';
import Book from '../components/ui/Book';

const Home: React.FC = () => {  
  return (
    <main id="skip">
        <BooksWidget />
        <Pitch />
        <Services />
        <Book />
    </main>
  )
}

export default Home;
