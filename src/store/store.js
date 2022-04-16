import { configureStore } from '@reduxjs/toolkit'
import api from './middleware/api'
import recipesReducer from './recipes'

const store = configureStore({
    reducer: {
        recipes: recipesReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api)
})

export default store