import React from 'react';
import Title from '../Title';
import aboutUs from '../../images/aboutUs.jpg';

function info() {
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <img
              src={aboutUs}
              className='img-fluid img-thumbnail'
              alt='about company'
              style={{ background: 'var(--darkGrey)' }}
            />
          </div>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Title title='about us' />
            <p className='text-lead text-muted my-3'>
              Whether you are an experienced angler or are new to the sport, we
              have everything you could need to get the next big catch of the
              season.
            </p>
            <p className='text-lead text-muted my-3'>
              All of the products in our range are of the highest quality get in
              touch with a member team, fill in our online enquiry form or email
              us we are more than happy to help.
            </p>
            <button
              className='main-link'
              type='button'
              style={{ marginTop: '2rem' }}>
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default info;
