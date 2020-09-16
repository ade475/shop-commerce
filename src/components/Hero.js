import React from 'react';
import styled from 'styled-components';
import mainBcg from '../images/imagetropics.jpeg';

export default function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className='banner'>
        <h1 className='title'>{title}</h1>
        <h3 className='sub-title text-capitalize'>
          great value at discounted prices
        </h3>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.max ? '100vh' : '60vh')};
  color: white;
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${(props) => props.img}) center/cover no-repeat;

  .title {
    padding-top: 2rem;
    font-size: 2.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
`;

Hero.defaultProps = {
  img: mainBcg,
};
