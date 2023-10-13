import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './features/api/apiSlice';
import { alertSlice } from './features/alertSlice';


// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    alerts: alertSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
  return  getDefaultMiddleware().concat(apiSlice.middleware);
  },
});


setupListeners(store.dispatch)