import { combineReducers } from "redux";
// import iceCreamReducer from "./iceCream/iceCreamReducer";
// import cakeReducer from "./cake/cakeReducer";
import counterReducer from './counter/counterReducer'

const rootReducer = combineReducers({
    // cake:cakeReducer,
    // iceCream:iceCreamReducer
   counterReducer
})

export default rootReducer