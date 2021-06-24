/** @format */

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import line from "../Images/line1.png";
// import icon1 from "../Images/icon1.png";
// import icon1 from "../Images/icon2.png";
// import icon1 from "../Images/icon3.png";
// import icon1 from "../Images/icon4.png";
import { IoRocketSharp } from "react-icons/io5";
import { IoAnalyticsOutline, IoLockClosedSharp } from "react-icons/io5";
import { IoBarcodeOutline } from "react-icons/io5";
import { IoBonfireSharp } from "react-icons/io5";
import { IoCashOutline } from "react-icons/io5";
import { ChainId, Token, Fetcher, Route, TokenAmount } from '@mochiswap/hsdk'
import BigNumber from 'bignumber.js'

// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                         Wellcome Component
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

// const { ethers } = require('ethers')
// const provider = new ethers.providers.JsonRpcProvider('https://api.harmony.one', {
//   chainId: 1666600000,
//   name: 'harmony-mainnet'
// });

class Wellcome extends React.Component  {

  constructor(props)  {
    super(props);
    this.state = {containerDim: 0, containerDim2: 0};
  }

  async componentWillMount() {
    const tokens = {
      'ONEMOON': '0xCB35e4945c7F463c5CCBE3BF9f0389ab9321248F',
      'USDC': '0x985458E523dB3d53125813eD68c274899e9DfAb4',
      'hMOCHI': '0x0dD740Db89B9fDA3Baadf7396DdAD702b6E8D6f5',
      'ZERO_ADDR': '0x0000000000000000000000000000000000000000',
      'BURN_ADDR': '0x0000000000000000000000000000000000000001',
      'WONE': '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a'
    }
    const { ethers } = require('ethers')
    const harmonyProvider = new ethers.providers.JsonRpcProvider('https://api.harmony.one', {
      chainId: 1666600000,
      name: 'harmony-mainnet'
    });
    const provider = new ethers.providers.JsonRpcProvider('https://api.harmony.one', {
  chainId: 1666600000,
  name: 'harmony-mainnet'
});
    const USDC = new Token(ChainId.HARMONY_MAINNET, tokens.USDC, 6)
    const ONE = new Token(ChainId.HARMONY_MAINNET, tokens.WONE, 6)
    const ONEMOON = new Token(ChainId.HARMONY_MAINNET, tokens.ONEMOON, 9, 'ONEMOON', 'OneMoon Token')

    const targetPair = await Fetcher.fetchPairData(ONEMOON, USDC, harmonyProvider)
    const targetPair2 = await Fetcher.fetchPairData(ONEMOON, ONE, harmonyProvider)
    // const targetPair2 = await Fetcher.fetchTokenData(ChainId.HARMONY_MAINNET, '0xCB35e4945c7F463c5CCBE3BF9f0389ab9321248F', harmonyProvider)

    const balances = await harmonyProvider.getBalance("0xCB35e4945c7F463c5CCBE3BF9f0389ab9321248F")
    // const balances2 = await TokenAmount("0xCB35e4945c7F463c5CCBE3BF9f0389ab9321248F")
    // const route2 = new Route([targetPair], ONEMOON, ONE)
    // const result2 = await route2.balanceOf('0xCB35e4945c7F463c5CCBE3BF9f0389ab9321248F')
    // const balance = await Route.balanceOf(ChainId.HARMONY_MAINNET, '0xCB35e4945c7F463c5CCBE3BF9f0389ab9321248F', '0x0000000000000000000000000000000000000001')    
    // const route2 = new Route([targetPair2], ONE, ONE)
    // console.log(balances2)
    const supply = BigNumber(1000000000000000) - BigNumber(580898963556711)

    const route = new Route([targetPair], USDC, USDC)
    const result = await route.midPrice.invert().toSignificant(6)  
    this.setState({
      containerDim: result,
      containerDim2: supply
    });
  }
  
  render() {
    return (
      <>
        <section className=' Wellcome-section justify-content-center' name='wellcome' id='wellcome'>
          <div className='container'>
            <div className='row mr-auto ml-auto
                              text-center'>
              <div
                className='col-sm-12 aos-init mr-auto ml-auto
                text-center'
                data-aos='fade-up'
                data-aos-offset='100'>
                <p></p>
                <div className="row col-sm-12">
                  <h1 className="justify-content-center topone2"><span className="topone">ONE</span>MOON</h1>
                </div>
                <h2 className="justify-content-center">The <span style={{ color: "#fb6340" }}>ORIGINAL</span> and FIRST Harmony ONE Community-Driven Deflationary Project.</h2>
                <a target="_blank" href="https://one.mochiswap.io/#/swap?outputCurrency=0xCB35e4945c7F463c5CCBE3BF9f0389ab9321248F"className="justify-content-center">0xcb35e4945c7f463c5ccbe3bf9f0389ab9321248f</a>
                {/* <p className="justify-content-center col-md-7 col-offset-4"> <img src={line} className='col-md-7 col-offset-4 text-center' alt='...' /></p> */}
                <div className="col-12 hidden-sm">
                  <img src={line} className='hidden-sm img-fluid w-800 lineimage' alt='...' />
                </div>
                <a target="_blank" href="https://one.mochiswap.io/#/swap?outputCurrency=0xCB35e4945c7F463c5CCBE3BF9f0389ab9321248F" className='btn button button-live-chat'>GET ONEMOON NOW!</a>
                {/* <button className='button-Buy-now'>
                  TRADE NOW <FaArrowRight />
                </button> */}
              </div>
            </div>
          </div>
  
          {/* 
  // ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
  //            live update  (price, holder, supply, market cap)
  // ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
  */}
          <div className='container welcome-container mt-5 livestats'>
            <div className='row p-5 pr-5 pl-5'>
              <div className='col-md-2 offset-md-1'>
                <IoAnalyticsOutline
                  style={{
                    fontSize: "4.5em",
                    color: "#fb6340",
                    marginBottom: '15px'
                  }}
                />
                <p className="livestatsh">{this.state.containerDim == 0 ? "Loading" : (`$${this.state.containerDim * 1000000}`).toLocaleString("en-US",{ maximumFractionDigits: 2 })}</p>
                <p className="livestatsh2">1 Million ONEMOONS</p>
              </div>
              <div className='col-md-2'>
                <IoLockClosedSharp
                  style={{
                    fontSize: "4.5em",
                    color: "#fb6340",
                    marginBottom: '15px'
                  }}
                />
                <p className="livestatsh">1,102,619</p>
                <p className="livestatsh2">ONE locked forever</p>
              </div>
              <div className='col-md-2'>
              <IoBarcodeOutline
                  style={{
                    fontSize: "4.5em",
                    color: "#fb6340",
                    marginBottom: '15px'
                  }}
                />
                <p className="livestatsh">{this.state.containerDim2 == 0 ? "Loading" : this.state.containerDim2.toLocaleString("en-US",{ maximumSignificantDigits: 7 })}</p>
                <p className="livestatsh2">Max Supply Ever</p>
              </div>
              <div className='col-md-2'>
              <IoBonfireSharp
                  style={{
                    fontSize: "4.5em",
                    color: "#fb6340",
                    marginBottom: '15px'
                  }}
                />
                <p className="livestatsh text-sm-left">578,509,166,879,332</p>
                <p className="livestatsh2">Burned Forever</p>
              </div>
              <div className='col-md-2'>
              <IoCashOutline
                  style={{
                    fontSize: "4.5em",
                    color: "#fb6340",
                    marginBottom: '15px'
                  }}
                />
                <p className="livestatsh">{this.state.containerDim == 0 ? "Loading" : `$${(this.state.containerDim * this.state.containerDim2).toLocaleString("en-US",{ maximumSignificantDigits: 7 })}`}</p>
                <p className="livestatsh2">Market Cap</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Wellcome;
