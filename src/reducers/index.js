import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { showProductSearchReducer}  from "./showProductSearch";
import products from "./products";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer,
    showProductSearch:showProductSearchReducer,
    products
})

export default allReducers