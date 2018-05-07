import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <ul>
    <li><NavLink exact to='/' activeClassName='active-menu-link' >Home</NavLink></li>
    <li><NavLink to='/blog' activeClassName='active-menu-link' >Blog</NavLink></li>
    <li><NavLink to='/products' activeClassName='active-menu-link' >Products</NavLink></li>
    <li><NavLink to='/podcasts' activeClassName='active-menu-link' >Podcasts</NavLink></li>
    <li><NavLink to='/my-story' activeClassName='active-menu-link' >MyStory</NavLink></li>
    <li><NavLink to='/contact' activeClassName='active-menu-link' >Contact</NavLink></li>
  </ul>
)

export default Navbar
