import React, { useEffect, useRef, useState } from "react";
import TaskInput from "./TaskInput";
import { useDispatch } from "react-redux";
import { setSingleInput } from "../../features/taskSlice";

const GroupTask = ({ singleInput, index }) => {
  const [inputRow, setInputRow] = useState([
    {
      subtask: "",
      completed: false,
    },
  ]);

  //  add new input field
  const handleAddNew = () => {
    const newField = {
      subtask: "",
      completed: false,
    };
    setInputRow([...inputRow, newField]);
  };


  
  let dispatch = useDispatch();

  const updateGtask = () => {
    const updatedData = [...singleInput];
    updatedData[index] = {
      ...updatedData[index],
      task: inputRow,
    };
    dispatch(setSingleInput(updatedData));
  };

  
  //   remove one input field
  const handleRemoveOne = (index) => {
    const updatedInputRow = [...inputRow];
    updatedInputRow.splice(index, 1);
    setInputRow(updatedInputRow);
    updateGtask();
  };

  // Update inputRow state with new value
  const inputChange = (index, value) => {
    const updatedInputRow = inputRow.map((task, i) => {
      if (i === index) {
        return { ...task, subtask: value };
      }
      return task;
    });
    setInputRow(updatedInputRow);
    setTimeout(() => {
      updateGtask();
    }, 500);
  
  };

  return (
    <div>
      <h2></h2>
      {inputRow.map((task, index) => (
        <TaskInput
          task={task}
          index={index}
          handleAddNew={handleAddNew}
          handleRemoveOne={handleRemoveOne}
          inputChange={inputChange}
          key={index}
        />
      ))}
    </div>
  );
};

export default GroupTask;
