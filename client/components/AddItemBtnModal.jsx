import React, {useState} from 'react';
import AddItemForm from './AddItemForm.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddItemBtnModal = ({getTodos, handleInput, handleSubmit}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        className="add-to-do"
        variant="dark"
        size="md"
        onClick={handleShow}
      >Add Item
      </Button>

      <Modal
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          Add an item to your list!
        </Modal.Header>
        <Modal.Body>
          <AddItemForm
            onHide={handleClose}
            getTodos={getTodos}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddItemBtnModal;
