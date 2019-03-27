import { AUTHENTICATIONS } from '../actions/actionTypes';

var initialState = {
    currentUser: { userName: 'thetwai'}
}

const authenticationReducer = (state = initialState.currentUser, action) => {
    if (action.type === AUTHENTICATIONS.LOGGED_IN) {
        return action.payload;
    }

    return state;
}

export default authenticationReducer;