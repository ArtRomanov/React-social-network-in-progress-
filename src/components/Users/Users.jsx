import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<pagesCount;i++) {
        pages.push(i);}

    return <div>
            <div> {pages.map( p => 
            { return <span onClick={()=>{props.onPageChange(p)}} 
                            className={props.currentPage === p && styles.selectedPage}>{p}</span>})}
            </div>
        {props.users.map ( u => <div key = {u.id}>
            <span>
                <div>
                    <NavLink to = {`/profile/${u.id}`}>
                    <img alt = 'user.pic' src = {u.photos.small !== null ? u.photos.small : userPhoto} className = {styles.usersPhoto}/>
                    </NavLink>
                </div>
                <div> 
                    {u.followed ? <button disabled = {props.followingInProgress.some(id => id === u.id)} onClick = {()=>{
                            props.unfollowThunk(u.id)
                        }}>Unfollow</button> 

                    : <button disabled = {props.followingInProgress.some(id => id === u.id)} onClick = {()=>{
                        props.followThunk(u.id)
                    }}>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>        
                </span>
                <span>
                    <div>{"wasap fellas"}</div>
                    <div>{'u.location.city'}</div>
                </span> 
            </span>
        </div>)}
    </div>
}


export default Users;