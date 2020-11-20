import React from 'react';
// import axios from 'axios';
// import query from './routes';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this. = this..bind(this);
  }
  // componentDidMount() {};

  // getProductQs() {
  //   const getId = this.state.getId;
  //   query.reqProductQs(getId, (err, data) => {
  //     if (err) {
  //       throw err;
  //     } else {
  //       this.setState({qList: data.data.results});
  //     }
  //   });
  // }

  // productName() {
  //   const getId = this.state.getId;
  //   axios.get(`http://52.26.193.201:3000/products/${getId}`)
  //       .then((res) => {
  //         this.setState({productName: res.data.name});
  //       })
  //       .catch((err) => console.error(err));
  // }

  // isHelpfulQ(questID) {
  //   axios.put(`http://52.26.193.201:3000/qa/question/${questID}/helpful`)
  //       .then((res) => {
  //         console.log(res);
  //         this.setState();
  //       })
  //       .catch((err) => console.error(err));
  // }

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
