import * as React from "react";
import { Route, Redirect } from "react-router-dom";

interface Props {
  component: any;
}
// Another way to say "Leave me alone, TypeScript, I don't know what I'm doing yet"

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
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

export default PrivateRoute;
