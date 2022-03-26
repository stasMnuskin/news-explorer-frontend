import React from "react";
import { Route, Redirect } from "react-router-dom";

export function ProtectedRoute({ ...props }) {
  return (
    <Route {...props}>
      {props.isLoggedIn ? props.children : <Redirect to={"/"} />}
    </Route>
  );
}
