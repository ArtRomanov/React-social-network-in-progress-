import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.css'


 const Navbar = (props) => {

    return <nav className={s.nav}>
      <div className='menu'>
          <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink> 
          </div>
          <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink> 
          </div>
          <div className={s.item}>
            <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink> 
          </div>
          <div className={s.item}>
            <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink> 
          </div>
          <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink> 
          </div>
      </div>
      <Friends state={props.friendsItem}/>
  </nav>
}
const mapStateToProps = (state) => ({

friendsItem: state.navBarFriendsReducer.navBarFriends.friendsItem
})

export default connect(mapStateToProps)(Navbar) ;