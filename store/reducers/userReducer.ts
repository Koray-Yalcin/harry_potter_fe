import { UserDispatchTypes, UserType, LOGIN_START, LOGIN_ERROR, LOGIN_SUCCESS, REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR } from "../actionTypes/userActionTypes";

interface DefaultStateI {
    data: any,
    loading: boolean,
    error: string
}
const defaultState: DefaultStateI = {
    data: {} as any,
    loading: false,
    error: ''
};

const userReducer = (state: DefaultStateI = defaultState, action: UserDispatchTypes) : DefaultStateI => {
    switch (action.type) {
        case LOGIN_START:
        case REGISTER_START:
            return {...state, loading: true, error: ''}
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {...state, loading: true, data: action.payload}
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            return {...state, loading: false, error: 'Register Failed'}
        default:
           return state;
    }
}

export default userReducer;