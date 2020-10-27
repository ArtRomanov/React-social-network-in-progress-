import React from 'react'
import { connect } from 'react-redux';
import { setUsers, setCurrentPage, setUsersTotalCount,
        getUsersThunkCreator,unfollowThunk, followThunk } from '../../Redux/usersReducer';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import { getUsers,getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from './usersSelector';

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        
        this.props.getUsersThunkCreator(currentPage, pageSize)
           
    }
    onPageChange = (pageNumber) => {
        const {pageSize} = this.props

        this.props.getUsersThunkCreator(pageNumber, pageSize)

    }
       
    render() {
        
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        
        
        <Users onPageChange = {this.onPageChange}
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                users = {this.props.users}
                followingInProgress = {this.props.followingInProgress}
                unfollowThunk = {this.props.unfollowThunk}
                followThunk = {this.props.followThunk}
                />
                
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize (state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, 
        {setUsers, setCurrentPage, setUsersTotalCount,
        getUsersThunkCreator, unfollowThunk, followThunk})
        (UsersContainer)

 

