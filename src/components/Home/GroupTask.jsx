import React, { useState } from "react";
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

  // remove one input field
  const handleRemoveOne = (index) => {
    setInputRow((prevInputRow) => {
      const updatedInputRow = [...prevInputRow];
      updatedInputRow.splice(index, 1);
      updateGtask(updatedInputRow);
      return updatedInputRow;
    });
  };

  // Update inputRow state with new value
  const inputChange = (index, value) => {
    setInputRow((prevInputRow) => {
      const updatedInputRow = prevInputRow.map((task, i) => {
        if (i === index) {
          return { ...task, subtask: value };
        }
        return task;
      });
      updateGtask(updatedInputRow);
      return updatedInputRow;
    });
  };

  const updateGtask = (updatedInputRow) => {
    const updatedData = [...singleInput];
    updatedData[index] = {
      ...updatedData[index],
      task: updatedInputRow,
    };

    dispatch(setSingleInput(updatedData));
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
