import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import photo from '../../../assets/images/user.png'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';
import { useState } from 'react';
import { EditContacts } from './EditContactInfo';

const Contacts = ({profile, isOwner, editMode, setEditMode}) => {
     
  return <form>
    {isOwner && !editMode &&
     <button onClick = {()=>setEditMode(true)}>Edit profile</button>}

    {profile.fullName 
    && <div>
         <h3>{profile.fullName}</h3>
       </div>}
    <div>
      <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
     </div>
     {profile.lookingForAJob
     &&  <div>
           <b>About job searching: </b> 
           {profile.lookingForAJobDescription}
         </div> }
       <div>
         <div>
           <b>About me</b>: {profile.aboutMe}
         </div>
       </div>

     {Object.keys(profile.contacts).map(key => { 
      return <div key = {key}>
               <b >{key}: </b>{profile.contacts[key]}
             </div>})}
  </form>
}

 const ProfileInfo = ({profile, status, updateStatus,isOwner, savePhoto, saveData}) => {

   const [editMode, setEditMode] = useState(false)

   if(!profile){
     return <Preloader/>
   }
   const uploadPhoto = (e) => {
     if(e.target.files.length){
      savePhoto(e.target.files[0])
     }
   }

   const onSubmit = (formData) => {
    saveData(formData).then(() => setEditMode(false));
   }


  
    return <div>
              <div className={s.descriptionBlock}>
                <img alt = 'userPic' className = {s.commonProfilePhoto}
                 src={profile.photos.small !== null ? profile.photos.small : photo}/>

                {isOwner && <input type='file' onChange ={uploadPhoto}/>}
                
                <ProfileStatusWithHooks 
                  profile = {profile}
                  status = {status}
                  updateStatus = {updateStatus}/>
                
                {!editMode && <Contacts profile = {profile} isOwner = {isOwner} editMode = {editMode} setEditMode={setEditMode}/>}
                {editMode && <EditContacts initialValues = {profile} onSubmit = {onSubmit}
                contacts = {profile.contacts}/>}
              </div>
            </div>
}
export default ProfileInfo;