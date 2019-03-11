import * as React from "react";
import { Route, Redirect } from "react-router-dom";

interface Props {
  component: any;
  exact?: boolean;
  path: string;
}

const VerifyLogin = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default VerifyLogin;
