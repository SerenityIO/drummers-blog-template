import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

const Navbar = () => (
  <ul>
      <li><NavLink exact to='/' activeClassName='active-menu-link' >Home</NavLink></li>
      <span>●</span>
      <li><NavLink to='/blog' activeClassName='active-menu-link' >Blog</NavLink></li>
      <span>●</span>
      <li><NavLink to='/products' activeClassName='active-menu-link' >Products</NavLink></li>
      <span>●</span>
      <li><NavLink to='/podcasts' activeClassName='active-menu-link' >Podcasts</NavLink></li>
      <span>●</span>
      <li><NavLink to='/my-story' activeClassName='active-menu-link' >My Story</NavLink></li>
      <span>●</span>
      <li><NavLink to='/contacts' activeClassName='active-menu-link' >Contact</NavLink></li>
  </ul>
)

export default Navbar
