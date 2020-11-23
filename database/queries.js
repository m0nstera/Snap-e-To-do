const { connection } = require('./connection.js');
connection.connect();

const selectAllTodos = (cb) => {
  connection.query(`SELECT * FROM public."snapTodos"`, (err, results) => {
    if (err) {
      console.log("PROBLEM FETCHING TODOS");
      cb(err, null);
    } else {
      console.log("SUCCESSSSSSSS");
      cb(null, results);
    }
  });
};

const insertNewTodo = (body, cb) => {
  // console.log('BODY ', body);
  connection.query(`INSERT into public."snapTodos" (item) values(${body.item})`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const updateTodo = (id, cb) => {
  connection.query(`Update public."snapTodos" SET completed = NOT completed WHERE id = ${id}`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const removeTodo = (todoObj, cb) => {
  let todoItem = todoObj.item;
  connection.query(`DELETE FROM public."snapTodos" WHERE item = ${todoItem}`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports = {selectAllTodos, insertNewTodo, updateTodo, removeTodo};
