/** @format */

import React from "react";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                         Footer Component
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

const Footer = () => {
  return (
    <>
      <div className='container pt-5 footer'>
        <div className='row '>
          <div className='col-sm-6'>
            <h5>Safemoon Protocol</h5>
            <p>
              The SafeMoon Protocol is a community driven, fair launched DeFi
              Token. Three simple functions occur during each trade: Reflection,
              LP Acquisition, & Burn.
            </p>
          </div>
          <div className='col-sm-2'>
            <ul>
              <li>
                <h6>Community</h6>
              </li>
              <li>
                <a href='https://forums.safemoon.net/'>Forums</a>
              </li>
              <li>
                <a href='https://discord.gg/safemoon'>Discord</a>
              </li>
              <li>
                <a href='https://www.reddit.com/r/SafeMoon/'>Reddit</a>
              </li>
              <li>
                <a href='https://t.me/safemoonv2'>Telegram</a>
              </li>
            </ul>
          </div>
          <div className='col-sm-2'>
            <ul>
              <li>
                <h6>Social</h6>
              </li>
              <li>
                <a href='https://facebook.com/safemoonprotocol'>Facebook</a>
              </li>
              <li>
                <a href='https://twitter.com/safemoon'>Twitter</a>
              </li>
              <li>
                <a href='https://www.instagram.com/safemoonhq/'>Instagram</a>
              </li>
              <li>
                <a href='https://www.linkedin.com/company/safemoon/'>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className='col-sm-2'>
            <ul>
              <li>
                <h6>Resources</h6>
              </li>
              <li>
                <a href='https://safemoon.net/branding'>Branding</a>
              </li>
              <li>
                <a href='https://safemoon.net/wallet'>Wallet Tracker</a>
              </li>
              <li>
                <a href='https://github.com/safemoonprotocol/Safemoon.sol'>
                  Contract
                </a>
              </li>
              <li>
                <a href='https://safemoon.net/whitepaper'>White paper</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className='mt-5 bg-light mb-5' />
        <div className='row pb-3'>
          <div className='col-sm-8'>
            <h6>Copyright © 2021 Safemoon LLC. | All Rights Reserved</h6>
          </div>
          <div className='col-sm-4'>
            <a href='https://safemoon.net/terms'>Terms of service</a>
            <a href='https://safemoon.net/privacy' className='p-2'>
              Privacy policy
            </a>
            <a href='https://safemoon.net/privacy'>Cookie policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
