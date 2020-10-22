import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import DialogsForm from './DialogItem/DialogsForm'
import s from './Dialogs.module.css'
import Message from './Message/Message'


const Dialogs = (props) => {
    let state = props.state;
    let dialogsElements =state.dialogs.map(d =>  <DialogItem name={d.name} id={d.id} key = {d.id} userpic={d.userpic}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key = {m.id}/>)
   
    let addNewMessage = (value) => {
        props.addNewMessage(value.field);
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <DialogsForm addNewMessage = {addNewMessage} />
            </div>
        </div>)
}
export default Dialogs;
