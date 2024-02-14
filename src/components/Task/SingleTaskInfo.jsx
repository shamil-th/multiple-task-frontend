import React from 'react';
import Style from "./Task.module.css";

const SingleTaskInfo = ({item}) => {
  return (
    <div  className={Style.task_box}>
        {/* <h6>{item.title}</h6> */}
        <input type="checkbox" id={item.task}/>
        <label htmlFor={item.task}>{item.task}</label>
    </div>
  )
}

export default SingleTaskInfo