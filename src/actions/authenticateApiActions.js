import { AUTHENTICATIONS } from "./actionTypes";
import { AuthenticationService } from "../services";
import { beginAjaxCall } from "./ajaxStatusActions";

const authenticateUserSuccess = (data) => ({ type: AUTHENTICATIONS.LOG_IN_SUCCESS, payload: data });

export const clearAuthenticationMessage = () => ({ type: AUTHENTICATIONS.CLEAR_AUTHENTICATION_MESSAGE });

export const authenticateUser = (payload) => {
    return function (dispatch) {     
           
        dispatch(beginAjaxCall());
        dispatch({type: AUTHENTICATIONS.LOG_IN_BEGIN});

        return AuthenticationService.authenticate(payload).then(data => {
            dispatch(authenticateUserSuccess(data));
        }).catch(err => {
            dispatch({type: AUTHENTICATIONS.LOG_IN_ERROR, error: err});
          });;
    };
}