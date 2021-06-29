import * as types from './types';
import LoginService from './service';
import jwt from 'jsonwebtoken';
import setAuthorisationToken from '../../utils/setAuthorisationToken';
import { push } from 'connected-react-router';

export const login = (model) =>{
    return(dispatch)=>{
        //start auth process
        dispatch({type: types.LOGIN_STARTED});
        LoginService.loginUser(model)
            .then((response)=>{
                loginByJWT(response.data, dispatch);
                dispatch({type:types.LOGIN_SUCCESS})
                dispatch(push('/'));
            }, bad=> {
                dispatch({type:types.LOGIN_FAILED, errors: bad.response.data})
            })
            .catch(error=>{
                console.log("Error")
            });
    }
}

export const loginByJWT = (tokens, dispatch) => {
    const {token} = tokens;
    var user = jwt.decode(token);
    if (!Array.isArray(user.roles)) {
        user.roles = Array.of(user.roles);
    }
    localStorage.setItem('token', token);
    setAuthorisationToken(token);
    dispatch({
        type: types.LOGIN_SET_CURRENT_USER,
        user
    });
    console.log("Login user ", user);
}