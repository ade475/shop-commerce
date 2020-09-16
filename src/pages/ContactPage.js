import React from 'react';
import Hero from '../components/Hero';
import contactUs from '../images/contactUs.jpg';
import Contact from '../components/contactPage/Contact';

export default function ContactPage() {
  return (
    <>
      <Hero img={contactUs} />
      <Contact />
    </>
  );
}
