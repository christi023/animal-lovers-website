import React from 'react';
// Components
import Carrousel from '../../Carousel/Carrousel';
import About from '../../Pages/About/About';
import Services from '../../Pages/Services/Services';
import Team from '../../Pages/Team/Team';
import Contact from '../../Pages/Contact/Contact';
export default function Home() {
  return (
    <>
      <Carrousel />
      <About />
      <Services />
      <Team />
      <Contact />
    </>
  );
}
