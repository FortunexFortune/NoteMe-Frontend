import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './simple.css';

class Navbar extends Component {

    render() {
        return (
            <div>
                <div className="navbar-fixed" >
                    <nav className="nav-wrapper indigo hyperOff " >
                        <div className="container">
                            <NavLink className="brand-logo center" to="/">NoteMe<i className="material-icons">timeline</i></NavLink>
                            <a href="/" data-target="mobile-links" className="sidenav-trigger left hide-on-large-only"> <i className="material-icons">menu</i> </a>
                            <ul className="right hide-on-med-and-down">
                                <li> <NavLink to="/">Home</NavLink></li>
                                <li> <NavLink to="/About">About</NavLink></li>
                                <li > {JSON.parse(sessionStorage.getItem("Account")) ? <NavLink to="/Tool">Tool</NavLink> : null}</li>
                                <li> {JSON.parse(sessionStorage.getItem("Account")) ? <NavLink to="/Form" className="btn white indigo-text">Logout</NavLink>
                                    : <NavLink to="/Form" className="btn white indigo-text">Login</NavLink>}</li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav hide-on-large-only " id="mobile-links">
                    <li> <NavLink to="/">Home</NavLink></li>
                    <li> <NavLink to="/About">About</NavLink></li>
                    <li > {JSON.parse(sessionStorage.getItem("Account")) ? <NavLink to="/Tool">Tool</NavLink> : null}</li>
                    <li> {JSON.parse(sessionStorage.getItem("Account")) ? <NavLink to="/Form">Logout</NavLink> : <NavLink to="/Form">Login</NavLink>}</li>
                </ul>
            </div >
        );
    }
}

export default Navbar;
