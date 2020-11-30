import React, {useState}  from 'react';
import query from '../lib/routes';
import DeleteBtn from './DeleteBtn.jsx';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

const Todo = ({todo, handleDelete, handleComplete, handleChange, handleInput, item, checked, handleCheck}) => {
  // const [clicked, setClick] = useState([]);
  // const handleCheck = (e) => {
  //   setClick({ ...clicked, [e.target.name]: e.target.checked });
  // };
  // const handleCheck = ({ target : { item, checked } }) => {
  //   setClick({
  //     ...clicked,
  //     [item]: checked
  //   })
  // }
  // const handleShow = (item) => {
  //   setClick(item);
  // };

  return (
    <div>
        <Row>
          <Col>
            <ListGroup.Item>
            <Form.Check
              type="checkbox"
              id={todo.id}
              label={todo.item}
              name={todo.item}
              value={todo.id}
              onClick={handleComplete}
              onChange={handleCheck}
              checked={checked}
              // onChange={handleInput}
              // onChange={e => onChange(e.target.checked)}
              // checked={clicked[todo.item]}
              custom
            />
            </ListGroup.Item>
          </Col>
          <Col>
            <DeleteBtn
            handleDelete={handleDelete}
            id={todo.id}/>
          </Col>
        </Row>
    </div>
  );
};

export default Todo;

              /* <input
              type="checkbox"
              checked={checked}
              id={todo.id}
              name={todo.item}
              value={todo.id}
              onClick={handleComplete}
              />
              <label for={todo.item}> &nbsp; {todo.item}</label> */