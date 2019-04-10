import React, { Component } from 'react'
import { connect } from "react-redux";

class profile extends Component {

  render() {
    if (this.props.currentUser === null) {
      return (
        <div>
          No user login.
        </div>
      )
    }
    return (
      <div>
        <h5>{this.props.currentUser.userName}</h5>
        <h5>{this.props.currentUser.password}</h5>
        <h5>{this.props.currentUser.roles.toString()}</h5>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.userReducer.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(profile);
