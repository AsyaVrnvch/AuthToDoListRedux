import { combineReducers } from 'redux'
import tasklist from './taskReducer'
import account from './accountReducer'

export default combineReducers({
    account,
    tasklist,
})