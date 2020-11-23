import React from 'react';
import query from '../lib/routes';
import TodoList from '../components/TodoList.jsx';
import Container from 'react-bootstrap/Container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todoItem: '',
    };
  }
  componentDidMount() {
    this.getTodos();
  };

  getTodos() {
    query.getAllTodos((err, data) => {
      if (err) {
        throw err;
      } else {
        console.log(data.data.rows);
        this.setState({todoList: data.data.rows});
      }
    });
  }

  render() {
    const {todoList,} = this.state;
    return (
      <div>
        <Container className="to-do-container">
          <div>
            <h1>To-do Items</h1>
          <TodoList
            todoList={todoList}/>
          </div>
        </Container>
      </div>
    );
  };
};

export default App;
