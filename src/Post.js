import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <h1>The title of this book is {this.props.title}</h1>
        <h2>The author of this book is {this.props.author}</h2>
        <p>The body of this book is {this.props.body}<br></br>and the comments are {this.props.comments}</p>
      </div>
    );
  }
}

export default Post;
