import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./TaskList.module.css";

const TasksBox = ({ task }) => {
  let navigate = useNavigate();
  const taskDetails = (id) => {
    navigate(`/task/${id}`);
  };

  return (
    <div className={Style.task_item}>
      <h1>{task.taskTitle}</h1>
      <p>Created on: {task.createdAt.slice(0,10)}</p>
      <button onClick={()=>taskDetails(task._id)}></button>
    </div>
  );
};

export default TasksBox;
