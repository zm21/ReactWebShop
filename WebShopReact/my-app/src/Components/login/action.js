import * as types from './types';
import LoginService from './service';

export const login = (model) =>{
    return(dispatch)=>{
        //start auth process
        dispatch({type: types.LOGIN_STARTED});
        LoginService.loginUser(model)
            .then((response)=>{
                dispatch({type:types.LOGIN_SUCCESS})
            }, bad=> {
                dispatch({type:types.LOGIN_FAILED, errors: bad.response.data})
            })
            .catch(error=>{
                console.log("Error")
            });
    }
}