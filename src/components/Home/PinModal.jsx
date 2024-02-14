import React, { useState } from "react";
import Style from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSingleInput } from "../../features/taskSlice";

const PinModal = ({saveTask,setPinModal}) => {
const singleInput = useSelector((state) => state.tasklist.singleInput)
const [pin,setPin] = useState('')
    const cancelPin = () => {
        setPinModal(false)
    }

    const pinNumber = (e) => {
        setPin(e.target.value)
    }
    let dispatch = useDispatch();
    const addpin = () => {
        dispatch(setSingleInput({...singleInput, pin }));
        saveTask();
    }
  return (
    <div className="overlay">
      <div className={Style.modal}>
        <h1>Enter Pin</h1>
        <input type="number" name="pin" value={pin} id="pin" placeholder="pin"  onChange={(e)=> pinNumber(e)}/>
        <button className={Style.save} onClick={addpin}>Save</button>
        <button onClick={cancelPin}>Cancel</button>
      </div>
    </div>
  );
};

export default PinModal;
