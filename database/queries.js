// brew services start postgresql
// createdb Todos
// Test API in Postman
const { connection } = require('./connection.js');

connection.connect();

const selectAllTodos = (cb) => {
  connection.query("SELECT * FROM Todos", (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const insertNewTodo = (body, cb) => {
  // console.log('BODY ', body);
  connection.query(`INSERT into Todos (id, item, completed) values(${body.id}, ${body.item}, ${body.completed})`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const updateTodo = (id, cb) => {
  connection.query(`Update Todos SET completed = NOT completed WHERE id = ${id}`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const removeTodo = (todoObj, cb) => {
  let todoItem = todoObj.item;
  connection.query(`DELETE FROM Todos WHERE item = ${todoItem}`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

// module.exports = {selectAllTodos, insertNewTodo, updateTodo, removeTodo};
