const express = require('express');
const app = express();
const PORT = 3000;
const {
    selectAllTodos, selectOneTodo, insertNewTodo, updateTodo, removeTodo
  } = require('../database/queries');

app.use(express.static('../client/dist'));
app.use(express.json()); // Alternative to BodyParser

// GET -- full list of todos
app.get('/Todos', (req, res) => {
    selectAllTodos((err, results) => {
      if (err) {
        res.sendStatus(404, err);
      } else {
        res.send(results);
      }
    });
  });

// INSERT -- one todo
app.post("/Todos/", (req, res) => {
  let body = req.body;
  // let item = req.body.item;
  // let boolean = req.body.completed;
  insertNewTodo(body, (err, results) => {
    if (err) {
      res.sendStatus(404, err);
    } else {
      res.sendStatus(201);
    }
  })
});

// UPDATE -- one todo
app.put("/Todos/:id", (req, res) => {
    let id = req.params.id;
    updateTodo(id, (err, results) => {
      if (err) {
        res.sendStatus(404, err);
      } else {
        res.sendStatus(201);
      }
    })
  });


// DELETE -- one todo
app.delete("/Todos/:id", (req, res) => {
  let id = req.params.id;
  removeTodo(id, (err, results) => {
    if (err) {
      res.sendStatus(404, err);
    } else {
      res.send(results);
    }
  })
});

app.listen(PORT, () => {
    console.log(`Server running and listening on port: ${PORT}`);
});
