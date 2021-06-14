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
                <h4>Community Driven PASSIVE REWARDS</h4>
                <p>
                ONEMOON is a deflationary "static/reflective rewards" defi experiment inspired by Passive Reward Mechanics.
                </p>
              </button>
              <button
                className='p-2'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='1'
                aria-label='Slide 2'>
                <h4>FEES</h4>
                <p>
                5% goes to existing holders of ONEMOON as rewards. 2.5% is used to create permanently locked liquidity between ONEMOON-ONE using MochiSwap LPs.
                </p>
              </button>
              <button
                className='p-2'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='2'
                aria-label='Slide 3'>
                <h4>BURNS</h4>
                <p>
                1.25% is used to burn ONEMOON, 1.25% is used to burn HMOCHI.
                </p>
              </button>
              <button
                className='p-2'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='2'
                aria-label='Slide 3'>
                <h4>FAIR LAUNCH</h4>
                <p>
                ONEMOON is a Community Project. It was launched fairly, all tokens have been minted and added to LOCKED liquidity in a MochiSwap LP. There was no presale, ICO, or any pre-distribution. All Tokens can only be swapped for in the open market.
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
              {/* <div className='col-sm'>
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
              </div> */}
              <div className='col-sm'>
                <a href='https://harmony.one'>
                  <img src={coinmarket} alt='...' width='250' />
                </a>
              </div>
              <div className='col-sm'>
                <a href='https://one.mochiswap.io'>
                  <img src={coingecko} alt='...' width='250' />
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
