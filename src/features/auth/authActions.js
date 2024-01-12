import axios from "axios"
import { LOGIN_USER, SET_AUTHENTICATION, SET_TOKEN, SET_USER } from "./authTypes"

export const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}
export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const setAuthentication = (val) => {
    return {
        type: SET_AUTHENTICATION,
        payload: val
    }
}

export const apiLoginUser = (user) => {
    return async(dispatch) => {
        try{
            dispatch(setAuthentication(false))
            const res = await axios.post("http://192.168.1.148:8000/login", {
                email: user.email,
                password: user.password
            })
            dispatch(setToken(res?.data?.token));
            dispatch(setAuthentication(true));
        }
        catch(err){
            dispatch(setAuthentication(false))
            console.log(err);
        }
    }
}

export const apiSignupUser = (user) => {
    return async(dispatch) => {
        try{
            dispatch(setAuthentication(false))
            const res = await axios.post("http://192.168.1.148:8000/signup", {
                name: user.name,
                email: user.email,
                password: user.password
            })
            dispatch(setToken(res?.data?.token));
            dispatch(setAuthentication(true));
        }
        catch(err){
            dispatch(setAuthentication(false))
            console.log(err);
        }
    }
}


export const getUserDetails = (token) => {
    return async(dispatch) => {
        try{
            const res = await axios.post("http://192.168.1.148:8000/get-user", {
                token
            });
            dispatch(setUser(res?.data?.user));
        }
        catch(err){
            console.log(err);
        }
    }
}
