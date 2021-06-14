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
                  <h4>OneMOON Founded</h4>
                  <p>
                     The early concept of a frictionless yield generation asset was born, for the first time seen on Harmony ONE, ONEMOON is the original deflationary on ONE!  The Community Project
                     was started to empower Harmony ONE users the ability to enjoy a permissionless asset with locked liquidity, and frictionless staking. 
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
                    underlying base for ONEMOON.  In the coming days there would a great deal of community effort with a huge amount of newly formed
                    chat rooms, youtube, tiktok, and twitter posts!
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  label='Q2 2021'
                  color='aqua'
                  className='aos-init'
                  data-aos='fade-down'
                  data-aos-delay='150'>
                  <h4>New Exchanges, CoinGecko and CoinMarketCap Listings</h4>
                  <p>
                    The community is now starting listing donation
                    raise for several exchanges (i.e. Probit, BitMart, 
                    Kraken, Bilaxy). The next stage is to complete some missing stages
                    for full adoption of ONEMOON.  The First Listing donation has started
                    for Bilaxy.  The exchange listing will be critical as it will not only
                    give users an additional outlet for trading(something that was a concern),
                    but this exchange listing will also automatically produce CoinGecko and CoinMarketCap Listings!
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  label='Q2-Q4 2021'
                  color='aqua'
                  className='aos-init'
                  data-aos='fade-down'
                  data-aos-delay='150'>
                  <h4>The Moon and Beyound!</h4>
                  <p>
                    For the remaining part of the year the ONEMOON community will make full pushes of 
                    awareness with some critical established items such as easy ONEMOON purchasing
                    resources and listings on needed websites.  During this time period the tokenomics
                    will also be relooked it, explorered and potentially updated if there is more
                    benefical tokenomics with a community vote!
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
