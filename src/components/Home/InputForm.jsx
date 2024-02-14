import React, { useEffect } from "react";
import SingleTask from "./SingleTask";
import GroupTask from "./GroupTask";
import { useDispatch, useSelector } from "react-redux";
import { setAllTask } from "../../features/taskSlice";

const InputForm = ({ singleInput,setTaskTitle, taskTitle }) => {
  const allTask = useSelector((state) => state.tasklist.allTask)
  let dispatch = useDispatch();
  useEffect(()=>{
dispatch(setAllTask({...allTask,taskTitle:taskTitle}))
  },[taskTitle])

  return (
    <div>
      <label htmlFor="title">Collection Name</label>
      <input type="text" value={taskTitle} placeholder="enter collection name" onChange={(e)=>setTaskTitle(e.target.value)} />
      {singleInput && singleInput.map((task, index) => (
        <React.Fragment key={index}>
          {task.type === "task" && (
            <SingleTask task={task} singleInput={singleInput} index={index} />
          )}
          {task.type === "group" && (
            <div key={index}>
              <h1>{task.title}</h1>
              <GroupTask index={index} singleInput={singleInput} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};


export default InputForm;
