import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { alertSlice } from './features/alertSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    alerts: alertSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return  getDefaultMiddleware({
      serializableCheck: false,
    });
    },
});


setupListeners(store.dispatch)