import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import { setCurrentUser } from "../Redux/Actions/user";

class login extends Component {

  state = {
    userName: "user001",
    password: "123456"
  };

  onUserNameChange = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  onLogin = () => {
    const user = this.props.userList
      .find(user =>
        (user.userName === this.state.userName && user.password === this.state.password));
    this.props.setCurrentUser(user);
  }

  onLogout = () => {
    this.props.setCurrentUser(null);
  }

  render() {
    if (this.props.currentUser === null) {
      return (
        <div>
          <Form>
            <FormGroup>
              <Label for="inputUserName">User Name</Label>
              <Input
                type="text"
                name="inputUserName"
                id="userName"
                placeholder="User Name"
                value={this.state.userName}
                onChange={this.onUserNameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="inputPassword">Password</Label>
              <Input
                type="password"
                name="inputPassword"
                id="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
            </FormGroup>
            <Button onClick={this.onLogin}>Login</Button>
          </Form>
        </div>
      )
    }
    return (
      <div>
        <h5>
          {this.props.currentUser.userName}
          <br />
          <Button onClick={this.onLogout}>Logout</Button>
        </h5>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userList: state.userReducer.userList,
    currentUser: state.userReducer.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(login);
