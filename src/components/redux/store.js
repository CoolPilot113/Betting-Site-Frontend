import { configureStore } from '@reduxjs/toolkit';
import authModalSlice from './auth/authModalSlice';
import messageReducer from './messages';

const store = configureStore({
  reducer: {
    authModal: authModalSlice,
    message: messageReducer,
  },
});

export default store;
