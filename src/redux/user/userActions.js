import axios from 'axios'
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from './userTypes'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
} 

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (err) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: err
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(err => {
            const errorMsg = err.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}