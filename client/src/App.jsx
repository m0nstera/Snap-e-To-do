import React from 'react';
import axios from 'axios';
import query from '../lib/routes';
import LoginView from '../components/LoginView.jsx';
import TodoList from '../components/TodoList.jsx';
import PieChartComp from '../components/PieChartComp.jsx';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      displayMain: false,
      // displayLogin: true,
      todoList: [],
      item: '',
    };
    this.getTodos = this.getTodos.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.clickLogin = this.clickLogin.bind(this);
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

  handleUsername(e) {
    this.setState({
      username: e.target.value})
  };

  clickLogin() {
    this.setState({
      displayMain: !this.state.displayMain})
  }

  handleInput(e) {
    this.setState({
      item: e.target.value});
  };

  handleSubmit(e) {
    e.preventDefault();
    const item = this.state.item;
    query.postTodo({item: item})
      .then(res => res)
      .then(this.getTodos())
      .catch(err => console.log('Error: ', err));
  };

  handleDelete(e) {
    e.preventDefault();
    const id = e.target.id;
    query.deleteTodo(id)
      .then(res => res)
      .then(this.getTodos())
      .catch(err => console.log('Error deleting: ', err));
  };

  handleComplete(e) {
    e.preventDefault();
    const id = e.target.id;
    query.putTodo(id)
      .then(res => res)
      .then(this.getTodos())
      .catch(err => console.log('Error completing: ', err));
  };

  render() {
    const {todoList, displayMain} = this.state;

    return (
      <div>
        <Container className="to-do-container">
          <LoginView
            handleUsername={this.handleUsername}
            clickLogin={this.clickLogin}
          />
          {displayMain === false ? ''
          :
          <>
          <PieChartComp
            todoList={todoList}
          />
          <TodoList
            todoList={todoList}
            getTodos={this.getTodos}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            handleDelete={this.handleDelete}
            handleComplete={this.handleComplete}
          /></>}
        </Container>
      </div>
    );
  };
};

export default App;
