/** @format */

import React from "react";
import {
  About_img1,
  About_img2,
  About_img3,
  BscScan,
  certik,
  nomics,
  coingecko,
  coinmarket,
} from "../Images/image";

// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                         About Component
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
const About = () => {
  return (
    <>
      <section name='about' id='about' className='about-full-page mt-5'>
        {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                        about slider btn
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}
        <div className='container '>
          <div className='row'>
            <div className='col-md-6 about-btn-box '>
              <button
                className='active p-2 '
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='0'
                aria-current='true'
                aria-label='Slide 1'>
                <h4>Community Driven</h4>
                <p>
                  Community driven & fair launch. The dev team burned all of
                  their tokens and participated with everyone else.
                </p>
              </button>
              <button
                className='p-2'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='1'
                aria-label='Slide 2'>
                <h4>Automatic LP</h4>
                <p>
                  Every trade contributes towards automatically generating
                  liquidity that goes into multiple pools used by exchanges
                </p>
              </button>
              <button
                className='p-2'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='2'
                aria-label='Slide 3'>
                <h4>RFI Static Rewards</h4>
                <p>
                  Holders earn passive rewards through static reflection as they
                  watch their balance of SafeMoon grow indefinitely.
                </p>
              </button>
            </div>
            {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                           image slider 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}
            <div className='col-md-6'>
              <div
                id='carouselExampleIndicators'
                className='carousel slide carousel-fade'
                data-bs-ride='carousel'>
                <div className='carousel-inner'>
                  <div className='active carousel-item '>
                    <img src={About_img1} className='d-block w-100' alt='...' />
                  </div>
                  <div className='carousel-item'>
                    <img src={About_img2} className='d-block w-100' alt='...' />
                  </div>
                  <div className='carousel-item'>
                    <img src={About_img3} className='d-block w-100' alt='...' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                   about component External links
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}

        <div className='container-fluid External-links'>
          <div className='container text-center'>
            <div className='row'>
              <div className='col-sm'>
                <a href='https://bscscan.com/token/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3'>
                  <img src={BscScan} alt='...' width='150' />
                </a>
              </div>
              <div className='col-sm'>
                <a href='https://www.certik.org/projects/safemoon'>
                  <img src={certik} alt='...' width='150' />
                </a>
              </div>
              <div className='col-sm'>
                <a href='https://nomics.com/assets/safemoon-safemoon'>
                  <img src={nomics} alt='...' width='150' />
                </a>
              </div>
              <div className='col-sm'>
                <a href='https://coinmarketcap.com/currencies/safemoon/'>
                  <img src={coinmarket} alt='...' width='150' />
                </a>
              </div>
              <div className='col-sm'>
                <a href='https://www.coingecko.com/en/coins/safemoon'>
                  <img src={coingecko} alt='...' width='150' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
