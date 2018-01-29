import React, { Component } from 'react';

import './Post.css';
import Comment from './Comment.js'


class Post extends Component {
  // when our component is initialized,
  // our constructor function is called
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      title: "My initial blog title",
      author: "My initial blog author",
      body: "My initial blog post body",
      comments: ["My first comments at first", "My second comment at first", "My third comment at first"]
    }
  }
  editBlogPost (e) {
    // setState() to tell React that this component and its children need to be re-rendered with the updated state.
      // using prompt, display dialog box asking for user input to body thats text is "update blog post" and default text is this.state.body
    this.setState({
      body: prompt("update blog post", this.state.body)
    })
  }
  render() {
    return (
      <div className="Post">
        <header className="Post-header">
          <h1>{this.props.title}</h1>
          <p>By {this.props.author}</p>
        </header>
        <article className="Post-body">
          <p>{this.state.body}</p>
          <h3>Comments:</h3>
          {/* use map to loop through comments array and for each comment run function that  */}
              {/* returns Comment body (from Comment.js) with value of comment (from index.js)  */}
          {this.state.comments.map((comment) => {
              return <Comment body={comment} />
            })}
          </article>
          {/* create edit method that updates body based on user input */}
          <button onClick={(e) => this.editBlogPost(e)}>Update Post?</button>
        </div>
    );
  }
}

export default Post;
