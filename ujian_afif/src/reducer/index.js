import { combineReducers } from 'redux'
import Auth from "./auth"

const AllReducers = combineReducers({
    Auth: Auth,
})

export default AllReducers