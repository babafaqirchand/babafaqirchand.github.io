// For anchor linking, see https://www.npmjs.com/package/react-router-hash-link
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/ui/Navbar.tsx'
import Footer from './components/ui/Footer.tsx'
import Home from './pages/Home.tsx'
import Legal from './pages/Legal.tsx'
import Blog from './pages/Blog.tsx'
import Books from './pages/Books.tsx'
import Satsang from './pages/Satsang.tsx'
import './global.css'

const App: React.FC = () => {
  return (
    <>
    <Router basename='/'>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Satsang" element={<Satsang />} />
          <Route path="/Legal" element={<Legal />} />
          <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;
