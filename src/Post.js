import React, { Component } from 'react';

import './Post.css';
import Comment from './Comment.js'


class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By {this.props.author}</p>
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        {this.props.comments.map((comment) => {
            return <Comment body={comment} />
          })}
        {/* <Comment body={this.props.comments.body} /> */}
      </div>
    );
  }
}

export default Post;
