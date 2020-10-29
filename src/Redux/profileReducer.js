import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";


const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    GET_USER_STATUS = 'GET_USER_STATUS',
    SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {...state.profile,
        photos: action.photos}
      }
    }
    
    default: return state;
    };
}

export const addPostActionCreater = (post) => ({type: ADD_POST, post})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: GET_USER_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})



export const getUserProfile = (userId) => 
  async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
            dispatch(setUserProfile(response))
    }


export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
      dispatch(setUserStatus(response))
      
}

export const updateUserStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
   
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
     
}
export const savePhoto = (photos) => async (dispatch) => {
  let response = await profileAPI.uploadPhoto(photos)
   
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos))
    }
     
}
export const saveData = (profile) => async (dispatch, getState) => {
  
  let response = await profileAPI.uploadData(profile)
  const userId = getState().authReducer.id;
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId))
    }else {
      dispatch(stopSubmit('contact-form', { _error: response.data.messages[0]}))
      return Promise.reject(response.data.messages[0])
    }    
     
}




export default profileReducer;
