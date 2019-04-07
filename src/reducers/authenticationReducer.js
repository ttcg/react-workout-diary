import { AUTHENTICATIONS } from '../actions/actionTypes';

var initialState = {
    error: null,
    currentUser: {},
    isAuthenticating: false
}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATIONS.LOG_IN_BEGIN:
            return {
                ...state,
                isAuthenticating: true
            };
        case AUTHENTICATIONS.LOG_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isAuthenticating: false,
                error: null
            };
        case AUTHENTICATIONS.LOG_IN_ERROR:
            return {
                ...state,
                currentUser: {},
                error: action.error,
                isAuthenticating: false
            };
        case AUTHENTICATIONS.LOGGED_OUT:
            return { ...initialState };
        case AUTHENTICATIONS.CLEAR_AUTHENTICATION_MESSAGE:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export default authenticationReducer;