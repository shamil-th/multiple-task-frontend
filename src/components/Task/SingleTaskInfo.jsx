import React from "react";
import Style from "./Task.module.css";

const SingleTaskInfo = ({ item, list, setNewList, index }) => {
  const complete = () => {
    const newList = [...list];
    if (newList[index].completed === true) {
      newList[index] = { ...newList[index], completed: false };
    } else {
      newList[index] = { ...newList[index], completed: true };
    }
    setNewList(newList);
  };
  return (
    <div className={Style.task_box}>
      <input type="checkbox" id={item.task} onChange={complete} checked={list?.[index]?.completed===true}/>
      <label htmlFor={item.task}>{item.task}</label>
    </div>
  );
};

export default SingleTaskInfo;
