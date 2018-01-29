import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Post
    title={"Title"}
    author={"Author"}
    body={"Body"}
    comments= {["comment1", " comment2", " comment3"]}
  />,
  document.getElementById('root')
);

registerServiceWorker();
