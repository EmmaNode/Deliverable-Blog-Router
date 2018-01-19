import React, { Component } from 'react';

const allPosts = this.props.posts.map(p => {
  return <div>
      <h2 className="Title">{p.title}</h2>
      <Author author={p.author} />
      <p className="Post-intro">
        {p.content}
      </p>
      <h3> Comments:</h3>
      <Comment comments={p.comments} />
      <br />
      <br />
    </div>
});

export default post;
