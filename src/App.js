import React from 'react';
import { Route } from 'react-router-dom';
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

const App = () => {

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
      </div>
  );
}
export default App;
