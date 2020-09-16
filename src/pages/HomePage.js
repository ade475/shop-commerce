import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Services from '../components/HomePage/Services';
import Featured from '../components/HomePage/Featured';

export default function HomePage() {
  return (
    <>
      <Hero title='up to 60% off all fishing equipments' max='true'>
        <Link to='/products' className='main-link' style={{ margin: '2rem' }}>
          shop now
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
