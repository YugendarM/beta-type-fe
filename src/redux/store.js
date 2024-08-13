import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import testAttemptSlice from "./testAttempt/testAttemptSlice";
import { combineReducers } from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['testAttempt']
}

const combinedReducer = combineReducers({
    user: userReducer,
    testAttempt: testAttemptSlice
})

const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,  
        }),
})

export default store