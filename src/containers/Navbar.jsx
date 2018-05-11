import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

const arr = [
  {
    text: 'HOME',
    to: '/'
  }, 
  {
    text: 'BLOG',
    to: '/blog'
  }, 
  {
    text: 'PRODUCTS',
    to: '/products'
  }, 
  {
    text: 'PODCASTS',
    to: '/podcasts'
  }, 
  {
    text: 'MY STORY',
    to: '/my-story'
  }, 
  {
    text: 'CONTACT',
    to: '/contacts'
  }
];

const Navbar = () => (
  <ul>
      {arr.map((item, index) => <li key={index}><NavLink exact to={item.to} activeClassName='active-menu-link' >{item.text}</NavLink></li>)}
  </ul>
)

export default Navbar
