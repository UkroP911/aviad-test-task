import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const AddComment = (props) => {
  const [formData, setFormData] = React.useState({postId: props.postId});
  
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };
  const handleForm = (e) => {
    e.preventDefault();
    fetch('https://test.steps.me/test/testAssignComment', {
      method: 'POST',
      body: JSON.stringify({
        ...formData
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  };
  return(
    <Form onSubmit={handleForm}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Title</Label>
        <Input type="text" name="name" id="name" onChange={handleInput}/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Body</Label>
        <Input type="textarea" name="body" id="body" onChange={handleInput}/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" onChange={handleInput}/>
      </FormGroup>
      <div className="py-2">
        <Button>Submit</Button>
      </div>
    </Form>
  )
};

export default AddComment;
