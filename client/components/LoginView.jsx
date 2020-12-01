import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const LoginView = () => {

  return (
    <div className="login-container">
    <InputGroup className="login-form">
      <FormControl
        placeholder="username"
        aria-label="username"
        />
    </InputGroup>
    <Button className="login-btn" variant="outline-secondary">Login</Button>
    </div>
  )
};

export default LoginView;