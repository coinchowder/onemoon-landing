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
              <span>
                <IoRocketSharp
                  style={{
                    fontSize: 84,
                    color: "#fb6340",
                  }}
                />
              </span>
              <h1> The Roadmap</h1>
              <p>What we'll be up to in 2021</p>
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
                  color='red'
                  className='aos-init'
                  data-aos='fade-down'
                  data-aos-delay='1000'>
                  <h4>Protocol Initialized</h4>
                  <p>
                    We have successfully onboarded and confirmed a DogeCoin
                    trading pair with Bibipom. We have also successfully begun
                    integration process with WhiteBit and began legal paperwork
                    with Bitmart. Our team size has doubled and our marketing
                    campaign has begun.
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  label='Q2 2021'
                  color='red'
                  className='aos-init'
                  data-aos='fade-down'
                  data-aos-delay='150'>
                  <h4>The Initial Push</h4>
                  <p>
                    The Whitebit tokenomics integration will be completed along
                    with the completion of the SafeMoon App, Wallet, and
                    Game(s). The Bitmart integration with tokenomics will also
                    be completed in this quarter. We will begin architecting the
                    NFT Exchange as well as video-game integrations. We will be
                    integrating SafeMoon with African Markets in addition to
                    setting up a Charity drive and charity vote. We will be
                    exploring other exchanges (i.e. Binance) and begin
                    architecting the SafeMoon Exchange. We will be expanding the
                    team by 35% and establish a UK/Ireland office. We will be
                    architecting a crypto educational app as well as onboarding
                    new partners.
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  label='Q3 2021'
                  color='red'
                  className='aos-init'
                  data-aos='fade-down'
                  data-aos-delay='150'>
                  <h4>Holding the Line</h4>
                  <p>
                    We will finish our crypto educational app and begin our own
                    charity project. We will begin a community listing donation
                    raise for several exchanges (i.e. Coinbase, Binance,
                    Kraken). We will finish our NFT exchange and release our
                    first video game with SafeMoon integrated. We will be
                    expanding the team by 25% and do a community meetup (pending
                    covid restrictions). We will also be integrating with other
                    large exchanges (I.e. Binance, Mandala).
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  label='Q4 2021'
                  color='red'
                  className='aos-init'
                  data-aos='fade-down'
                  data-aos-delay='150'>
                  <h4>To the Moon!</h4>
                  <p>
                    We will finish the SafeMoon Exchange and our charity
                    project. We will finish integrations with our first African
                    market and begin the next integrations with additional
                    African markets. We will create an African based SafeMoon
                    Office and begin hiring in those markets to create jobs. We
                    will be taking donations for our next charity project and
                    begin a vote on the next project as well. We will be
                    establishing a SafeMoon Scholarship in this quarter as well.
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
