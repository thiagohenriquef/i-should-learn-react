import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Home'
import User from '../components/User'

export default props => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route path='/users' component={User}></Route>
    <Redirect from='*' to='/'></Redirect>
  </Switch>
)