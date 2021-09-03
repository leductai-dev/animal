import {combineReducers} from 'redux'
import userInfo from './Auth'
import App from './App'

const appReducers = combineReducers({
    userInfo,App
})
export default appReducers;
