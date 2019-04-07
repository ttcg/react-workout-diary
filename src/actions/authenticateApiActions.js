import { AUTHENTICATIONS } from "./actionTypes";
import { AuthenticationService } from "../services";
import { beginAjaxCall } from "./ajaxStatusActions";

const authenticateUserBegin = () => ({ type: AUTHENTICATIONS.LOG_IN_BEGIN });

const authenticateUserSuccess = (data) => ({ type: AUTHENTICATIONS.LOG_IN_SUCCESS, payload: data });

const authenticateUserError = (err) => ({ type: AUTHENTICATIONS.LOG_IN_ERROR, error: err });

export const clearAuthenticationMessage = () => ({ type: AUTHENTICATIONS.CLEAR_AUTHENTICATION_MESSAGE });

export const logOut = () => ({ type: AUTHENTICATIONS.LOGGED_OUT });

export const authenticateUser = (payload) => {
    return function (dispatch) {

        dispatch(beginAjaxCall());
        dispatch(authenticateUserBegin());

        return AuthenticationService.authenticate(payload).then(data => {
            dispatch(authenticateUserSuccess(data));
        }).catch(err => {
            dispatch(authenticateUserError(err));
        });;
    };
}