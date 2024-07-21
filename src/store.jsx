import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Component/Products';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
