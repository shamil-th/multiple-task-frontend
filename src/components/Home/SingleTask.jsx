import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSingleInput } from "../../features/taskSlice";
import { useSelector } from "react-redux";

const SingleTask = ({ task, index }) => {
  const singleInput = useSelector((state) => state.tasklist.singleInput);
  let dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const inputchange = (e) => {
    const updatedData = [...singleInput];
    updatedData[index] = { ...updatedData[index], task: e.target.value };
    dispatch(setSingleInput(updatedData));
  };
  return (
    <div>
      <h2>{task.title}</h2>
      <textarea
        name=""
        id=""
        cols="60"
        rows="2"
        onChange={inputchange}
      ></textarea>
    </div>
  );
};

export default SingleTask;
