import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GuestRoutes from "routers/guest";
import LoggedRoutes from "routers/logged";
import Agent from "components/dashboard";
import NotFound from "components/not_found_page";

const Routes = () => {
  return (
    <>
      <Switch>
        {/* logged routes */}
        <LoggedRoutes exact path="/home" component={Agent} />
        <LoggedRoutes exact path="/" component={Agent} />

        {/* logged routes */}
        {/* guest routes */}
        {/* <GuestRoutes exact path="/socket" component={Socket} /> */}
        {/* guest routes */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
