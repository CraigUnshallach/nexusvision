import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../features/Session/SessionSlice';

export const store = configureStore({
  reducer: {
    session: sessionReducer
  },
});