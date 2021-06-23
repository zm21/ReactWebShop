import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as types from './types'
import { Redirect } from "react-router-dom";
import { login } from './action'
import Loader from 'react-loader-spinner'
import TextFieldGroup from '../common/TextFieldGroup'

export class LoginPage extends Component {

    state = {
        email: '',
        password: '',
        ErrorMessage: '',
        isLoading: this.props.loading,
        errors: this.props.errors
    }

    static getDerivedStateFromProps(props, state){
        if(props.loading!=state.isLoading)
            state.isLoading=props.loading;
        return state;
    }

    handlerChangeInput = (e) => {
        var target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    isValid = () => {
        if (this.state.login != '' && this.state.password != '') {
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
            this.props.login(this.state);
            this.setState({
                ErrorMessage: ""
            })
            this.props.dispatch({ type: types.LOGIN_SUCCESS });
        }
        else {
            this.setState({
                ErrorMessage: "Enter all fields!"
            })
        }
    }

    render() {
        const { auth } = this.props;
        const { ErrorMessage, isLoading, email, password, errors } = this.state
        if (auth) {
            return <Redirect to='/' />
        }
        return (
            <div>
                {
                    isLoading &&
                    <div style={{ width: '100%', height: "100", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15%' }}>
                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                    </div> ||
                    <div className="container">
                        <h1>Login page</h1>
                        <form onSubmit={this.submitForm}>
                        <TextFieldGroup 
                                    field="email"
                                    value={email}
                                    label="Email"
                                    icon="fa fa-envelope"
                                    type="email"
                                    //placeholder="Email"
                                    error={errors.email}
                                    onChange={this.handlerChangeInput}/>

                                <TextFieldGroup 
                                    field="password"
                                    value={password}
                                    label="Password"
                                    icon="fa fa-lock"
                                    type="password"
                                    //placeholder="Email"
                                    error={errors.password}
                                    onChange={this.handlerChangeInput}/>
                            {/* <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" name="email" onChange={this.handlerChangeInput} placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" className="form-control" name="password" onChange={this.handlerChangeInput} placeholder="Enter your password" />
                            </div> */}
                            <p className="text-danger">{ErrorMessage}</p>
                            <button type="submit" className="btn btn-primary">LOGIN</button>
                        </form>
                    </div>
                }
            </div>

        )
    }
}
const mapState = (stateRedux) => {
    return {
        loading: stateRedux.auth.loading,
        errors: stateRedux.auth.errors
    };
}

export default connect(mapState, { login })(LoginPage)