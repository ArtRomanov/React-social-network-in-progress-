import React from 'react'
import { connect } from 'react-redux';
import { setUsers, setCurrentPage, setUsersTotalCount,
        getUsersThunkCreator,unfollowThunk, followThunk } from '../../Redux/usersReducer';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
           
    }
    onPageChange = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

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
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCount: state.userReducer.totalUsersCount,
        currentPage: state.userReducer.currentPage,
        isFetching: state.userReducer.isFetching,
        followingInProgress: state.userReducer.followingInProgress
    }
}

export default connect(mapStateToProps, 
        {setUsers, setCurrentPage, setUsersTotalCount,
        getUsersThunkCreator, unfollowThunk, followThunk})
        (UsersContainer)

 

