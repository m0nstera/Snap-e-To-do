import React from 'react';
import DeleteBtn from './DeleteBtn.jsx';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Todo = ({todo, handleDelete, handleComplete}) => {

  return (
    <div>
        <Row
        xs={12} md={8} lg={7}
        className="li-row">
          <Col>
            <li className="list-item">
            <Form.Check
              type="checkbox"
              id={todo.id}
              label={todo.item}
              name={todo.item}
              value={todo.item}
              onClick={handleComplete}
              checked={todo.completed}
              custom
            />
            </li>
          </Col>
          <Col>
            <DeleteBtn
              handleDelete={handleDelete}
              id={todo.id}/>
          </Col>
        </Row>
    </div>
  );
};

export default Todo;

              /* <input
              type="checkbox"
              checked={checked}
              id={todo.id}
              name={todo.item}
              value={todo.id}
              onClick={handleComplete}
              />
              <label for={todo.item}> &nbsp; {todo.item}</label> */