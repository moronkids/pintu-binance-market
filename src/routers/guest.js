import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
const Guest = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <Component {...props} />
          </>
        );
      }}
    />
  );
};

export default Guest;
