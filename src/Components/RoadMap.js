/** @format */

import React, { useRef, useEffect } from "react";
import { IoRocketSharp } from "react-icons/io5";
import { Timeline } from "antd";
import { spaceman } from "../Images/image";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                         RoadMap Component
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

const RoadMap = () => {
  const img = useRef(null);
  useEffect(() => {
    img.current.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(0, 40px)" },
        { transform: "translate(0, 0)" },
      ],
      {
        duration: 4000,
        iterations: Infinity,
        yoyo: Infinity,
        animationTimingFunction: "linear",
        playbackRate: -30,
      },
    );
  });
  return (
    <>
      <div className='container-fluid roadMap'>
        <div className='container'>
          {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                            heading
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}
          <div className='row text-center'>
            <div className='col-sm-12 '>
              {/* <span>
                <IoRocketSharp
                  style={{
                    fontSize: 84,
                    color: "aqua",
                  }}
                />
              </span> */}
              <h1 style={{fontSize: 80, color: "rgb(118, 69, 217)"}}> Roadmap</h1>
              <p>For the rest of 2021 we have some big plans....</p>
            </div>
          </div>
          {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                             timeline
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}
          <div className='row mt-5 text-center '>
            <div className=' col-sm-2  pt-5'>
              <img src={spaceman} alt='...'  ref={img} />
            </div>
            <div className='col-sm-10 '>
              <Timeline mode='left' className='timeLine'>
                <Timeline.Item
                  label='Q1 2021'
                  color='aqua'
                  className='aos-init'
                  data-aos='fade-down'
                  data-aos-delay='1000'>
                  <h4>ONEMOON Community Founded</h4>
                  <p>
                     The early concept of a frictionless yield generation asset was born, for the first time seen on Harmony ONE, ONEMOON is the original deflationary on Harmony!  The Community Project
                     was started to empower Harmony ONE users to enjoy a permissionless asset, locked liquidity, and frictionless staking yield generation. 
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  label='Q1 2021'
                  color='aqua'
                  className='aos-init'
                  data-aos='fade-down'
                  data-aos-delay='150'>
                  <h4>Successful Launch</h4>
                  <p>
                    ONEMOON had an explosive Launch! In the first 48 hours there was over 200K ONE/ONEMOON in new locked liquidity forming the 
                    underlying liquidity for ONEMOON and it continues to grow daily. The community effort was incredible with a burst of new ONEMOON
                    chat rooms, youtube & tiktok videos, and twitter posts!
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  label='Q2 2021'
                  color='aqua'
                  className='aos-init'
                  data-aos='fade-down'
                  data-aos-delay='150'>
                  <h4>New Exchange, CoinGecko and CoinMarketCap Listings</h4>
                  <p>
                    The path going forward for ONEMOON will be to complete some needed items and to solve some issues
                    that the community had voiced. The items included an easier route for new users to trade ONEMOON,
                    along with various listings on sites like CoinGecko and CoinmMarketCap.  Since ONEMOON is a Harmony HRC20
                    token it had more obstacles then ERC20/BEP20 tokens.  ONEMOON has been accepted by Bilaxy! The Listing
                    donation is now live! This listing will solve the above issues. <a className="onemooncolor" target="_blank" href="https://onemoon.mochiswap.io/fundraiser">BILXAY DONATION PAGE</a>
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  label='Q2-Q4 2021'
                  color='aqua'
                  className='aos-init'
                  data-aos='fade-down'
                  data-aos-delay='150'>
                  <h4>The Moon and Beyond!</h4>
                  <p>
                    The ONEMOON community for the remainder of the year Q2-Q4 will focus on awareness for the
                    ONEMOON project. More Detailed items will be coming out shortly! The ONEMOON community also has some partnerships in the works
                    once the above items are updated! The Tokennomics of ONEMOON will also be looked at it for any improvements that can benefit it's current community stakeholders!
                  </p>
                </Timeline.Item>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RoadMap;
