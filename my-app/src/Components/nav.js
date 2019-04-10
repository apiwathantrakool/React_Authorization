import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class nav extends Component {

    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink><Link to="/">Home</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="/profile">Profile</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="/user">UserList</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="/login">Login</Link></NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default nav
