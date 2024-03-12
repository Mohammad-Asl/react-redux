import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";
// import logger from "redux-logger";
// import { applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";

const store = createStore(
  // rootReducer,
  // composeWithDevTools(applyMiddleware(logger, thunk))
  counterReducer
);

export default store;
