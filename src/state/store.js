import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import translationReducer from "./translationSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        translation: translationReducer
    }
})

export default store;