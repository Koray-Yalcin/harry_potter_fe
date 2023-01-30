export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export type UserType = {
    username: string,
    fullname: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type UserLogin = {
    email: string,
    password: string
}

export interface loginStart {
    type: typeof LOGIN_START
}

export interface loginError {
    type: typeof LOGIN_ERROR
}

export interface loginSuccess {
    type: typeof LOGIN_SUCCESS,
    payload: UserType
}

export interface registerStart {
    type: typeof REGISTER_START
}

export interface registerError {
    type: typeof REGISTER_ERROR
}

export interface registerSuccess {
    type: typeof REGISTER_SUCCESS,
    payload: UserType
}

export type UserDispatchTypes = loginStart | loginSuccess | loginError | registerStart | registerSuccess | registerError;