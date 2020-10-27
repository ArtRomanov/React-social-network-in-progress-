import React from 'react'
import userPhoto from '../../assets/images/user.png'
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';

let Users = (props) => {
   

    return <div>
            <Paginator onPageChange={props.onPageChange} currentPage={props.currentPage} 
            totalItemsCount = {props.totalUsersCount} pageSize = {props.pageSize}/>
            <div>
            {props.users.map ( u =>
             <User user = {u} userPhoto ={userPhoto} followingInProgress ={props.followingInProgress}
             followThunk ={props.followThunk} unfollowThunk ={props.unfollowThunk}/>  
            )}
            </div>
            
             
       
    </div>
}


export default Users;