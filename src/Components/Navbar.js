/** @format */

import React, { useState } from "react";
import { Drawer } from "antd";
import { Logo } from "../Images/image";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Navbar
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
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
              <img src={Logo} width='50' alt='logo' />
            </span>
          </Link>
          <button className='navbar-toggler' type='button' onClick={showDrawer}>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
            <span className='navbar-text'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <Link to='wellcome'>
                  <li className='nav-item'>
                    <span className='nav-link'>Home</span>
                  </li>
                </Link>

                <li className='nav-item'>
                  <a href='https://shop.safemoon.net/' className='nav-link'>
                    Shop
                  </a>
                </li>

                <li className='nav-item'>
                  <a href='https://forums.safemoon.net/' className='nav-link'>
                    Forums
                  </a>
                </li>
                <Link to='about'>
                  <li className='nav-item'>
                    <span className='nav-link'>About</span>
                  </li>
                </Link>
                <Link to='ourTeam'>
                  <li className='nav-item'>
                    <span className='nav-link'>Our Team</span>
                  </li>
                </Link>
                <li className='nav-item'>
                  <a href='https://safemoon.net/markets' className='nav-link'>
                    Markets
                    <span className='video-play-button'></span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='https://safemoon.net/buy' className='nav-link'>
                    Bay Now
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
            <p>Home</p>
          </Link>
          <a href='https://shop.safemoon.net/'>
            <p>Shop</p>
          </a>
          <a href='https://forums.safemoon.net/'>
            <p>Forums</p>
          </a>
          <Link to='about'>
            <p>About</p>
          </Link>
          <Link to='ourTeam'>
            <p>Our Team</p>
          </Link>
          <a href='https://safemoon.net/markets'>
            <p>Markets ٖ</p>
          </a>
          <a href='https://safemoon.net/buy'>
            <p>Bay Now</p>
          </a>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
