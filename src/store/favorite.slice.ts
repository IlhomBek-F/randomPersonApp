import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AsyncThunkType } from "../core/enums/async-thunk-type";
import { UserModel } from "../core/interfaces/user-model";
import { addFavorite, deleteFavorite, getFavorites } from "../service";
import { StateModel } from "../core/interfaces/state-model";

const initialState = {
    favorites: [] as UserModel[],
    loading: false
}

export const AsyncThunkMap = new Map<AsyncThunkType, any>([
    [AsyncThunkType.FETCH_FAVORITES, createAsyncThunk(AsyncThunkType.FETCH_FAVORITES, getFavorites)],
    [AsyncThunkType.ADD_FAVORITE, createAsyncThunk(AsyncThunkType.ADD_FAVORITE, addFavorite)],
    [AsyncThunkType.DELETE_FAVORITE, createAsyncThunk(AsyncThunkType.DELETE_FAVORITE, deleteFavorite)],
])

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite: ((state, { payload }) => {
            state.favorites.push(payload)
        })
    },
    extraReducers: (builder) => {
        builder.addCase(AsyncThunkMap.get(AsyncThunkType.FETCH_FAVORITES).pending, (state: StateModel) => {
            state.loading = true;
        }).addCase(AsyncThunkMap.get(AsyncThunkType.FETCH_FAVORITES).fulfilled, (state: StateModel, { payload }) => {
            state.favorites = payload;
            state.loading = false;
        }).addCase(AsyncThunkMap.get(AsyncThunkType.FETCH_FAVORITES).rejected, (state: StateModel) => {
            state.loading = false;
        })

        builder.addCase(AsyncThunkMap.get(AsyncThunkType.ADD_FAVORITE).fulfilled, (state: StateModel, { payload }) => {
            state.favorites = payload
        })

        builder.addCase(AsyncThunkMap.get(AsyncThunkType.DELETE_FAVORITE).fulfilled, (state: StateModel, { payload }) => {
            state.favorites = payload;
        })
    }
})


export const { addToFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer