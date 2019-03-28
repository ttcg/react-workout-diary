import { AUTHENTICATIONS } from "./actionTypes";
import AuthenticationService from "../services/authenticationService";
//import { beginAjaxCall } from "./ajaxStatusActions";

const authenticateUserSuccess = (data) => ({ type: AUTHENTICATIONS.LOGGED_IN, payload: data });

export const authenticateUser = (payload) => {
    return function (dispatch) {        
        //dispatch(beginAjaxCall());
        return AuthenticationService.authenticate(payload).then(data => {
            dispatch(authenticateUserSuccess(data));
        });
    };
}