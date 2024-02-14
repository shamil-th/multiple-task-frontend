import React, { useEffect, useRef, useState } from "react";
import TaskInput from "./TaskInput";
import { useDispatch } from "react-redux";
import { setSingleInput } from "../../features/taskSlice";

const GroupTask = ({singleInput,index}) => {
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

  //   remove one input field
  const handleRemoveOne = (index) => {
    const updatedInputRow = [...inputRow];
    updatedInputRow.splice(index, 1);
    setInputRow(updatedInputRow);
  };


  let dispatch = useDispatch();

  const updateGtask = (value) => {
    const updatedData = [...singleInput];
    const singleTask = updatedData[index];
    dispatch(setSingleInput(updatedData))
  }
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
      // console.log(inputRow)
      updateGtask(value);
      
      // setSingleInput[index] = 
      // dispatch(setSingleInput())
    }, 500);
  };
  useEffect(() =>{
    console.log(inputRow)

  },[inputRow])

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
