import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import store from './Redux/store';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './Login/Login'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import {initializedApp} from './Redux/appReducer'

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp()
 }

  render () {
    if(!this.props.initialized) {
      return <Preloader/>
    }
    return (
    <div className='app-wrapper'>
    <HeaderContainer/>
    <Navbar state={store.getState().navBarFriends}/>
    <div className = 'app-wrapper-content'>
      <Route path='/dialogs'
              render={ () => <DialogsContainer 
                />}/>
      <Route path='/profile/:userId?' 
              render={ () => <ProfileContainer 
              /> }/>
      <Route path='/users'
              render={ () => <UsersContainer
              />}/>
      <Route path='/login'
              render={ () => <LoginPage
              />}/>
      <Route path='/news' component={News}/>
      <Route path='/music' component={Music}/>
      <Route path='/settings' component={Settings}/>
    </div>
  </div>)
  }
     
};

const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized
})

export default compose(
  withRouter, 
  connect(mapStateToProps, {initializedApp}))
  (App)
;
