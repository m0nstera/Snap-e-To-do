import React from 'react';
import axios from 'axios';
import query from '../lib/routes';
import TodoList from '../components/TodoList.jsx';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      completed: [],
      item: '',
    };
    this.getTodos = this.getTodos.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  };

  getTodos() {
    query.getAllTodos((err, data) => {
      if (err) {
        throw err;
      } else {
        this.setState({todoList: data.data.rows});
      }
    });
  };

  handleInput(e) {
    this.setState({item: e.target.value});
  };

  handleSubmit(e) {
    e.preventDefault();
    const item = this.state.item;
    console.log("item: ", item);
    query.postTodo({item: item})
      .then(res => res)
      .then(this.getTodos())
      .catch(err => console.log('Error: ', err));
  };

  handleDelete(e) {
    e.preventDefault();
    const id = e.target.id;
    console.log('APP ID: ', id);
    query.deleteTodo(id)
      .then(res => res)
      .then(this.getTodos())
      .catch(err => console.log('Error deleting: ', err));
  };

  handleComplete(e) {
    e.preventDefault();
    const id = e.target.id;
    console.log('APP ID', id);
    query.putTodo(id)
      .then(res => res)
      .then(this.getTodos())
      .catch(err => console.log('Error completing: ', err));
  };

  render() {
    const {todoList,} = this.state;
    return (
      <div>
        <Container className="to-do-container">
          <TodoList
            todoList={todoList}
            getTodos={this.getTodos}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            handleDelete={this.handleDelete}
            handleComplete={this.handleComplete}/>
        </Container>
      </div>
    );
  };
};

export default App;
