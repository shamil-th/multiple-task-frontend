import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleTask } from "../../features/taskSlice";
import SingleTaskInfo from "./SingleTaskInfo";
import GroupTaskInfo from "./GroupTaskInfo";
import Style from "./Task.module.css";

const Task = () => {
  const task = useSelector((state) => state.tasklist.task);
  const status = useSelector((state) => state.tasklist.status);
  console.log("task", task);
  let dispatch = useDispatch();
  let id = useParams();
  useEffect(() => {
    dispatch(singleTask(id.id));
  }, [id]);

  return (
    <div className="container">
      <div className={Style.task_form}>
        {status === "succeeded" && (
          <>
            <h1>{task?.taskTitle}</h1>
            {task.list.map((item) =>
              item.type === "task" ? (
                <SingleTaskInfo item={item} key={item._id} />
              ) : (
                <GroupTaskInfo item={item} key={item._id} />
              )
            )}{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
