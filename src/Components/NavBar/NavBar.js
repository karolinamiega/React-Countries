/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
  return (
    <div className='NavBar'>
      <ul>
        <li><a href='#' onClick={() => navigate('/')}>Home</a></li>
        <li><a href='#' onClick={() => navigate('SearchForACountry')}>Search</a></li>
      </ul>
    </div>
  )
}

export default NavBar
