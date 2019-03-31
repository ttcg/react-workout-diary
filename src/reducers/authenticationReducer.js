import { AUTHENTICATIONS } from '../actions/actionTypes';

var initialState = {
    error: undefined,
    currentUser: undefined
}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATIONS.LOGGED_IN:
            return { 
                ...state, 
                currentUser: action.payload 
            };
        case AUTHENTICATIONS.LOGGED_IN_FAIL:
            return { 
                ...state,
                currentUser: undefined, 
                error: 'abc' 
            };
        case AUTHENTICATIONS.LOGGED_OUT:
            return { 
                ...state,
                currentUser: undefined };
        default:
            return state;
    }
}

export default authenticationReducer;