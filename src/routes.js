import React from 'react'
import { Route, Switch, Redirect, Router, NavLink }  from 'react-router'
import Blog from './containers/Blog'
import Contacts from './containers/Contacts'
import Home from './containers/Home'
import Podcasts from './containers/Podcasts'
import Products from './containers/Products'
import Story from './containers/Story'

import Navbar from './containers/Navbar'

export default (
  <Switch>
      <Route exact component={Home} path='/' />
      <Route exact component={Blog} path='/blog' />
      <Route exact component={Contacts} path='/contacts' />
      <Route exact component={Podcasts} path='/podcasts' />
      <Route exact component={Products} path='/products' />
      <Route exact component={Story} path='/my-story' />
  </Switch>
)
