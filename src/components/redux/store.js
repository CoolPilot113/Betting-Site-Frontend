import { configureStore } from "@reduxjs/toolkit";
import authModalSlice from "./auth/authModalSlice";

const store = configureStore({
    reducer: {
        authModal: authModalSlice,
    }
})

export default store;