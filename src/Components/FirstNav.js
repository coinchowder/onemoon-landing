/** @format */

import React from "react";

import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaReddit,
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaTwitch,
} from "react-icons/fa";
import { RiTelegramFill } from "react-icons/ri";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                       First Nav social links
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
const FirstNav = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark first-nav '>
        <div>
          <span className='first-nav-brand'>The official home of Safemoon</span>
        </div>
        {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                              Links li
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}
        <div className='icons-ul'>
          <ul>
            <li>
              <a href='https://facebook.com/safemoonprotocol'>
                <FaFacebook className='icons' />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/safemoon'>
                <FaTwitter className='icons' />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/safemoonhq/'>
                <FaInstagram className='icons' />
              </a>
            </li>
            <li>
              <a href='https://github.com/Safemoon-Protocol'>
                <FaGithub className='icons' />
              </a>
            </li>
            <li>
              <a href='https://www.reddit.com/r/SafeMoon/'>
                <FaReddit className='icons' />
              </a>
            </li>
            <li>
              <a href='https://t.me/safemoonv2'>
                <RiTelegramFill className='icons' />ٖ
              </a>
            </li>
            <li>
              <a href='https://discord.gg/safemoon'>
                <FaDiscord className='icons' />
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/channel/UCbfKS3AEsY9QMYK7nxJjKqw'>
                <FaYoutube className='icons' />
              </a>
            </li>
            <li>
              <a href='https://twitch.tv/safemoonprotocol'>
                <FaTwitch className='icons' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default FirstNav;
