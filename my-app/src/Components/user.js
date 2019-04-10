import React, { Component } from 'react'
import { connect } from "react-redux";

class user extends Component {

  render() {
    return (
      <div>
        {
        Object.values(this.props.userList).map((user, key) => {
          return (
            <div key={key}>
              <h6>{user.userName}</h6>
              <h6>{user.password}</h6>
              <h6>{user.roles.toString()}</h6>
              <hr />
            </div>
          )
        })
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userList: state.userReducer.userList
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(user);
