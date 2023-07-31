//Section.tsx
import React, { useEffect, useState } from 'react';
import Header from './Header';
import headerData from '../../customizations/headers.json';
import HeaderData from '../../types/header';
import './Section.css';

interface SectionProps {
  id: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  const [header, setHeader] = useState<HeaderData | null>(null);

  useEffect(() => {
    const matchedHeader = headerData.find((data: HeaderData) => data.id === id);
    setHeader(matchedHeader || null);
  }, [id]);

  return (
    <section id={id}>
      <div className="sectioncontainer">
        {header && <Header title={header.title} subtitle={header.subtitle} />}
        {children}
      </div>
    </section>
  );
};

export default Section;
