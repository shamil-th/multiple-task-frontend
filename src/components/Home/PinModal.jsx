import React, { useState } from "react";
import Style from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createTask,
  setAllTask,
} from "../../features/taskSlice";

const PinModal = ({ setPinModal }) => {
  const allTask = useSelector((state) => state.tasklist.allTask);
  const singleInput = useSelector((state) => state.tasklist.singleInput);
  const [pin, setPin] = useState("");

  const cancelPin = () => {
    setPinModal(false);
  };

  const pinNumber = (e) => {
    const newPin = e.target.value; 
    setPin(newPin); 
    dispatch(setAllTask({ ...allTask, pin: newPin, list: singleInput }));
  };
  
  let dispatch = useDispatch();
  const saveTask = () => {
    dispatch(createTask(allTask));
    setPinModal(false);
  };
  return (
    <div className="overlay">
      <div className={Style.modal}>
        <h1>Enter Pin</h1>
        <input
          type="number"
          name="pin"
          value={pin}
          id="pin"
          placeholder="pin"
          onChange={(e) => pinNumber(e)}
        />
        <button className={Style.save} onClick={saveTask}>
          Save
        </button>
        <button onClick={cancelPin}>Cancel</button>
      </div>
    </div>
  );
};

export default PinModal;
