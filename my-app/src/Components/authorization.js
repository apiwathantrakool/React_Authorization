import { compose } from "redux";
import React from 'react'
import { connect } from "react-redux";

const Authorization = (WrappedComponent, allowedRoles) => {
    return class WithAuthorization extends React.Component {

        render() {
            var accessible = false;
            if (this.props.currentUser !== null) {
                allowedRoles.forEach(role => {
                    this.props.currentUser.roles.forEach(userRole => {
                        if (role === userRole) {
                            accessible = true;
                        }
                    });
                });

                if (accessible) {
                    return <WrappedComponent />
                } else {
                    return <h1>Access Denied</h1>
                }
                
            } else {
                return <h1>No user login.</h1>
            }
        }
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.userReducer.currentUser
})

const WithAuthorizationConnect = compose(
    connect(mapStateToProps, null),
    Authorization
);

export default WithAuthorizationConnect;

