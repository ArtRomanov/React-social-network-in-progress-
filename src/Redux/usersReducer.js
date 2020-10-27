import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/helper/objectHelper";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE' ,
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
    let initialState = {
        users: [],
        currentPage: 1,
        pageSize: 50,
        totalUsersCount: 0,
        isFetching: false,
        followingInProgress: []   
};    


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}) 
            }
        case UNFOLLOW: 
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,'id', {followed: false}) 
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.fetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS: 
            return {
                ...state,
                followingInProgress: action.fetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
    default: return state;
    };
}

export const follow = (userId) => ({type: FOLLOW, userId })
export const unfollow = (userId) => ({type: UNFOLLOW, userId })
export const setUsers = (users) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count })
export const toggleIsFetching = (fetching) => ({type: TOGGLE_IS_FETCHING, fetching })
export const toggleFollowingProgress = (fetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, fetching, userId })


export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await usersAPI.getUsers(currentPage, pageSize)
        
            dispatch(setCurrentPage(currentPage))
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setUsersTotalCount(response.totalCount))
} 

const followUnfollowFlow = async (dispatch, userId, userAPImethod, actionCreater) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await userAPImethod

        dispatch(toggleFollowingProgress(false, userId))

        if(response.resultCode === 0) {
            dispatch(actionCreater(userId))
        }}

export const unfollowThunk = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollowDelete(userId), unfollow)
}
export const followThunk = (userId) =>  (dispatch) => {

    followUnfollowFlow(dispatch, userId, usersAPI.followPost(userId), follow)
}



export default userReducer;
