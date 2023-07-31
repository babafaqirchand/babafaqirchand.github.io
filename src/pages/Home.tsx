import React from 'react';
import Hero from '../components/ui/Hero';
import HeroImage from '../types/hero';
import Section from '../components/ui/Section';
import Biography from '../components/ui/Biography';
import propertiesData from '../customizations/siteproperties.json';
import biographiesJSON from '../customizations/biographies.json';
import BioData from '../types/biographies';

const Home: React.FC = () => {  
  const hero: HeroImage = propertiesData.heroImage;
  const title: string = propertiesData.title;
  const subtitle: string = propertiesData.shortDescription;
  const biographies: BioData[] = biographiesJSON;
  
  return (
    <main id="skip">
      <Hero hero={hero} title={title} subtitle={subtitle} />
      {biographies.map((biog, index) => {
        return (
          <Section id={"biography_"+index} key={index}>
            <Biography img={biog.img} alt={biog.alt} bio={biog.bio}  />
          </Section>
        )
      })}
    </main>
  )
}

export default Home;
