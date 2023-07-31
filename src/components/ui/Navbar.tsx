import React from 'react';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';

const Navbar: React.FC = () => {

  return (
    <nav id="nav">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="navbarcontainer">
        <HashLink to="/#" className="nav-link focusable">
          Home
        </HashLink>
        <HashLink to="/Blog#" className="nav-link focusable">
          Blog
        </HashLink>
        <HashLink to="/Books#" className="nav-link focusable">
          Books
        </HashLink>
      </div>
    </nav>
  );
}

export default Navbar;