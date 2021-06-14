/** @format */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import WhitePaper from "../Pages/WhitePaper";
const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/whitepaper.html' component={WhitePaper} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
