import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'

const DeleteBtn = ({handleDelete, id}) => {

  return (
    <div>
      <Button type="button" variant="light"
      onClick={handleDelete}
      id={id}>
        🗑️
      </Button>
    </div>
  );
};

export default DeleteBtn;
