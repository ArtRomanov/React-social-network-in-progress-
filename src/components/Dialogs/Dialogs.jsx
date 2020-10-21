import React from 'react'
import { Redirect } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'


const Dialogs = (props) => {
    let state = props.state;
    let dialogsElements =state.dialogs.map(d =>  <DialogItem name={d.name} id={d.id} key = {d.id} userpic={d.userpic}/>);
      
    let messagesElements = state.messages.map(m => <Message message={m.message} key = {m.id}/>)
        
    let addNewMessage = () => {
        props.addNewMessage();
    }
    let onChange = (e) => {
        let text = e.target.value;
        props.onChange(text)
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
            <div>
                <textarea   value={props.state.newMessageBody}
                            onChange = {onChange}/>
            </div>
            <div>
                <button onClick={addNewMessage}>Add post</button>
            </div>
        </div>
        
    </div>
)
}
export default Dialogs;
