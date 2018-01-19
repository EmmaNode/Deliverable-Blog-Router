import React, { Component } from 'react'
import './App.css';
//importing react-router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//importing page components
import HomePage from './HomePage.js';
import FavoriteMovie from './FavoriteMovie.js';
import FavoriteFood from './FavoriteFood.js';
import MainBlog from './MainBlog.js';
import Author from './Author.js';
import Comment from './Comment.js'



class Post extends Component {
  render() {
    return (
      <Router>
        <nav>
          <Link to="/"> home page </Link>
          <Link to="/FavoriteMovie">FavoriteMovie </Link>
          <Link to="/FavoriteFood">FavoriteFood </Link>
          <Link to="/MainBlog">MainBlog </Link>
        </nav>
          <Route exact path="/" component={HomePage} />
          <Route path="/FavoriteMovie" component={FavoriteMovie} />
          <Route path="/FavoriteFood" component={FavoriteFood} />
          <Route path="/MainBlog" component={
            () => (<Post posts={this.props.post} />
            )}/>

        </div>
      </Router>
    );
  }
}


export default Post;
