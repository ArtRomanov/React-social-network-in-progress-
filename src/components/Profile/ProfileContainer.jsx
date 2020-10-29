import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveData} from '../../Redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  refreshProfile () {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorisedUserId;
      
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)

  }
  
  componentDidMount() {

    this.refreshProfile()    
  }

  componentDidUpdate(prevProps) {

    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()    

    }
  }

  
  render() {
    return (<Profile {...this.props}
      profile = {this.props.profile}
      isOwner ={!this.props.match.params.userId}/>)
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  isAuth: state.authReducer.isAuth,
  status: state.profileReducer.status,
  authorisedUserId: state.authReducer.id
})

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveData}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
