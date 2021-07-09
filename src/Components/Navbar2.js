/** @format */

import React, { useState } from "react";
import { Drawer } from "antd";
import { Logo } from "../Images/image";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Navbar
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
const Navbar2 = () => {
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
          <Link to='home'>
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
                <li className='nav-item'>
                  <a href='https://onemoon.mochiswap.io/' className='nav-link'>
                    HOME
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
          <a href='https://onemoon.mochiswap.io'>
            <p>HOME</p>
          </a>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar2;
