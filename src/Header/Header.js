import React from 'react';
import PropTypes from 'prop-types';
import '../Header/Header.css';
import { NavLink, Link } from 'react-router-dom';
import yellowTomatoIcon from '../images/yellowTomato.png';

const Header = ({ loggedIn, updateLoginStatus, updateUserId }) => {
  return (
    <header className='Header'>
      <nav>
        
          <img className='icon' src={yellowTomatoIcon} />
        <label className='logo'>Rancid Tomatillos</label>
        
        <ul>
          <li><NavLink to='/' className='nav-link active' aria-label='Go home'>HOME</NavLink></li>
          {loggedIn &&
            <li><NavLink to='/favorites' className='nav-link active' aria-label="View favorites">FAVORITES</NavLink></li>
          }
        
        {loggedIn &&
            <li><Link to='/'><button onClick={() => {
            updateLoginStatus(false);
            updateUserId(null);
          }}>LOG OUT</button></Link></li>
        }
        {!loggedIn &&
            <li><Link to='/login' className='nav-link active'>LOG IN</Link></li>
        }
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  updateLoginStatus: PropTypes.func,
  updateUserId: PropTypes.func
}

export default Header

