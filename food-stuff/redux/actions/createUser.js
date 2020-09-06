import axios from 'axios'

import * as actionTypes from '../types.js'

export const createUser = (username, password) => {
    return (dispatch) => {
        dispatch({type: actionTypes.CREATE_USER_START})
    
        return axios.post('https://build-week-foodiefun.herokuapp.com/api/auth/register', {username, password})
          .then((res) => {
            localStorage.setItem('token', res.data.token)
            dispatch({type: actionTypes.CREATE_USER_SUCCESS})
          })
          .catch((err) => {
            const payload = err.response ? err.response.data : err
            dispatch({type: actionTypes.CREATE_USER_FAILED, payload})
          })
      }
}