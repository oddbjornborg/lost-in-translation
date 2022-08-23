import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: sessionStorage.getItem("username") || "",
    translations: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload;
        },
        logout: (state) => {
            state.username = "";
        },
        addTranslationHistory: (state, action) => {
            if(state.translations.length >= 10) {
                state.translations.pop();
            }
            state.translations.unshift(action.payload);
        },
        clearTranslationHistory: (state) => {
            state.translations = [];
        },
        importTranslationHistory: (state, action) => {
            const storedTranslations = sessionStorage.getItem(action.payload + "-translations");

            if(!storedTranslations || storedTranslations === "") {
                state.translations = [];
            }
            else {
                state.translations = storedTranslations.split(",");
            }
        }
    }
})

export const { login, logout, addTranslationHistory, clearTranslationHistory, importTranslationHistory } = userSlice.actions;

export default userSlice.reducer;