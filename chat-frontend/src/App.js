import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { Auth, Home } from "./pages";

const App = (props) => {
  const { isAuth } = props;
  return (
    <div className="wrapper">
      <Route
        exact
        path={["/signin", "/signup", "/signup/verify"]}
        component={Auth}
      />
      <Route exact path="/" render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)} />
    </div>
  );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
