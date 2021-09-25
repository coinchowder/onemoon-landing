/** @format */

import React from "react";
import FirstNav from "../../Components/FirstNav";
import Navbar from "../../Components/Navbar2";
import image1 from "../../Images/locked.png";
import image2 from "../../Images/static1.png";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                           Home page
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
function WhitePaper() {
  return (
    <>
      {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                           components call
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
    */}
      <FirstNav />
      <Navbar />
      <div className="container py-2 bg-light">
        <div className="p-5">
        <h1>Introduction</h1>
        <p>ONEMOON is the first deflationary, passive yield generation token on the Harmony ONE network. At inception, the core premise of ONEMOON was to create a frictionless static yield generation asset that offers stakeholders a new type of passive rewards which does not require the asset to be staked or used to provide liquidity. To partake in DeFi yields, all you have to do is hold ONEMOON.


There is an abundance of new users entering blockchain and DeFi. The popular yield generation methods, such as farming, providing liquidity or various other staking methods, are complex topics and can feel cumbersome to new users. This friction can slow down mass adoption of decentralized financial systems, which are meant to empower all types of users, all around the world, not just the most technically proficient in leading economies. There is nothing more convenient or simple than passively holding a DeFi asset and receiving rewards that just "appear" in your wallet.


ONEMOON is an experimental DeFi asset which uses an novel mix of deflation and passive rewards in an attempt to ease this adoption curve. Alongside with this primary goal, ONEMOON incorporates many other battle-tested traits of popular defi assets, not the least of which is the programmatic creation of Locked Liquidity. This, along with an aggressive and consistent supply burn, creates the effect of a "rising price floor" as the volume of ONE/ONEMOON locked liquidity increases.


By simply holding ONEMOON, users are able to gain exposure to the high growth DeFi sector without all the bottlenecks that are typically encountered with various other permissionless DeFi offerings.</p>
      <h1>Tokenomics</h1>
      <p>ONEMOON incorporates the following fee and burn schedule:

- 5% of TX fees go to existing holders of ONEMOON as rewards.
- 2.5% of TX fees are used to create permanently locked liquidity between ONEMOON-ONE
- 1.25% is used to burn ONEMOON.
- 1.25% is used to burn hMOCHI.

ONEMOON employs a mechanism called "reflection" that distributes rewards to stakeholders in realtime, and with zero fees. This is achieved by effectively "rebasing" on every transaction and computing balances in realtime while viewing or entering into state-changing functions. This unique funtionality allows ONEMOON to have frictionless utitlity and generate passive yields for its stakeholders.
        </p>
        <img src={image2}></img>
        <p>
        The diagram above provides an example of the "separation axiom" that is employed during each transaction from ONEMOON.


Every time a ONEMOON transaction occurs, the protocol checks to see if the latest TX should cause a distribution event. If the fee repository is at or above the accrual threshold, a distribution event occurs, producing a positive yield for stakeholders as well as funding the burn wallet which is then liquidated as described above.


        </p>
        <h1>Burning Mechanisms</h1>
        <p>ONEMOON incorporates a powerful DUAL burn system which also connects it to its parent ecosystem Mochiswap and the governance token therein $hMOCHI. This is a unique multicoin system that benefits the greater ecosystem which in turn benefits ONEMOON both economically and fundamentally as it is part of a larger system. When the configured threshold is reached, the burn process is initiated and will result in the following effects.

- 1.25% of tx fee value of ONEMOON is burned, lowering the max supply and increasing scarcity.
- 1.25% of tx fee value of hMOCHI is burned, lowering the max supply and increasing scarcity of the governance token in the supporting ecosystem of ONEMOON. This results in a very unique type of positive feedback loop that supports the economics of both tokens.
</p>
      <h1>Automatic Locked Liquidity</h1>
      <img src={image1}></img>
      <p>The ability to collect and retain liquidity is one of the biggest challenges for any DeFi asset or platform. In a vast majority of DeFi systems, users must provide liquidity by creating or adding to token pairs in liquidity pools. A commonly misunderstood trait of these systems is something called "impermanent loss" which can be explained as a temporary decrease in balance of one-side of the provided LP pair for the liquidity provider in an attempt to maintain a constant product (as described in the "constant product model" x * y = k). For the average or new user this entire process can seem murky and lead to a perceived loss of value, and as such, may deter some users from interacting with the protocol.


ONEMOON solves this problem by avoiding farming all together, as well as automatically locking a percentage of transaction fees into "locked liquidity" of ONE/ONEMOON LP. This leads to a far safer and trustable econmic base as stakeholders can count on available liquidity being present as the liquidity can indeed not be removed, but must be accessed only through swaps.
</p>
<h1>Conclusion</h1>
<p>The ONEMOON experiment exists to provide a borderless, permissionless, decentralized and accessible digital asset with unparalelled resiliency and a rising price floor supported by a consistently increasing pool of locked liquidity. These traits and goals, along with the novel mechanics of passive, feeless rewards distribution via reflection make ONEMOON a prime example of "user friendly" DeFi, as by simply holding the asset any stakeholder can benefit from its unique and powerful properties.</p>
      </div>
      </div>
    </>
  );
}

export default WhitePaper;
