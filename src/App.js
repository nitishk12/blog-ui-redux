import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import UsersList from './components/UsersList';
import UsersShow from './components/UsersShow';
import PostsList from './components/PostsList'
import PostsShow from './components/PostsShow'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link style={{ paddingLeft: 10 }} to='/'>Home</Link>
        <Link style={{ paddingLeft: 10 }} to='/users'>Users</Link>
        <Link style={{ paddingLeft: 10 }} to='/posts'>Posts</Link>

        <Route path='/' component={Home} exact={true} />
        <Route path='/users' component={UsersList} exact={true} />
        <Route path='/users/:id' component={UsersShow} />
        <Route path='/posts' component={PostsList} exact={true} />
        <Route path='/posts/:id' component={PostsShow} exact={true} />
      </div>
    </BrowserRouter>
  );
}

export default App;
