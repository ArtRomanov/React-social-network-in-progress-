import React from 'react'

import s from './Friends.module.css'
import FriendsItem from './FriendsItem/FriendsItem'
const Friends = (props) => {

    let sort = props.state.map(item => <FriendsItem name={item.name} key = {item.id} alt={item.alt} src={item.userpic}/>);
    return (
        <div className={s.friends}>
            <div>
                <h2>Friends</h2>
            </div>
            <div className={s.friendsBlock}>
                {sort}
            </div>
        </div>
    )
}

export default Friends;