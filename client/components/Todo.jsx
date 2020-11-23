import React from 'react';

const Todo = ({todo}) => {

  return (
    <div>
      <ul>
        <li>
          {todo.item}
        </li>
      </ul>
    </div>
  );
};

export default Todo;
