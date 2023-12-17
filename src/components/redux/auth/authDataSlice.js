import { createSlice } from "@reduxjs/toolkit";

const authDataSlice = createSlice({
    name: 'authData',
    initialState: {
        authToken: localStorage.getItem('token') === null ? null : localStorage.getItem('token'),
        authUser: null,
    },
    reducers: {
        setAuthToken: (state, token) => {
            state.authToken = token;
        },
        setAuthUser: (state, user) => {
            state.authUser = user;
        }
    }
})

export const {
    setAuthToken,
    setAuthUser
} = authDataSlice.actions;

export default authDataSlice.reducer;
