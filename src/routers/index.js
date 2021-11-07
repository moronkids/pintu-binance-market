import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GuestRoutes from "routers/guest";
import LoggedRoutes from "routers/logged";
import Dashboard from "components/dashboard";
import NotFound from "components/not_found_page";

const Routes = () => {
  return (
    <>
      <Switch>
        {/* logged routes */}
        <LoggedRoutes exact path="/" component={Dashboard} />
        <LoggedRoutes exact path="/home" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
