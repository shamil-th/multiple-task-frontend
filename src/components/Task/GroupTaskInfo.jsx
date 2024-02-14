import React from "react";
import Style from "./Task.module.css";

const GroupTaskInfo = ({ item }) => {
  return (
    <div className={Style.task_box}>
      <h4>{item.title}</h4>
      {item.task.map((subtask, index) => (
        <div key={index} className={Style.subtask_box}>
          <input type="checkbox" id={subtask.subtask} />
          <label htmlFor={subtask.subtask}>{subtask.subtask}</label>
        </div>
      ))}
    </div>
  );
};

export default GroupTaskInfo;
