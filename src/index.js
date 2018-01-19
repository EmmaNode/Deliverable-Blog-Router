import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var posts = [{
  title: "Dinosaurs are awesome",
  content: "Check out this body property!",
  author: "Steathly Stegosaurus",
  comments: ["First!", "Great Post", "Hire this author now" ]
}, {
  title: "Dinosaurs are awesome",
  content: "Check out this body property!",
  author: "Steathly Stegosaurus",
  comments: ["First!", "Great Post", "Hire this author now" ]
}];


ReactDOM.render(<Post posts={posts} />, document.getElementById('root'));
registerServiceWorker();
