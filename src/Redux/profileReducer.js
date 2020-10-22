import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    GET_USER_STATUS = 'GET_USER_STATUS';

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
        profile: null,
        status: ''
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
                    message: action.post,
                    likesCount: 0
                  }]
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case GET_USER_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default: return state;
    };
}

export const addPostActionCreater = (post) => ({type: ADD_POST, post})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: GET_USER_STATUS, status})


export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId)
    .then(response =>{
            dispatch(setUserProfile(response))
    })  
  }
}

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response =>{
            dispatch(setUserStatus(response))
    })  
  }
}
export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response =>{
      if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
      }
    })  
  }
}



export default profileReducer;
