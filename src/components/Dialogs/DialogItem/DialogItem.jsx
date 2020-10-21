import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'
import sDialogItem from './DialogItem.module.css'

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active + ' ' + sDialogItem.item}>
        <img alt='dimych' src={props.userpic}></img>
        <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>  
 </div>
}
export default DialogItem;
