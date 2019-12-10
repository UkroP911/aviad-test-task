import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Comment = (props) => {
  return(
    <Card className="mb-2">
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.body}</CardText>
        <CardSubtitle>{props.email}</CardSubtitle>
      </CardBody>
    </Card>
  )
};

export default Comment;
