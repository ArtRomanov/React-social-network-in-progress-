import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';
import navBarFriendsReducer from './navBarFriendsReducer';
import userReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleWare from 'redux-thunk'

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    navBarFriendsReducer,
    userReducer,
    authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;

export default store;
