import React from "react";
import SingleTask from "./SingleTask";
import GroupTask from "./GroupTask";

const InputForm = ({ singleInput }) => {
  return (
    <div>
      <label htmlFor="title">Collection Name</label>
      <input type="text" placeholder="enter collection name" />
      {singleInput?.map((task, index) => (
        <React.Fragment key={index}>
          {task.tasktype === "task" && (
            <SingleTask task={task} singleInput={singleInput} index={index} />
          )}
          {task.tasktype === "group" && (
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
