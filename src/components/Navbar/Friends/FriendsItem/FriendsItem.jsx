import React from 'react'
import s from './FriendsItem.module.css'
const FriendsItem = (props) => {
    return (
        
        <div className={s.item}>
            <div className={s.friendsBlock}>
                 <img alt={props.alt} src={props.src}></img>
            </div>
            <h5>{props.name}</h5>
        </div>
    )
}

export default FriendsItem;