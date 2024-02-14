import React, { useState } from "react";
import Style from "./Home.module.css";

const TaskModal = ({ setModal, addSingleTask }) => {
  const [title, setTtile] = useState("");
  const [type,setTaskType] = useState('task')
  const hideModal = () => {
    setModal(false);
  };
  const addTask = () => {
    const data = {title, type}
    if (type === "task") {
        addSingleTask(data);
      }
    if (type === "group") {
        addSingleTask(data);
      }
    setModal(false);
  };

//   const taskType = (value) => {

//   };

  return (
    <div className="overlay">
      <div className={Style.modal}>
        <h1>Add New Block</h1>
        <input
          type="text"
          value={title}
          placeholder="Enter new Title"
          onChange={(e) => setTtile(e.target.value)}
        />
        <select name="" id="" value={type} onChange={(e) => setTaskType(e.target.value)}>
          <option value="task">Task</option>
          <option value="group">Grouped Task</option>
        </select>
        <div className={Style.buttons}>
          <button onClick={addTask}>Save</button>
          <button onClick={hideModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
