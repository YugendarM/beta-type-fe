import { createSlice } from "@reduxjs/toolkit";

const testAttemptSlice = createSlice({
    name: "testAttempt",
    initialState: {
        loading: false,
        data: {},
        error: ""
    },
    reducers: {
        setAttemptReviewData: (state, action)=> {
            state.data = action.payload
            state.loading = true
        }
    }
})

export const {setAttemptReviewData} = testAttemptSlice.actions
export default testAttemptSlice.reducer