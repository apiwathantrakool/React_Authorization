import React, { Component } from 'react'
import { connect } from "react-redux";
import { test } from "../Redux/Actions/test";

class home extends Component {

  componentDidMount() {
    this.props.test();
  }

  render() {
    return (
      <div>
        Home DEPLOY FOR NEKKY 3
        <br/>
        {this.props.data}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.testReducer.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    test: () => dispatch(test())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
