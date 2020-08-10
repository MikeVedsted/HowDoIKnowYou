import { apiCall } from './api/api'
import {
	CHANGE_SEARCH_FIELD,
	REQUEST_USERS_PENDING,
	REQUEST_USERS_SUCCESS,
	REQUEST_USERS_FAILED
} from './constants'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestUsers = () => (dispatch) => {
  dispatch({ type: REQUEST_USERS_PENDING })
  // apiCall('https://randomuser.me/api/?results=50&seed=vedsted&inc=name,location,email,cell,id,picture&noinfo&format=pretty')
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_USERS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_USERS_FAILED, payload: error }))
}
