/** @format */

import React from "react";
import { IoRocketSharp } from "react-icons/io5";
import {
  Newsweek_logo,
  Wsj,
  Bloomberg_logo,
  benzinga,
  express,
} from "../Images/image";
import { FaDiscord, FaTwitter, FaLinkedin } from "react-icons/fa";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                         our team Component
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

const Team = () => {
  return (
    <>
      {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                            heading
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}
      <section
        className='container-fluid outTeam pb-5'
        name='ourTeam'
        id='ourTeam'>
        <div className='container'>
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
              <h1> Our Team</h1>
              <p>Our Core Team Members</p>
            </div>
          </div>

          {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                           team  card
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}
          <div className='row '>
            <div className=' col-sm-4  pt-5 '>
              <div
                className='card team-card aos-init shadow-sm'
                data-aos='fade-down'
                data-aos-offset='100'
                data-aos-delay='0'>
                <p id='member-status'>COO</p>
                <img src={express} alt='...' width='100%' />
                <div className='card-body'>
                  <h6>John Karony</h6>
                  <p className='text-muted'>Capt Hodl</p>
                </div>
                <div className='text-center pb-3'>
                  <a href='https://discord.com/users/233043453645160448'>
                    <FaDiscord className='card-icons' />
                  </a>
                  <a href='https://twitter.com/CptHodl'>
                    <FaTwitter className='card-icons' />
                  </a>
                  <a href='https://www.linkedin.com/in/john-karony'>
                    <FaLinkedin className='card-icons' />
                  </a>
                </div>
              </div>
            </div>

            <div className=' col-sm-4  pt-5'>
              <div
                className='card team-card aos-init shadow-sm'
                data-aos='fade-down'
                data-aos-offset='100'
                data-aos-delay='0'>
                <p id='member-status'>CTO</p>

                <img src={express} alt='...' width='100%' />
                <div className='card-body'>
                  <h6>Thomas Smith</h6>
                  <p className='text-muted'>Papa</p>
                </div>
                <div className='text-center pb-3'>
                  <a href='https://discord.com/users/164792566946988033'>
                    <FaDiscord className='card-icons' />
                  </a>
                  <a href='https://twitter.com/papacthulu'>
                    <FaTwitter className='card-icons' />
                  </a>
                  <a href='https://www.linkedin.com/in/thomoose'>
                    <FaLinkedin className='card-icons' />
                  </a>
                </div>
              </div>
            </div>

            <div className=' col-sm-4  pt-5'>
              <div
                className='card team-card aos-init shadow-sm'
                data-aos='fade-down'
                data-aos-offset='100'
                data-aos-delay='0'>
                <p id='member-status'>DOSE</p>

                <img src={express} alt='...' width='100%' />
                <div className='card-body'>
                  <h6>Hank Wyatt</h6>
                  <p className='text-muted'>It's a cat, ok?</p>
                </div>
                <div className='text-center pb-3'>
                  <a href='https://discord.com/users/191998680696356864'>
                    <FaDiscord className='card-icons' />
                  </a>
                  <a href='https://twitter.com/SafemoonHank'>
                    <FaTwitter className='card-icons' />
                  </a>
                  <a href='https://www.linkedin.com/in/henrywyatt'>
                    <FaLinkedin className='card-icons' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='row  pb-5'>
            <div className=' col-sm-4  pt-3'>
              <div
                className='card team-card aos-init shadow-sm'
                data-aos='fade-down'
                data-aos-offset='100'
                data-aos-delay='0'>
                <p id='member-status'>COO</p>
                <img src={express} alt='...' width='100%' />
                <div className='card-body'>
                  <h6>Jack Haine</h6>
                  <p className='text-muted'>Jack</p>
                </div>
                <div className='text-center pb-3'>
                  <a href='https://twitter.com/jackhainesuk'>
                    <FaTwitter className='card-icons' />
                  </a>
                  <a href='https://www.linkedin.com/in/jackhaines'>
                    <FaLinkedin className='card-icons' />
                  </a>
                </div>
              </div>
            </div>

            <div className=' col-sm-4  pt-3'>
              <div
                className='card team-card aos-init shadow-sm'
                data-aos='fade-down'
                data-aos-offset='100'
                data-aos-delay='0'>
                <p id='member-status'>CM</p>
                <img src={express} alt='...' width='100%' />
                <div className='card-body'>
                  <h6>Trevor Church</h6>
                  <p className='text-muted'>Ragnar Safemoonson</p>
                </div>
                <div className='text-center pb-3'>
                  <a href='https://discord.com/users/95581064222736384'>
                    <FaDiscord className='card-icons' />
                  </a>
                  <a href='https://twitter.com/RSafemoonson'>
                    <FaTwitter className='card-icons' />
                  </a>
                  <a href='https://www.linkedin.com/in/ragnarsafemoonson'>
                    <FaLinkedin className='card-icons' />
                  </a>
                </div>
              </div>
            </div>

            <div className=' col-sm-4  pt-3'>
              <div
                className='card team-card aos-init shadow-sm'
                data-aos='fade-down'
                data-aos-offset='100'
                data-aos-delay='0'>
                <p id='member-status'>WEB DEV</p>
                <img src={express} alt='...' width='100%' />
                <div className='card-body'>
                  <h6>Jacob Smith</h6>
                  <p className='text-muted'>OG KingFox</p>
                </div>
                <div className='text-center pb-3'>
                  <a href='https://discord.com/users/150486701695827968'>
                    <FaDiscord className='card-icons' />
                  </a>
                  <a href='https://twitter.com/OG_KingFox'>
                    <FaTwitter className='card-icons' />
                  </a>
                  <a href='https://www.linkedin.com/in/jacob-smith-9a0462122'>
                    <FaLinkedin className='card-icons' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                     team component external links
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}

      <div className='container-fluid External_links '>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-sm'>
              <a href='https://www.newsweek.com/safemoon-ama-unveils-simplex-partnership-community-testing-plans-1589987'>
                <img src={Newsweek_logo} alt='...' width='150' />
              </a>
            </div>
            <div className='col-sm'>
              <a href='https://www.wsj.com/articles/dogecoins-12-000-rally-spurs-hunt-for-next-crypto-winner-11620293371'>
                <img src={Wsj} alt='...' width='150' />
              </a>
            </div>
            <div className='col-sm'>
              <a href='https://safemoon.net/'>
                <img src={Bloomberg_logo} alt='...' width='150' />
              </a>
            </div>
            <div className='col-sm'>
              <a href='https://www.benzinga.com/markets/cryptocurrency/21/05/20997817/safemoon-is-heating-up-looks-ready-to-break-out-again'>
                <img src={benzinga} alt='...' width='150' />
              </a>
            </div>
            <div className='col-sm'>
              <a href='https://www.express.co.uk/finance/city/1433562/safemoon-price-new-cryptocurrency-all-time-high-value-after-price-rise-evg'>
                <img src={express} alt='...' width='150' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
