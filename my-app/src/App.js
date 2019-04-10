import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "./Components/home";
import Pofile from "./Components/profile";
import User from "./Components/user";
import Login from "./Components/login";


class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Pofile} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
        </Switch>
    );
  }
}

export default App;
