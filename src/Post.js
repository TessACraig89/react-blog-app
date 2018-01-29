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
        {/* use map to loop through comments array and for each comment run function that  */}
            {/* returns Comment body (from Comment.js) with value of comment (from index.js)  */}
        {this.props.comments.map((comment) => {
            return <Comment body={comment} />
          })}
      </div>
    );
  }
}

export default Post;
