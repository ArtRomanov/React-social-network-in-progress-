import React from 'react';
import s from './ProfileInfo.module.css'
import styles from '../../../components/common/FormsControl/FormsControls.module.css'
import { Field, reduxForm} from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControl/FormsControls';
import { required } from '../../../utils/validators/validators';

const EditContactInfo = ({handleSubmit, error, contacts}) => {
  return <form onSubmit = {handleSubmit}>
    <div><button>Save</button></div>
    
    {error && <div className={styles.errorForm}>{error}</div>}
    <div>
      <b>Fullname: </b> 
      <Field name = {'fullName'} placeholder ={'Full name'}  component={Input} validate={[required]}/>
    </div>
    <div>
      <b>Looking for a job: </b> 
      <Field name = {'lookingForAJob'}  type="checkbox" component={'input'}/>
    </div>
    <div>
      <b>About job searching: </b> 
      <Field name = {'lookingForAJobDescription'}  placeholder ={'About job searching:'} component={Textarea}/>
    </div>
    <div>
      <b>About me: </b> 
      <Field name = {'aboutMe'}  placeholder ={'About me'} component={Textarea} validate={[required]}/>
    </div>
    <b>Contacts</b>: {Object.keys(contacts).map(key => {
          return <div key={key} className={s.contact}>
          <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
          </div>
      })}
  </form>     
}
export const EditContacts = reduxForm({form: 'contact-form'})(EditContactInfo)