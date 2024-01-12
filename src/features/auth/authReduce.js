import { LOGIN_USER, SET_AUTHENTICATION, SET_TOKEN, SET_USER, SIGNUP_USER } from "./authTypes"


const initalState = {
    user:{},
    token:"",
    isAuthenticated: false
}

const authReducer = (state = initalState, action) => {
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_TOKEN:
            return {
                ...state,
                token:action.payload
            }
        case SET_AUTHENTICATION:
            return {
                ...state,
                isAuthenticated:action.payload
            }
        default:
            return state
    }
}


export default authReducer;