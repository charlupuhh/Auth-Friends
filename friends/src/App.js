import React from 'react';
import {Route} from 'react-router-dom'
import  { Login  } from './components/Login'
import Navigation from './components/Navigation'
import { FriendsList } from './components/FriendsList'
import { FriendForm } from './components/FriendForm'
import PrivateRoute from './utils/PrivateRoute'


import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Friends App</h1>
      <Route  path='/' component={Navigation} />

      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/friendslist' component={FriendsList} />
      <PrivateRoute exact path='/addfriend' component={FriendForm} />
    </div>
  );
}

export default App;