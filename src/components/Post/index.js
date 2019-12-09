import React from "react";
import {Jumbotron} from 'reactstrap';

const Post = (props) => {
  return (
    <Jumbotron>
      <h1 className="display-3">{props.title}</h1>
      <p className="lead">{props.body}</p>
    </Jumbotron>
  )
};

export default Post;
