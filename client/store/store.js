import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import glossaryReducer from "../store/reducers/glossaryReducer";
import wordReducer from "../store/reducers/wordReducer";

const rootReducer = combineReducers({
  glossaryReducer,
  wordReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, createLogger({ collapsed: true }))
);

//store: redux creates a store using the reducer defined above. it can accept changes using dispatch

export default store;
