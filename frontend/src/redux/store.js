import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { listProductReducers } from "./reducers/productReducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
  productList: listProductReducers,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
