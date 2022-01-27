import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PublicRoute from "routes/PublicRoute";
import PrivateRoute from "routes/PrivateRoute";
import ScrollToTop from "components/ScrollToTop";
import pageExample from "components/pageExample/pageExample";
import ComponentExample from "pages/ComponentExample/ComponentExample";

function AppRouter() {
  useFetchUser();
  useFetchUserProfile();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop></ScrollToTop>
      <Switch>
        <PrivateRoute
          exact
          path="/page-example"
          component={pageExample}
        />
        <PublicRoute
          exact
          path="/component-example"
          component={ComponentExample}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
