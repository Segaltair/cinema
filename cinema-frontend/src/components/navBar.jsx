import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import {getUsername, isAuth} from "../utils/storage";

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Cinema</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">Movies <span
                                className="sr-only">(current)</span></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" hidden={isAuth()}>
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item" hidden={isAuth()}>
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item" hidden={!isAuth()}>
                            <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        </li>
                        <li>
                            <span className="nav-link">{getUsername()}</span>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};