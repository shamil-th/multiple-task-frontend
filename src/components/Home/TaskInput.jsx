import React from 'react';
import Style from './Home.module.css'

const TaskInput = ({ handleAddNew, index, task, handleRemoveOne, inputChange }) => {
  const handleChange = (e) => {
    inputChange(index, e.target.value);
  };

  return (
    <div className={Style.taskInput}>
        <input type="text" value={task.subtask} placeholder={`input${index}`} onChange={handleChange} />
        <div className={Style.count}>
        {index > 0 ? <button onClick={() => handleRemoveOne(index)}>-</button> : <button onClick={handleAddNew}>+</button>}
        </div>
    </div>
  );
};

export default TaskInput;
