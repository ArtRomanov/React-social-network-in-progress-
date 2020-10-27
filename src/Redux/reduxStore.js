import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';
import navBarFriendsReducer from './navBarFriendsReducer';
import userReducer from './usersReducer'
import authReducer from './authReducer'
import appReducer from './appReducer'

import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    navBarFriendsReducer,
    userReducer,
    authReducer,
    form: formReducer,
    appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleWare)))

window.__store__ = store;

export default store;
