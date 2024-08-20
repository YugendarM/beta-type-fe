import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLessonData = createAsyncThunk(
    "lesson/getLessonData",
    async ({lessonNumber}, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3500/api/v1/lesson/getLesson/${lessonNumber}`, {
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
)

const lessonSlice = createSlice({
    name: "lesson",
    initialState: {
        loading: false,
        data: {},
        error: ""
    },
    extraReducers: (builder) => {
        builder
        .addCase(getLessonData.pending, (state) => {
            state.loading = true
            state.error = ""
        })
        .addCase(getLessonData.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = ""
        })
        .addCase(getLessonData.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default lessonSlice.reducer