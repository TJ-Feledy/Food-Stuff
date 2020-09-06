import { combineReducers } from 'redux'
import createUser from './createUser.js'

const rootReducer = combineReducers({
    createUser: createUser,
})

export default rootReducer