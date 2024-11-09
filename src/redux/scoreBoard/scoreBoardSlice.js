import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/AxiosInstance/AxiosInstance";

export const getUsersBasedOnTopSpeed = createAsyncThunk(
    "scoreBoard/getUsersBasedOnTopSpeed",
    async(_, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.get("/user/getUsersBasedOnTopSpeed")
            return response.data
        }
        catch(error){
            if (!error.response) {
                return rejectWithValue('Network error. Please try again later.')
            } else {
                return rejectWithValue(error.response.data.message || 'An error occurred fetching user data')
            }
        }
    }
)

export const getUsersBasedOnTopBetaScore = createAsyncThunk(
    'scoreBoard/getUsersBasedOnTopBetaScore',
    async(_, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.get("/user/getUsersBasedOnTopBetaScore")
            return response.data
        }
        catch(error){
            if(!error.response){
                return rejectWithValue("Network error. Please try again later.")
            } else {
                return rejectWithValue(error.response.data.message || 'An error occurred fetching user data')
            }
        }
    }
)

const scoreBoardSlice = createSlice({
    name: "scoreBoard",
    initialState: {
        loading: false,
        data: {},
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersBasedOnTopSpeed.pending, (state) => {
                state.loading = true
            })
            .addCase(getUsersBasedOnTopSpeed.fulfilled, (state, action) => {
                state.loading = false,
                state.data = action.payload,
                state.error = ""
            })
            .addCase(getUsersBasedOnTopSpeed.rejected, (state, action) => {
                state.loading = false,
                state.data = {},
                state.error = action.error.message
            })
            .addCase(getUsersBasedOnTopBetaScore.pending, (state) => {
                state.loading = true
            })
            .addCase(getUsersBasedOnTopBetaScore.fulfilled, (state, action) => {
                state.loading = false,
                state.data = action.payload,
                state.error = ""
            })
            .addCase(getUsersBasedOnTopBetaScore.rejected, (state, action) => {
                state.loading = false,
                state.data = {},
                state.error = action.error.message
            })
    }
})

export default scoreBoardSlice.reducer