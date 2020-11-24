import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DeleteBtn from './DeleteBtn.jsx';
import query from '../lib/routes';

const Todo = ({todo, handleDelete, handleComplete}) => {

  return (
    <div>
      <ul>
        <Row>
          <Col>
            <li>
              <input
              type="checkbox"
              id={todo.id}
              name={todo.item}
              value={todo.id}
              onClick={handleComplete}/>
              <label for={todo.item}> &nbsp; {todo.item}</label>
            </li>
          </Col>
          <Col>
            <DeleteBtn
            handleDelete={handleDelete}
            id={todo.id}/>
          </Col>
        </Row>
      </ul>
    </div>
  );
};

export default Todo;
