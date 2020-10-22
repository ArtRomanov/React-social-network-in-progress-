import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { maxLength, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControl/FormsControls'
const maxLength50 = maxLength(50)

const Form = (props) => {
    
    return (<form onSubmit = {props.handleSubmit}>
        <div>
            <Field name={'field'} component={Textarea} type="text" 
            validate={[required, maxLength50]}/>
            </div>
            <div>
                <button >Send message</button>
            </div>
    </form>)            
        
}
const DialogsReduxForm = reduxForm({form: 'dialogs'})(Form)

const DialogsForm = (props) => {
    
    return <DialogsReduxForm onSubmit = {(value)=>props.addNewMessage(value)}/>
}

export default DialogsForm;