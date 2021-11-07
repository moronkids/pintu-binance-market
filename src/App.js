import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "routers/index";
import "assets/scss/bootstrap.scss";

const App = () => {
  return (
    <>
      <Router basename="/index.html">
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
