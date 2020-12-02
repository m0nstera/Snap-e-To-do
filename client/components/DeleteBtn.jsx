import React from 'react';
import Button from 'react-bootstrap/Button'

const DeleteBtn = ({handleDelete, id}) => {

  return (
    <div className="delete-btn">
      <Button className="delete-btn"
        type="button"
        variant="outline-light"
        onClick={handleDelete}
        id={id}>
        🗑️
      </Button>
    </div>
  );
};

export default DeleteBtn;
