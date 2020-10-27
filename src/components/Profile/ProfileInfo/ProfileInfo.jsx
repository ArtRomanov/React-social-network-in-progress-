import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import photo from '../../../assets/images/user.png'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';
 const ProfileInfo = ({profile, status, updateStatus}) => {
   //Если profile null или undefined
   if(!profile){
     return <Preloader/>
   }
    return <div>
              <div className={s.descriptionBlock}>
                <img alt = 'userPic' className = {s.commonProfilePhoto} src={profile.photos.small !== null ? profile.photos.small : photo}/>
                <ProfileStatusWithHooks profile = {profile} status = {status} updateStatus = {updateStatus}/>
              </div>
            </div>
}
export default ProfileInfo;