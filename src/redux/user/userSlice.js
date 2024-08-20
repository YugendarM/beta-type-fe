import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3500/api/v1/auth/login', userCredentials, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Network error. Please try again later.');
            } else {
                return rejectWithValue(error.response.data.message );
            }
        }
    }
);

export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async (_, {rejectWithValue}) => {
        try{
            const response = await axios.post('http://localhost:3500/api/v1/auth/logout',{}, {
                withCredentials: true
            })
            return response.data
        }
        catch(error){
            if (!error.response) {
                return rejectWithValue('Network error. Please try again later.');
            } else {
                return rejectWithValue(error.response.data.message );
            }
        }
    }
)

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userCredentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3500/api/v1/auth/signup', userCredentials, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Network error. Please try again later.');
            } else {
                if (error.response.status === 409) {
                    return rejectWithValue('User Already Registered');
                }
                return rejectWithValue(error.response.data.message || 'An error occurred during signup');
            }
        }
    }
);

export const getUserDetails = createAsyncThunk(
    'user/getUserDetails',
    async (_, {rejectWithValue}) => {
        try{
            const response = await axios.get("http://localhost:3500/api/v1/user/getUserDetails", {
                withCredentials: true
            })
            return response.data
        }
        catch(error){
            if (!error.response) {
                return rejectWithValue('Network error. Please try again later.');
            } else {
                return rejectWithValue(error.response.data.message || 'An error occurred fetching user data');
            }
        }
    }
)

export const updateScore = createAsyncThunk(
    'user/updateScore',
    async (scoreData, {rejectWithValue}) => {
        try{
            const response = await axios.put("http://localhost:3500/api/v1/user/updateScore", scoreData,
                {
                    withCredentials: true
                }
            )
            return response.data
        }
        catch(error){
            if (!error.response) {
                return rejectWithValue('Network error. Please try again later.');
            } else {
                return rejectWithValue(error.response.data.message || 'An error occurred updating the scores');
            }
        }
    }
)

export const updateEducationResult = createAsyncThunk(
    'user/updateEducationResult',
    async(educationResult, {rejectWithValue}) => {
        try{
            const response = await axios.put("http://localhost:3500/api/v1/user/updateEducationResults", educationResult,
                {
                    withCredentials: true
                }
            )
            return response.data
        }
        catch(error){
            if (!error.response) {
                return rejectWithValue('Network error. Please try again later.');
            } else {
                return rejectWithValue(error.response.data.message || 'An error occurred updating the scores');
            }
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        data: {},
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.error = ""
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            .addCase(logoutUser.pending, (state) => {
                state.loading = true
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.loading = false,
                state.data = {},
                state.error = ""
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            .addCase(registerUser.pending, (state) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                state.error = ""
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || action.error.message
            })

            .addCase(getUserDetails.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getUserDetails.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
                state.error = ""
            })
            .addCase(getUserDetails.rejected, (state, action) => {
                state.loading = false
                state.data = {}
                state.error = action.error.message
            })

    }
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
