import React, { useEffect, useState } from "react";
import Style from "./Task.module.css";
import { useDispatch } from "react-redux";

const SubTask = ({ Itemsubtask, index, isItem, setIsItem }) => {
  const [completed, setCompleted] = useState(Itemsubtask.completed);
  const [subtask, setSubtask] = useState(Itemsubtask.subtask);

  let dispatch = useDispatch();
  useEffect(() => {
    const newStatus = [...isItem];
    newStatus[index] = { ...newStatus[index], subtask, completed };
    setIsItem(newStatus);
  }, [completed]);

  return (
    <div className={Style.subtask_box}>
      <input
        type="checkbox"
        id={index}
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      <label htmlFor={index}>{subtask}</label>
    </div>
  );
};

export default SubTask;
