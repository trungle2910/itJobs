import "./App.css";
import React, { useState } from "react";
import { Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import Navbarr from "./components/Navbarr";
import JobDetail from "./components/JobDetail";
import JobsList from "./components/JobsList";
import Login from "./components/Login";

function App() {
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = (props) => {
    if (isAuthenticated == true) {
      return <Route {...props} />;
    } else {
      // history.pushState("/login");
      return <Redirect to="/login" />;
    }
  };

  return (
    <div className="App">
      <Navbarr />
      <div className="background">
        <Switch>
          <Route
            path="/login"
            exact
            component={() => (
              <Login
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            )}
          />
          {/* <Route path="/jobs" exact component={JobsList} /> */}
          <Route path="/" exact component={JobsList} />
          {/* <Route path="/jobs/:id" component={JobDetail} /> */}
          <ProtectedRoute path="/jobs/:id" component={JobDetail} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
