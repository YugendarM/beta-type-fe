import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import testAttemptSlice from "./testAttempt/testAttemptSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        testAttempt: testAttemptSlice
    }
})

export default store;