import React from 'react';

const Task = ({ value, onEdit }) => {
  return (
    <div>
      <input type='text' defaultValue={value.text} onChange={onEdit} />
    </div>
  );
};

export default Task;
