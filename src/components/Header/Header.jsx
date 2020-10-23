import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
 const Header = (props) => {
    return <header className={s.header}>
        <img alt='lion' src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'></img>
        <div className = {s.loginBlock}>
          {props.isAuth 
          ? <div>{props.login} 
              <div>
                <button onClick = {props.logout}>Logout</button>
              </div>
            </div>    
          : <NavLink to = {'/login/'}>Login</NavLink>}
        </div>
      </header>
}
export default Header;