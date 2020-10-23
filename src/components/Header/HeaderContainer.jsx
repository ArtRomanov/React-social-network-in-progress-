import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {getAuthUserData} from './../../Redux/authReducer'
import { logout } from '../../Redux/authReducer';


class HeaderContainer extends React.Component  {
  componentDidMount() {
     this.props.getAuthUserData()
  }



  render() {
    return <Header {...this.props}/>

  }
}
let mapStateToProps = (state) => ({
  login: state.authReducer.login,
  isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);