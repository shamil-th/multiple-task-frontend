import React, { useState } from "react";
import InputForm from "./InputForm";
import TaskButton from "./TaskButton";
import Style from "./Home.module.css";
import TaskModal from "./TaskModal";
import { useDispatch, useSelector } from "react-redux";
import { setSingleInput } from "../../features/taskSlice";

const Home = () => {
  const singleInput = useSelector((state) => state.tasklist.singleInput);
  const [taskTitle,setTaskTitle] = useState('');

  let dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const addSingleTask = (data) => {
    const { title, type } = data;
    let updatedData;
  
    if (type === 'task') {
      updatedData = { title: title, task: "", completed: false, tasktype: type };
    } else if (type === 'group') {
      updatedData = { title: title, task: [], completed: false, tasktype: type };
    }
  
    dispatch(setSingleInput([...singleInput,updatedData]));
  };
  return (
    <div className="container">
      <h1>Task List</h1>
      <div className={Style.input_area}>
        <InputForm singleInput={singleInput} setTaskTitle={setTaskTitle} taskTitle={taskTitle}/>
        <TaskButton setModal={setModal} />
      </div>
      {modal && <TaskModal setModal={setModal} addSingleTask={addSingleTask} />}
    </div>
  );
};

export default Home;
