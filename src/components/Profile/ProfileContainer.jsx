import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../Redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    
      let userId = this.props.match.params.userId
      if (!userId) {
        userId = 12105;
    }
      this.props.getUserProfile(userId)
      this.props.getUserStatus(userId)

  }

  
  render() {
    return (<Profile {...this.props} profile = {this.props.profile} />)
  }
}

let mapStateToProps = (state) => ({
   profile: state.profileReducer.profile,
   isAuth: state.authReducer.isAuth,
   status: state.profileReducer.status
})

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
