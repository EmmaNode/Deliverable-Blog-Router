import React, { Component } from 'react';


class FavoriteMovie extends Component {
  render() {
    return (
      <div className="FavoriteMovie">
        <h1>FavoriteMovie</h1>
          <p>{this.props.params}</p>
      </div>
    );
  }
}

export default FavoriteMovie;
