import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { showProductSearchReducer}  from "./showProductSearch";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer,
    showProductSearch:showProductSearchReducer
})

export default allReducers