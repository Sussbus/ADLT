import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import auth from './auth'
import login from './login'

export default combineReducers({
    auth,
    login,
    routing: routerReducer
})
