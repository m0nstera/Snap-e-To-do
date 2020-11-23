import axios from 'axios';

const getAllTodos = (cb) => {
  axios.get(`http://localhost:3000/todos/`)
      .then((data) => cb(null, data))
      .catch((err) => cb(err, null));
};

const postTodo = (newTodo, cb) => {
  axios.post(`http://localhost:3000/todos/`, newTodo)
    .then(() => cb(null))
    .catch((err) => cb(err, null));
}

const putTodo = (id, cb) => {
  axios.put(`http://localhost:3000/todos/${id}`)
    .then(() => cb(null))
    .catch((err) => cb(err, null));
}

const deleteTodo = (id, cb) => {
  axios.delete(`http://localhost:3000/todos/${id}`)
    .then((data) => cb(null, data))
    .catch((err) => cb(err, null));
}

export default {
  getAllTodos,
  postTodo,
  putTodo,
  deleteTodo
};