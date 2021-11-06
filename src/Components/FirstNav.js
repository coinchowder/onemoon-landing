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
          <span className='first-nav-brand'></span>
        </div>
        {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                              Links li
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}
        <div className='icons-ul'>
          <ul>
            <li>
              <a target="_blank" href='https://www.facebook.com/onemooncoin'>
                <FaFacebook className='icons' />
              </a>
            </li>
            <li>
              <a target="_blank" href='https://twitter.com/HarmonyOneMoon'>
                <FaTwitter className='icons' />
              </a>
            </li>
            {/* <li>
              <a href='https://www.instagram.com/safemoonhq/'>
                <FaInstagram className='icons' />
              </a>
            </li> */}
            <li>
              <a target="_blank" href='https://www.reddit.com/r/onemoon/'>
                <FaReddit className='icons' />
              </a>
            </li>
            <li>
              <a target="_blank" href='https://t.me/mochiswaponemoon'>
                <RiTelegramFill className='icons' />ٖ
              </a>
            </li>
            <li>
              <a target="_blank" href='https://discord.gg/onemoon'>
                <FaDiscord className='icons' />
              </a>
            </li>
            {/* <li>
              <a href='https://www.youtube.com/channel/UCbfKS3AEsY9QMYK7nxJjKqw'>
                <FaYoutube className='icons' />
              </a>
            </li>
            <li>
              <a href='https://twitch.tv/safemoonprotocol'>
                <FaTwitch className='icons' />
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default FirstNav;
