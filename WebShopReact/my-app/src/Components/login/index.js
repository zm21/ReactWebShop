import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as types from './types'
import { Redirect } from "react-router-dom";

export class LoginPage extends Component {

    state = {
        login: '',
        password: '',
        ErrorMessage: ''
    }

    handlerChangeInput = (e) => {
        var target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    isValid = () => {
        if (this.state.login === 'mykola' && this.state.password === '12345') {
            return true;
        }
        else {
            return false;
        }

    }

    submitForm = (e) => {
        e.preventDefault();
        console.log("Form submit")

        if (this.isValid()) {
            this.setState({
                ErrorMessage: ""
            })        
            this.props.dispatch({type: types.AUTH_LOGIN});
        }
        else {
            this.setState({
                ErrorMessage: "Bad login!"
            })
        }
    }

    render() { 
        const { auth } = this.props;
        const { ErrorMessage} = this.state
        if (auth) {
            return <Redirect to='/' />
          }
        return (
            <div className="container">
                <h1>Login page</h1>
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label>Login</label>
                        <input type="text" className="form-control" name="login" onChange={this.handlerChangeInput} placeholder="Enter your login" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" name="password" onChange={this.handlerChangeInput} placeholder="Enter your password" />
                    </div>
                    <p className="text-danger">{ErrorMessage}</p>
                    <button type="submit" className="btn btn-primary">LOGIN</button>
                </form>
            </div>
        )
    }
}
const mapState = (stateRedux) => {
    return {
        auth: stateRedux.auth.data
    };
}

export default connect(mapState)(LoginPage)