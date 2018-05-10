import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

const Navbar = () => (
  <ul>
      <li><NavLink exact to='/' activeClassName='active-menu-link' >HOME</NavLink></li>
      <span>•</span>
      <li><NavLink to='/blog' activeClassName='active-menu-link' >BLOG</NavLink></li>
      <span>•</span>
      <li><NavLink to='/products' activeClassName='active-menu-link' >PRODUCTS</NavLink></li>
      <span>•</span>
      <li><NavLink to='/podcasts' activeClassName='active-menu-link' >PODCASTS</NavLink></li>
      <span>•</span>
      <li><NavLink to='/my-story' activeClassName='active-menu-link' >MY STORY</NavLink></li>
      <span>•</span>
      <li><NavLink to='/contacts' activeClassName='active-menu-link' >CONTACT</NavLink></li>
  </ul>
)

export default Navbar
