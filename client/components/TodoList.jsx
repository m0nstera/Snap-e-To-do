import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Todo from './Todo.jsx';
import AddItemBtnModal from './AddItemBtnModal.jsx';

const TodoList = ({todoList, getTodos, handleInput, handleSubmit, handleDelete, handleComplete}) => {
  const mappedList = todoList.map((todo, i) => <Todo
    todo={todo}
    key={i}
    handleDelete={handleDelete}
    handleComplete={handleComplete}
    />);

  return (
    <Container>
      <Row>
        <Col>
          <h1>To-do Items</h1>
        </Col>
        <Col>
          <AddItemBtnModal
            getTodos={getTodos}
            handleInput={handleInput}
            handleSubmit={handleSubmit}/>
        </Col>
      </Row>
      {mappedList}
    </Container>
  )
};

export default TodoList;
