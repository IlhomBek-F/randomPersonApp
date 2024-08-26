import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from './favorite.slice';

export const store = configureStore({
    reducer: favoriteSlice
})