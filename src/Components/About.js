/** @format */

import React from "react";
import {
  About_img1,
  About_img2,
  About_img3,
  About_img4,
  BscScan,
  certik,
  nomics,
  coingecko,
  coinmarket,
  coingecko2,
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
                <h4>DAO Community Driven</h4>
                <p>
                OneMoon is a deflationary "static/reflective rewards" DAO community. It is inspired by Passive Reward Mechanics. The OneMoon DAO is an established
                resource which is ever-growing from allocations during the burning process.
                </p>
              </button>
              <button
                className='p-2'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='1'
                aria-label='Slide 2'>
                <h4>PASSIVE RELFECTION REWARDS</h4>
                <p>
                5% goes to existing holders of OneMoon as rewards. As a OneMoon StakeHolder, you earn passive income by just holding ONEMOON with 5% yields when the burn process intitiates. This builds up over time from buying and selling.
                </p>
              </button>
              <button
                className='p-2'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='2'
                aria-label='Slide 3'>
                <h4>BURNS & LOCKED LIQUIDITY</h4>
                <p>
                One of the key attributes with OneMoon is its locked liquidity.  This allows the community to have insurance that there will always be an ever growing liquidity pool for stakeholders to utilize.
                Here the breakdown of how the locked liquidity and burning fees operate:
                <br />
                <br />
                - 1.5% is used to create permanently locked liquidity between OneMoon-ONE, 1.5% is added to the DAO community fund. 
                <br />
                <br />
                - 1% is used to burn hMOCHI & OneMoon, 1.5% is added to the DAO community fund. 
                <br />
                <br />
                <span style={{fontSize: "12px"}}>* Based on DAO decentralized voting these figures can update based on community needs. </span>
                </p>
              </button>
              <button
                className='p-2'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='2'
                aria-label='Slide 3'>
                <h4>FAIR LAUNCH</h4>
                <p>
                ONEMOON was launched fairly, all tokens have been minted and added to LOCKED liquidity in a MochiSwap LP. There was no pre-sale, ICO, or any pre-distribution. All Tokens can only be swapped for in the open market.
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
              <div className='active carousel-item'>
                    {/* <img src={About_img4} className='d-block w-100 spacedown' alt='...' /> */}
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
              <div className='col-lg-4'>
                <a target="_blank" href='https://one.mochiswap.io'>
                  <img className="extimage mx-auto d-block" src={coinmarket} alt='...' width='250' />
                </a>
              </div>
              <div className='col-lg-4'>
                <a target="_blank" href='https://harmony.one'>
                  <img className="extimage mx-auto d-block" src={coingecko} alt='...' width='200' />
                </a>
              </div>
              <div className='col-lg-4'>
                <a target="_blank" href='https://www.livecoinwatch.com/price/OneMoon-ONEMOON'>
                  <img className="extimage mx-auto d-block coingecko2img" src={coingecko2} alt='...' width='200' />
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
