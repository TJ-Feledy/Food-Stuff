import * as types from './types.js'
import { combineReducers } from 'redux'


const initialState = {
    isLoading: false,
    error: null,
    userData: {},
}

// CREATE USER REDUCER
const createUserReducer = (state = initialState, action) => {
    switch(action.type){
        case types.CREATE_USER_START: {
            return {
              ...state,
              isLoading: true,
            }
          }
          case types.CREATE_USER_SUCCESS: {
            console.log(action.payload)
            return {
              ...state,
              isLoading: false,
              error: null,
            }
          }
          case types.CREATE_USER_FAILED: {
            console.log(action.payload)
            return {
              ...state,
              isLoading: false,
              error: action.payload.error
            }
          }
        default:
            return {...state}
    }
}

// COMBINE REDUCERS
const reducers = {
  createUserReducer,
}

export default combineReducers(reducers)