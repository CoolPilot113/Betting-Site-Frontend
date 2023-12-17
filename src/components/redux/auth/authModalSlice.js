import { createSlice } from '@reduxjs/toolkit';

const authModalSlice = createSlice({
    name: 'authModal',
    initialState: {
        isLoginModalOpen: false,
        isRegisterModalOpen: false,
    },
    reducers: {
        openLoginModal: (state) => {
            state.isLoginModalOpen = true;
        },
        closeLoginModal: (state) => {
            state.isLoginModalOpen = false;
        },
        openRegisterModal: (state) => {
            state.isRegisterModalOpen = true;
        },
        closeRegisterModal: (state) => {
            state.isRegisterModalOpen = false;
        },
    },
});

export const {
    openLoginModal,
    closeLoginModal,
    openRegisterModal,
    closeRegisterModal,
} = authModalSlice.actions;

export default authModalSlice.reducer;
