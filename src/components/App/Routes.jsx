import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './MenuComponents/Home/Home'
import Blog from './MenuComponents/Blog/Blog'
import Products from './MenuComponents/Products/Products'
import Podcasts from './MenuComponents/Podcasts/Podcasts'
import MyStory from './MenuComponents/MyStory/MyStory'
import Contact from './MenuComponents/Contact/Contact'

const Menu = () => {
    return (
      <ul>
        <li><NavLink exact to="/" activeClassName="active-menu-link" >Home</NavLink></li>
        <li><NavLink to="/blog" activeClassName="active-menu-link" >Blog</NavLink></li>
        <li><NavLink to="/products" activeClassName="active-menu-link" >Products</NavLink></li>
        <li><NavLink to="/podcasts" activeClassName="active-menu-link" >Podcasts</NavLink></li>
        <li><NavLink to="/my-story" activeClassName="active-menu-link" >MyStory</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active-menu-link" >Contact</NavLink></li>
      </ul>
    );
  }

const Routs = () => (
    <Router>
        <div>
            <Menu />
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/products" component={Products} />
            <Route path="/podcasts" component={Podcasts} />
            <Route path="/my-story" component={MyStory} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
);

export default Routs;