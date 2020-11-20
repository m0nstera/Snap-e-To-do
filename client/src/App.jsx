import React from 'react';
// import query from './routes';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() {};


  render() {
    const {} = this.state;
    return (
      <div>
        <Container className="to-do-container">
          <div>
            <h1>To-do List</h1>
          </div>
        </Container>
      </div>
    );
  };
};

export default App;
