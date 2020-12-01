import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const AddItemForm = ({onHide, getTodos, handleInput, handleSubmit}) => {

  return (
    <div>
      <Form>
        <Form.Row>
          <Col>
            <Form.Control size="lg" type="text" placeholder="To-do Item"
            onChange={handleInput}/>
          </Col>
          <Button variant="outline-secondary"
          type="submit"
          onClick={(e) => { onHide(); handleSubmit(e)}}
          >
            Submit
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default AddItemForm;
