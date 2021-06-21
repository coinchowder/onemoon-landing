/** @format */

import React from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import WhitePaper from "../Pages/WhitePaper";
import FundRaiser from "../Pages/Donate";

// const provider = new ethers.providers.JsonRpcProvider('https://api.harmony.one', {
//   chainId: 1666600000,
//   name: 'harmony-mainnet'
// });

const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
          <Switch>
            <Route path='/fundraiser' exact>
              <FundRaiser />
            </Route>
            <Route path='/whitepaper.html' component={WhitePaper} />
            <Route path='/' component={Home} />
          </Switch>
        </BrowserRouter>
    </>
  );
};

export default AppRouter;
