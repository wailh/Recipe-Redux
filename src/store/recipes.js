import {createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from './api'
import { createSelector } from 'reselect'

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        list: [],
        loading: false
    },
    reducers: {
        recipesRequested: (recipes, action) => {
            recipes.loading = true
        },
        recipesReceived: (recipes, action) => {
            recipes.list = action.payload;
            recipes.loading = false;
        },
        recipesRequestFailed: (recipes, action) => {
            recipes.loading = false
        }
    }
})

export const {
    recipesReceived,
    recipesRequested,
    recipesRequestFailed,
} = recipesSlice.actions
export default recipesSlice.reducer;

export const loadRecipes = (query) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            onStart: recipesRequested.type,
            onSuccess: recipesReceived.type,
            onError: recipesRequestFailed.type,
            query: query
        })
    )
}

export const getRecipes = () => 
    createSelector(
        (state) => state.recipes,
        recipes => recipes
    )