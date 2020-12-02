import React, {useState} from 'react';
import Todo from './Todo.jsx';
import AddItemBtnModal from './AddItemBtnModal.jsx';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoList = ({todoList, getTodos, handleInput, handleSubmit, handleDelete, handleComplete}) => {
  const mappedList = todoList.map((todo, i) => <Todo
    todo={todo}
    key={todo.id}
    handleDelete={handleDelete}
    handleComplete={handleComplete}
    />);

  return (
    <div className="todo-list-component">
      <Row
        className="h1-add-item-row"
        xs={12} md={12} lg={12}>
        <Col>
          <h1>To-do Items</h1>
        </Col>
        <Col>
          <AddItemBtnModal
            className="add-item-btn"
            getTodos={getTodos}
            handleInput={handleInput}
            handleSubmit={handleSubmit}/>
        </Col>
      </Row>
      <ListGroup>
        {mappedList}
      </ListGroup>
    </div>
  )
};

export default TodoList;
