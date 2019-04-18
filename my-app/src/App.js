import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "./Components/home";
import Pofile from "./Components/profile";
import User from "./Components/user";
import Login from "./Components/login";
import Authorization from "./Components/authorization";
import { ADMIN, STAFF, CEO } from "./Util/roles";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Authorization(Pofile, [STAFF])} />
          <Route path="/user" component={Authorization(User, [ADMIN, CEO])} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
