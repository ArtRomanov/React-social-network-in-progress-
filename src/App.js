import React from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './App.css';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import store from './Redux/reduxStore';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import {initializedApp} from './Redux/appReducer'
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(()=> import ('./components/Dialogs/DialogsContainer') );
const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'))
const LoginPage = React.lazy(()=> import('./Login/Login'))

class AppContainer extends React.Component {
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
    <Navbar />
    <div className = 'app-wrapper-content'>
      <Route path='/dialogs'
              render={ () => withSuspense(DialogsContainer)}/>
      <Route path='/profile/:userId?' 
              render={ () => withSuspense(ProfileContainer)}/>
      <Route path='/users'
              render={ () => <UsersContainer
              />}/>
      <Route path='/login'
              render={ () => withSuspense(LoginPage)}/>
      <Route path='/news' component={News}/>
      <Route path='/music' component={Music}/>
      <Route path='/settings' component={Settings}/>
    </div>
  </div>)
  }
     
};

const mapStateToProps = (state) =>  ({
  initialized: state.appReducer.initialized
})
let AppMain = compose(
  withRouter, 
  connect(mapStateToProps, {initializedApp}))
  (AppContainer)
;

const App = (props) => {
  return <BrowserRouter>
    <Provider store = {store}>
      
            <AppMain/>
    </Provider>
    </BrowserRouter>
}
export default App