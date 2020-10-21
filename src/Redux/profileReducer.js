import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE';

    let initialState = {
        posts: [{
            id: 1,
            message: 'Hi how r u?',
            likesCount: 12
          },
          {
            id: 2,
            message: 'Yo',
            likesCount: 10
          }
        ],
        newPostText: '',
        profile: null
}    

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
                  ...state.posts,
                  {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                  }],
        newPostText: ''};
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText}
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default: return state;
    };
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const updateNewPostTextOptionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
    .then(response =>{
            dispatch(setUserProfile(response))
    })
       
  }
}

export default profileReducer;
