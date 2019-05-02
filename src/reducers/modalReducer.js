import { MODAL } from '../actions/actionTypes'

function rootReducer(state = {}, action) {
    switch (action.type) {
        case MODAL.OPEN: {
            return {
                ...state,
                [action.modalId]: true
            };
        }
        case MODAL.CLOSE: {
            return {
                ...state,
                [action.modalId]: false
            };
        }
        default:
            return state;
    }
}

export default rootReducer;