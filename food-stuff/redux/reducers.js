import * as actionTypes from './types.js'

const [
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED
] = actionTypes

const initialState = {
    isLoading: false,
    error: null,
    userData: {},
}

export default (state = initialState, action) => {
    switch(action.type){
        case CREATE_USER_START: {
            return {
              ...state,
              isLoading: true,
            }
          }
          case CREATE_USER_SUCCESS: {
            console.log(action.payload)
            return {
              ...state,
              isLoading: false,
              error: null,
            }
          }
          case CREATE_USER_FAILED: {
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