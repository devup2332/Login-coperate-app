import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const LoginPage = React.lazy(() => import("./pages/Login/Login.page"));

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Suspense fallback="Loading">
            <LoginPage />
          </Suspense>
        </Route>

        <Redirect to="/login"></Redirect>
      </Switch>
    </Router>
  );
};

export default App;
