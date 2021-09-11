/** @format */

import React, { useState } from "react";
import { Drawer } from "antd";
import { Logo } from "../Images/image";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Navbar
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

function imageClick(url) {
  window.location = url;
}

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  // show drawer
  const showDrawer = () => {
    setVisible(true);
  };
  // close drawer
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark  sec-nav sticky-top  shadow-sm '>
        <div className='container'>
          <Link to='wellcome'>
            <span className='navbar-brand'>
              <a href="https://onemoon.mochiswap.io">
                <img src={Logo} width='50' alt='logo' />
              </a>
            </span>
          </Link>
          <button className='navbar-toggler' type='button' onClick={showDrawer}>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
            <span className='navbar-text'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                {/* <Link to='wellcome'>
                  <li className='nav-item'>
                    <span className='nav-link'>HOME</span>
                  </li>
                </Link> 
                /*<li className='nav-item'>
                  <a target="_blank" href='/fundraiser' className='nav-link'>
                    FUNDRAISER
                    <span className='video-play-button'></span>
                  </a>
                </li>*/}
                <li className='nav-item'>
                  <a target="_blank" href='https://t.me/mochiswaponemoon' className='nav-link'>
                    LIVE CHAT
                    <span className='video-play-button'></span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a target="_blank" href='https://onemoon.watch' className='nav-link'>
                    LIVE CHART
                  </a>
                </li>
                <li className='nav-item'>
                  <a target="_blank" href='https://one.mochiswap.io' className='nav-link'>
                  TRADE
                  </a>
                </li>
                <Link to='roadMap'>
                  <li className='nav-item'>
                    <span className='nav-link'>ROADMAP</span>
                  </li>
                </Link>
                <li className='nav-item'>
                  <a target="_blank" href='onemoon.pdf' className='nav-link'>
                    BLUE PAPER
                    <span className='video-play-button2'></span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a target="_blank" href='https://onemoon.mochiswap.io/whitepaper.html' className='nav-link'>
                    WHITE PAPER
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
      {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                         Drawer small screen
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}
      <Drawer
        placement='left'
        closable={false}
        drawerStyle={{
          backgroundColor: "#292e38",
          textAlign: "center",
          paddingTop: 30,
        }}
        onClose={onClose}
        visible={visible}>
        <div className='drawer'>
          <button onClick={onClose} className='close-btn'>
            <AiOutlineClose /> Close
          </button>
          <Link to='wellcome'>
            <p>HOME</p>
          </Link>
          <a href='https://onemoon.mochiswap.io'>
            <p>ABOUT</p>
          </a>
          <Link to='about'>
            <p>HOW TO TRADE</p>
          </Link>
          <Link to='ourTeam'>
            <p>CHARTS</p>
          </Link>
          <Link to='roadMap'>
            <p>ROADMAP</p>
          </Link>
          <a href='https://onemoon.mochiswap.io'>
            <p>WHITEPAPER</p>
          </a>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
