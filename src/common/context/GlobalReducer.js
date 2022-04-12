import { ACTIONS } from './actions';

const GlobalReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_AUTH_USER:
            return { ...state, user: action.payload }
        case ACTIONS.REMOVE_AUTH_USER:
            return { ...state, user: null }
        default:
            return state;
    }
}

export default GlobalReducer;