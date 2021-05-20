import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as authTypes from '../login/types'

export class Navbar extends Component {

    buttonLogoutClick = () => {
        this.props.dispatch({ type: authTypes.AUTH_LOGOUT });
    }

    render() {
        const { counter, auth } = this.props;
        return (
            <div>
                {/* <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                </ul> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/counter">Counter {counter}</Link>
                            </li>
                            {
                                auth ?
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={this.buttonLogoutClick} >Logout</Link>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapState = (stateRedux) => {
    return {
        counter: stateRedux.counter.data,
        auth: stateRedux.auth.data
    };
}

export default connect(mapState)(Navbar)