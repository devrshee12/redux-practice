import { combineReducers } from "redux";
import authReducer from "./auth/authReduce";



const rootReducer = combineReducers({
    auth: authReducer
})


export default rootReducer