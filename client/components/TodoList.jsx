import React, {useState} from 'react';
import Todo from './Todo.jsx';

const TodoList = ({todoList}) => {
  const mappedList = todoList.map((todo, i) => <Todo
    todo={todo}
    key={i}
    />);

  return (
    <div>
      {mappedList}
    </div>
  )
};

export default TodoList;
