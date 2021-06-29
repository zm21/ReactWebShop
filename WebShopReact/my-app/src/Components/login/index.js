import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as types from './types'
import { Redirect } from "react-router-dom";
import { login } from './action'
import EclipseWidget from '../common/eclipse/'
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
        state.errors=props.errors;
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
                            <p className="text-danger">{ErrorMessage}</p>
                            {!!errors.invalid && <p className="text-danger">{errors.invalid}</p>}
                            <button type="submit" className="btn btn-primary">LOGIN</button>
                        </form>
                    </div>

                {isLoading && <EclipseWidget />}

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