import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk"; // redux-thunk를 바르게 임포트
import rootReducer from "./reducers";

import authenticateReducer from "./reducers/authenticateReducer"; // authenticateReducer 임포트
import productReducer from "./reducers/productReducer";

import { configureStore } from "@reduxjs/toolkit"

// let store = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(thunk)) 
//     );

const store = configureStore({
    reducer:{
        auth : authenticateReducer,
        product : productReducer,
    }
})

export default store;
