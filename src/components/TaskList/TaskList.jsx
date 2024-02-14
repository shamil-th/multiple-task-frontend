import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskListCollecton } from "../../features/taskSlice";
import TasksBox from "./TasksBox";
import Style from "./TaskList.module.css";

const TaskList = () => {
  const tasklist = useSelector((state) => state.tasklist.tasklist);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(taskListCollecton());
  }, []);

  return (
    <div className="container">
      <div className={Style.task_manager} >
        <h1>Task Manager</h1>
      {tasklist?.map((task, index) => (
        <TasksBox task={task} index={index} key={index}/>
      ))}
    </div>
    </div>
  );
};

export default TaskList;
