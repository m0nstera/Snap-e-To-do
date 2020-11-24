import React from 'react';
import axios from 'axios';

const getAllTodos = (cb) => {
  return axios.get(`http://localhost:3000/todos/`)
      .then((data) => cb(null, data))
      .catch((err) => cb(err, null));
};

const postTodo = (newTodo) => {
  console.log("new todo: ", newTodo);
  return axios.post(`http://localhost:3000/todos`, newTodo)
    .then((res) => res.data)
    .catch((err) => console.log('Error posting from client: ', err));
};

const putTodo = (id) => {
  return axios.put(`http://localhost:3000/todos/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log('Error completing task: ', err));
};

const deleteTodo = (id) => {
  console.log('ID: ', id);
  return axios.delete(`http://localhost:3000/todos/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log('Error deleting from client: ', err));
}

export default {
  getAllTodos,
  postTodo,
  putTodo,
  deleteTodo
};