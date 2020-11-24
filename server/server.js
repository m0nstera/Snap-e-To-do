const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

const {
    selectAllTodos, insertNewTodo, updateTodo, removeTodo
  } = require('../database/queries');

app.use(express.static('../client/dist'));
app.use(express.json()); // Alternative to BodyParser
app.use(cors());

// GET -- full list of todo
app.get('/todos', (req, res) => {
    selectAllTodos((err, results) => {
      if (err) {
        res.status(400);
      } else {
        res.status(200).send(results);
      }
    });
  });

// INSERT -- one todo
app.post("/todos", (req, res) => {
  let body = req.body;
  console.log("body: ", body);
  insertNewTodo(body, (err, results) => {
    if (err) {
      console.log('Post query unsuccessful');
      res.status(400);
    } else {
      console.log('Post query successful');
      res.status(201).send(results);
    }
  })
});

// UPDATE -- one todo
app.put("/todos/:id", (req, res) => {
    let id = req.params.id;
    updateTodo(id, (err, results) => {
      if (err) {
        console.log('Completion error from DB')
        res.status(404);
      } else {
        console.log('Completion successful from database');
        res.status(201).send(results);
      }
    })
  });

// DELETE -- one todo
app.delete("/todos/:id", (req, res) => {
  let id = req.params.id;
  removeTodo(id, (err, results) => {
    if (err) {
      res.status(404);
    } else {
      res.status(200).send(results);
    }
  })
});

app.listen(PORT, () => {
    console.log(`Server running and listening on port: ${PORT}`);
});
