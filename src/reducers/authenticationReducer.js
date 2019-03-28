import { AUTHENTICATIONS } from '../actions/actionTypes';

var initialState = {
    currentUser: { userName: 'thetwai' }
}

const authenticationReducer = (state = initialState.currentUser, action) => {
    switch (action.type) {
        case AUTHENTICATIONS.LOGGED_IN:
            return action.payload;
        case AUTHENTICATIONS.LOGGED_OUT:
            return { currentUser: { } };
        default:
            return state;
    }
}

export default authenticationReducer;