import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: ""
}

export const translationSlice = createSlice({
    name: "translation",
    initialState,
    reducers: {
        updateInput: (state, action) => {
            state.input = action.payload;
        },
        clearInput: (state) => {
            state.input = "";
        }
    }
})

export const { updateInput, clearInput } = translationSlice.actions;

export default translationSlice.reducer;