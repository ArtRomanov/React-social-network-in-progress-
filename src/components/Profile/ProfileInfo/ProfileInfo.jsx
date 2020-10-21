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
              {/* <div>
                <img alt='beach' src='https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'></img>
              </div> */}
              <div className={s.descriptionBlock}>
                <img alt = 'userPic' className = {s.commonProfilePhoto} src={props.profile.photos.small !== null ? props.profile.photos.small : photo}/>
                <ProfileStatus profile = {props.profile}/>
              </div>
            </div>
}
export default ProfileInfo;