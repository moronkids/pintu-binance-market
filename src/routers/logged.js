import React, { useContext, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
// import { useQuery, QueryClient } from "react-query";
import Wrapper from "components/layouts";
import { Hooks } from "providers";

const Logged = ({ component: Component, path, ...rest }) => {
  const history = useHistory();
  if (path === "/") {
    history.push("/home");
  }
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
