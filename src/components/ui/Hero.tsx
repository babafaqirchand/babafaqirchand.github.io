// Hero.tsx
import React from 'react';
import './Hero.css';
import { HashLink } from 'react-router-hash-link';
import DownArrow from './DownArrow';

interface HeroProps {
  hero?: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ hero, title, subtitle }) => {
  if (!hero) {
    return null;
  }
  
  return (
    <div className="herocontainer">
      <img
        className="background"
        src={hero.src}
        alt={hero.alt}
      />
      <div className="text-container">
        <h1 className="text-6xl">{title}</h1>
        <h2 className="text-2xl">{subtitle}</h2>
        <div id="down-arrow">
          <HashLink to="/#biographies">
            <DownArrow />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
