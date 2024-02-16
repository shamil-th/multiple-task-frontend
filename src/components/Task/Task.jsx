import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setList, singleTask, updateTaskStatus } from "../../features/taskSlice";
import SingleTaskInfo from "./SingleTaskInfo";
import GroupTaskInfo from "./GroupTaskInfo";
import Style from "./Task.module.css";

const Task = () => {
  const task = useSelector((state) => state.tasklist.task);
  const status = useSelector((state) => state.tasklist.status);
  const [newList, setNewList] = useState([]);
  console.log('newlist',newList);

  useEffect(() => {
    setNewList(task.list);
  }, [task]);

  // console.log("task", task);
  let dispatch = useDispatch();
  let id = useParams();

  useEffect(() => {
    dispatch(singleTask(id.id));
  }, [id]);

  useEffect(()=>{
    dispatch(setList(task.list))
  },[task])

  const updateStatus = () => {
    const data = { id: id.id, newList };
    dispatch(updateTaskStatus(data));
    setTimeout(() => {
      dispatch(singleTask(id.id));
    }, 1000);
  };

  return (
    <div className="container">
      <div className={Style.task_form}>
        {status === "succeeded" && (
          <>
            <h1>{task?.taskTitle}</h1>
            {task.list.map((item, index) =>
              item.type === "task" ? (
                <SingleTaskInfo
                  item={item}
                  key={item._id}
                  setNewList={setNewList}
                  index={index}
                  list={newList}
                />
              ) : (
                <GroupTaskInfo
                  item={item}
                  key={item._id}
                  setNewList={setNewList}
                  index={index}
                  newList={newList}
                />
              )
            )}
          </>
        )}
        <div className={Style.buttons}>
          <button onClick={updateStatus}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
