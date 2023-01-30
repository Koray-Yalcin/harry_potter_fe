import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"
import { Dispatch } from "redux";
import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS, REGISTER_ERROR, REGISTER_START, REGISTER_SUCCESS, UserDispatchTypes, UserLogin, UserType } from "../actionTypes/userActionTypes"

export const register = (values: UserType,) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        dispatch({
            type: REGISTER_START
        });
        const res = await axios.post('http://localhost:5000/users/register', values);
         dispatch({
             type: REGISTER_SUCCESS,
             payload: res.data
         });
    } catch (error) {
        dispatch({
            type: REGISTER_ERROR
        })
        console.log(error)
    }
}

export const login = (values: any) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        dispatch({
            type: LOGIN_START
        });
        const res = await axios.post('http://localhost:5000/users/login', values);
         dispatch({
             type: LOGIN_SUCCESS,
             payload: res.data
         });
        await AsyncStorage.setItem('userInfo', JSON.stringify(res.data));
    } catch (error) {
        dispatch({
            type: LOGIN_ERROR
        })
        console.log(error)
    }
}