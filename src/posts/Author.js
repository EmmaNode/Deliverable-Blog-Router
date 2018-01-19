import React, {Component} from 'react';

class Author extends Component {
  render() {
    //can only take ONE element, aka one div for example
    return (
      <div>
      <em>{this.props.author}</em>
      </div>
    );
  }
}
//enables other files to include this and what part to include
export default Author;
