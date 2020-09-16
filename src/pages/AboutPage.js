import React from 'react';
import Info from '../components/AboutPage/Info';
import Hero from '../components/Hero';
import aboutUs from '../images/aboutUs.jpg';

export default function AboutPage() {
  return (
    <>
      <Hero img={aboutUs} />
      <Info />
    </>
  );
}
