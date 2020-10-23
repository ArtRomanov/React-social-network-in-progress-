import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';
import navBarFriendsReducer from './navBarFriendsReducer';
import userReducer from './usersReducer'
import authReducer from './authReducer'
import appReducer from './appReducer'

import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    navBarFriendsReducer,
    userReducer,
    authReducer,
    form: formReducer,
    appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;

export default store;
