import { useReducer } from 'react';
import { ACTIONS } from './actions';
import GlobalContext, { initialState } from './GlobalContext';
import GlobalReducer from './GlobalReducer';


const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    const setUser = (user) => {
        dispatch({ type: ACTIONS.ADD_AUTH_USER, payload: user });
    }

    const removeUser = () => {
        dispatch({ type: ACTIONS.REMOVE_AUTH_USER });
    }

    const newState = {
        ...initialState,
        ...state,
        setUser,
        removeUser
    }

    return (
        <GlobalContext.Provider value={newState}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;