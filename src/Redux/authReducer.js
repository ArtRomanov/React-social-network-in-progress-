import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA', 
      GET_CAPTCHA_URL_SUCCESS= 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
      id: null,
      email: null,
      login: null,
      isAuth: false,
      captchaUrl: null
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS:
      return {
      ...state,
      ...action.payload
      } 
    default:
      return state;
  };
}

export const setAuthUserData = (id, email, login, isAuth) => { 
  return {type: SET_USER_DATA, payload:{id, email, login, isAuth}} };

export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}}
}

export const getAuthUserData = () => async (dispatch) => {
    let response = await  authAPI.me()
    
      if(response.resultCode === 0) {
        
        let {email, id, login} = response.data 
        dispatch(setAuthUserData(id, email, login, true))
      }    
}

export const login = (email, password, rememberMe, captcha) => async(dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    
      if(response.resultCode === 0) {
        dispatch(getAuthUserData())
      }else {
        if (response.resultCode === 10) {
          dispatch(getCaptchaUrl())
        }
        dispatch(stopSubmit('login', {
          _error: response.messages.length > 0 ? response.messages[0] : ''
        }))
      }    
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout()
      if(response.resultCode === 0) { 
        dispatch(setAuthUserData(null,null,null,false))
      }

}

export const getCaptchaUrl = () => async (dispatch) => {
  
  let response = await securityAPI.getCaptchaUrl()
  dispatch(getCaptchaUrlSuccess(response.data.url))
     
}





export default authReducer;