import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './users.module.css'

export const User = ({user, userPhoto, followingInProgress, unfollowThunk, followThunk}) => {
    return (<div>
       
            <span>
                <div>
                    <NavLink to = {`/profile/${user.id}`}>
                    <img alt = 'hui' src = {user.photos.small !== null ? user.photos.small : userPhoto} className = {styles.usersPhoto}/>
                    </NavLink>
                </div>
                <div> 
                    {user.followed ? <button disabled = {followingInProgress.some(id => id === user.id)} onClick = {()=>{
                            unfollowThunk(user.id)
                        }}>Unfollow</button> 

                    : <button disabled = {followingInProgress.some(id => id === user.id)} onClick = {()=>{
                        followThunk(user.id)
                    }}>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>        
                </span>
                <span>
                    <div>{"wasap fellas"}</div>
                    <div>{'u.location.city'}</div>
                </span> 
            </span>
    </div>)
}