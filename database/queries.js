const { connection } = require('./connection.js');
connection.connect();

//order by completed or created at time, ascending v descending
const selectAllTodos = (cb) => {
  connection.query(`SELECT * FROM public."snapTodos" order by created_at asc`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const insertNewTodo = (body, cb) => {
  connection.query(`INSERT INTO public."snapTodos"(item) VALUES ('${body.item}');`, (err, results) => {
    if (err) {
      // console.log('Error posting to DB');
      cb(err, null);
    } else {
      // console.log('Success posting todo to DB');
      cb(null, results);
    }
  });
};

const updateTodo = (id, cb) => {
  connection.query(`UPDATE public."snapTodos" SET completed = NOT completed WHERE id = ${id}`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const removeTodo = (id, cb) => {
  connection.query(`DELETE FROM public."snapTodos" WHERE id = ${id}`, (err, results) => {
    if (err) {
      // console.log('Error deleting from Db');
      cb(err, null);
    } else {
      // console.log('Entry deleted from DB');
      cb(null, results);
    }
  });
};

module.exports = {selectAllTodos, insertNewTodo, updateTodo, removeTodo};
