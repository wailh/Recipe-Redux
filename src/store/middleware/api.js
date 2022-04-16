import { useState } from 'react';
import axios from 'axios'
import * as actions from '../api'
import store from '../store'

const api = ({ dispatch }) => (next) => async (action) => {
    // const [query, setQuery] = useState('chicken')

    const APP_KEY = 'b7ad80be33d79c0a23739587c860c0f7',
    APP_ID = 'bb78bb73'

    if (action.type !== actions.apiCallBegan.type) return next(action)

    const { method, data, onStart, onSuccess, onError, query } = action.payload 

    if (onStart) dispatch({ type: onStart })
    next(action) 

    try {
        const res = await axios.request({
            baseURL: `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
            method,
            data
        })
        dispatch(actions.apiCallSuccess(res.data.hits));
     
        if (onSuccess) {
            dispatch({ type: onSuccess, payload: res.data.hits})
        }
    }   catch (error) {
        dispatch(actions.apiCallFailed(error.message))

        if (onError) dispatch({ type: onError, payload: error.message})
    }
}
 
export default api;