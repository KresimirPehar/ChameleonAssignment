import React from 'react';

const Task = ({ value }) => {
  return (
    <div>
      <input value={value.text} onChange={() => {}} />
    </div>
  );
};

export default Task;
