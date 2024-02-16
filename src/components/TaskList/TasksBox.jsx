import React, { useState } from "react";
import Style from "./TaskList.module.css";
import PinConfirmation from "./PinConfirmation";

const TasksBox = ({ task }) => {
  const [confModal,setConfModal] = useState(false)
  const taskDetails = (id) => {
    setConfModal(true)
  };

  return (
    <div className={Style.task_item}>
      <h1>{task.taskTitle}</h1>
      <p>Created on: {task.createdAt.slice(0,10)}</p>
      <button onClick={()=>taskDetails(task._id)}></button>
      {confModal&&<PinConfirmation id={task._id} pin={task.pin} setConfModal={setConfModal}/>}
    </div>
  );
};

export default TasksBox;
