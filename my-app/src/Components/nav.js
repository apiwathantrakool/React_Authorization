import React, { Component } from 'react'
import { Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class nav extends Component {

    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink to="/">
                            <Button outline color="info">Home</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/profile">
                            <Button outline color="info">Profile</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/user">
                            <Button outline color="info">User List</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/login">
                            <Button outline color="info">Login</Button>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default nav
