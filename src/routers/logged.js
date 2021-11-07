import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
// import { useQuery, QueryClient } from "react-query";
import Wrapper from "components/layouts";
import { Hooks } from "providers";

const Logged = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <Wrapper>
              <Component {...props} />
            </Wrapper>
          </>
        );
      }}
    />
  );
};

export default Logged;
