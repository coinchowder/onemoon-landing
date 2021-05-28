/** @format */

import React from "react";
import { FaArrowRight } from "react-icons/fa";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                         Wellcome Component
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

const Wellcome = () => {
  return (
    <>
      <section className=' Wellcome-section' name='wellcome' id='wellcome'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-sm-12 aos-init'
              data-aos='fade-up'
              data-aos-offset='100'>
              <p>Wellcome to</p>
              <h1>Safemoon</h1>
              <h6>
                The SafeMoon Protocol is a community driven, fair launched DeFi
                Token. Three simple functions occur during each trade:
                Reflection, LP Acquisition, and Burn.
              </h6>
              <button className='button-live-chat'>Live Chat</button>
              <button className='button-Buy-now'>
                Buy Now <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//            live update  (price, holder, supply, market cap)
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}
        <div className='container welcome-container mt-5'>
          <div className='row'>
            <div className='col-sm-3'>
              <h5>0.000004677</h5>
              <p>Current Price</p>
            </div>
            <div className='col-sm-3'>
              <h5>2,249,688</h5>
              <p>Holders</p>
            </div>
            <div className='col-sm-3'>
              <h5>583,011,075,154,243.8</h5>
              <p>Supply</p>
            </div>
            <div className='col-sm-3'>
              <h5>$2,724,410,561.24</h5>
              <p>Market Cap</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wellcome;
