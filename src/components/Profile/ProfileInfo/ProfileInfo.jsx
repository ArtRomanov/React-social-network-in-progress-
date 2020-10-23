import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import photo from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus';
 const ProfileInfo = (props) => {
   //Если props.profile null или undefined
   if(!props.profile){
     return <Preloader/>
   }
    return <div>
              <div className={s.descriptionBlock}>
                <img alt = 'userPic' className = {s.commonProfilePhoto} src={props.profile.photos.small !== null ? props.profile.photos.small : photo}/>
                <ProfileStatus profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
              </div>
            </div>
}
export default ProfileInfo;