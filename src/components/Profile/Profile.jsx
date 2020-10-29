import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return <div>
    <ProfileInfo profile = {props.profile} 
      status = {props.status} 
      updateStatus = {props.updateUserStatus}
      isOwner = {props.isOwner}
      savePhoto = {props.savePhoto}
      lookingForAJob = {"yes"}
      saveData = {props.saveData}/>
    <MyPostsContainer header='Мои посты'/>
  </div>
}
export default Profile;