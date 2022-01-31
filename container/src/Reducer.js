import { combineReducers } from 'redux'
import CommonProfile from './reducer/CommonProfile'
import Widget from 'dashboard/Widget'

export default combineReducers({
    CommonProfile,
    Widget
})
