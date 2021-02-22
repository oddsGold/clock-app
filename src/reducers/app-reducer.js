import {usersApi} from "../api/Api";


const INITIALIZED = 'INITIALIZED';
const SET_USERS_DATA = 'SET_USERS_DATA';


let initialState = {
    initialized: false,
    users:[]
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        case SET_USERS_DATA:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED,
    }
}

export const setUserData = (users) => {
    return {
        type: SET_USERS_DATA,
        payload: users
    }
}

export const getUsersData = () => {
    return async (dispatch) => {

        let data = await usersApi.getUsers();

        if (data) {
            dispatch(setUserData(data));
        }

    }
}

export const initializedSuccessApp = () => {
    return (dispatch) => {
        dispatch(initializedSuccess());
    }
}



export default appReducer;
