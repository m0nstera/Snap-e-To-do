import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginView = ({username, handleUsername, clickLogin}) => {

  return (
    <Form
      className="login-container"
      onSubmit={clickLogin}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control required type="email"
          placeholder="enter email"
          maxLength="80"
          aria-label="username input"
          value={username}
          onChange={handleUsername}/>
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        Login
      </Button>
    </Form>
  )
};

export default LoginView;
