import { createStore, combineReducers } from 'redux'
import { countReducer, todoReducer } from './reducers'

const reducers = combineReducers({ countReducer, todoReducer })

export default createStore(reducers)
