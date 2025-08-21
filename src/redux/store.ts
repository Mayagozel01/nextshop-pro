import { combineReducers, createStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducers";


const rootReducer = combineReducers({
    productState:productReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export default store;