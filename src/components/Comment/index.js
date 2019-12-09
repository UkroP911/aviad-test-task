import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Comment = (props) => {
  return(
    <Card>
      <CardBody>
        {props.id}
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.body}</CardText>
        <CardSubtitle>{props.email}</CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default Comment;
